// ============ MEDASCEND FMT VIEWER ENGINE ============
// Reads window.chapterData (set by per-chapter data.js) and renders the viewer UI.
// Handles: sidebar nav, diagram rendering, clickable nodes → ⓘ panel,
//          DTs, MCQ reveal-answer, subjective Q reveal + jump-link.
// ======================================================

(function () {
  'use strict';

  const data = window.chapterData;
  if (!data) {
    document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif;color:#C8534F">⚠️ No chapter data loaded.</p>';
    return;
  }

  // -------- DOM scaffold --------
  function el(tag, attrs, ...children) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.startsWith('on') && typeof attrs[k] === 'function') e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    for (const c of children) {
      if (c == null) continue;
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return e;
  }

  function build() {
    document.title = `Ch ${data.chapterNumber} — ${data.chapterTitle} · Medascend FMT`;

    // Topbar
    const topbar = el('header', { class: 'topbar' },
      el('div', { class: 'brand' }, '📘 ', el('span', null, 'Medascend FMT')),
      el('div', { class: 'brand-sub' }, `Chapter ${String(data.chapterNumber).padStart(2,'0')} — ${data.chapterTitle}`),
      el('a', { href: '../../index.html' }, '← Chapter index')
    );

    // Sidebar
    const sidebar = el('nav', { class: 'sidebar' });
    sidebar.appendChild(el('h3', null, 'Chapter'));
    sidebar.appendChild(navItem('prereqs', '📋 Prerequisites'));

    sidebar.appendChild(el('h3', null, 'Diagrams'));
    data.diagrams.forEach(d => sidebar.appendChild(navItem('diagram-' + d.id, `${d.id} · ${d.shortTitle}`)));

    sidebar.appendChild(el('h3', null, 'Diff-Tables'));
    data.diffTables.forEach(t => sidebar.appendChild(navItem('dt-' + t.id, `${t.id} · ${t.shortTitle}`)));

    sidebar.appendChild(el('h3', null, 'Q-Bank'));
    sidebar.appendChild(navItem('subjective', '📝 Subjective Qs'));
    sidebar.appendChild(navItem('mcqs', '🎯 All MCQs'));
    sidebar.appendChild(navItem('footer', '🧠 Mnemonics + Footer'));

    // Content
    const content = el('main', { class: 'content', id: 'content' });

    // ⓘ panel
    const infoPanel = el('aside', { class: 'info-panel', id: 'infoPanel' },
      el('div', { class: 'info-panel-header' },
        el('span', { class: 'label', id: 'infoLabel' }, 'Info'),
        el('button', { class: 'info-panel-close', onclick: closeInfo }, '×')
      ),
      el('div', { class: 'info-panel-body', id: 'infoBody' })
    );

    const app = el('div', { class: 'app' }, sidebar, content);
    document.body.appendChild(topbar);
    document.body.appendChild(app);
    document.body.appendChild(infoPanel);

    route('prereqs');
  }

  function navItem(key, label) {
    return el('a', { class: 'nav-item', 'data-key': key, onclick: (e) => { e.preventDefault(); route(key); } }, label);
  }

  function setActiveNav(key) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.key === key));
  }

  function route(key) {
    setActiveNav(key);
    const c = document.getElementById('content');
    c.innerHTML = '';
    closeInfo();

    if (key === 'prereqs') return renderPrereqs(c);
    if (key === 'subjective') return renderSubjective(c);
    if (key === 'mcqs') return renderAllMcqs(c);
    if (key === 'footer') return renderFooter(c);
    if (key.startsWith('diagram-')) return renderDiagram(c, key.slice(8));
    if (key.startsWith('dt-')) return renderDT(c, key.slice(3));
  }

  // -------- PREREQS --------
  function renderPrereqs(c) {
    c.appendChild(el('div', { class: 'crumb' }, `Chapter ${data.chapterNumber} · ${data.chapterTitle}`));
    c.appendChild(el('h1', null, '📋 Chapter Prerequisites'));
    c.appendChild(el('p', { class: 'section-intro' }, 'Terms a student must already understand before entering Diagram 1. Diagram-specific terms are released inside that diagram.'));

    const tbl = el('table', { class: 'prereq-table' });
    const thead = el('thead', null, el('tr', null, el('th', null, '#'), el('th', null, 'Term'), el('th', null, 'Plain meaning')));
    tbl.appendChild(thead);
    const tbody = el('tbody');
    data.prereqs.forEach((p, i) => {
      tbody.appendChild(el('tr', null,
        el('td', null, String(i+1)),
        el('td', null, el('strong', null, p.term)),
        el('td', null, p.meaning)
      ));
    });
    tbl.appendChild(tbody);
    c.appendChild(tbl);

    c.appendChild(el('hr', { class: 'divider' }));
    c.appendChild(el('h2', null, '📊 Differentiation Tables in this Chapter'));
    const dtTbl = el('table');
    dtTbl.appendChild(el('thead', null, el('tr', null, el('th', null, 'DT'), el('th', null, 'Comparison'), el('th', null, ''))));
    const dtBody = el('tbody');
    data.diffTables.forEach(t => {
      const btn = el('button', { class: 'btn', style: 'padding:5px 12px;background:#1F3A6E;color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;', onclick: () => route('dt-' + t.id) }, '→ Open');
      dtBody.appendChild(el('tr', null, el('td', null, el('strong', null, t.id)), el('td', null, t.title), el('td', null, btn)));
    });
    dtTbl.appendChild(dtBody);
    c.appendChild(dtTbl);
  }

  // -------- DIAGRAM --------
  function renderDiagram(c, id) {
    const d = data.diagrams.find(x => x.id === id);
    if (!d) return c.appendChild(el('p', null, 'Diagram not found.'));

    c.appendChild(el('div', { class: 'crumb' }, `Chapter ${data.chapterNumber} · Diagrams · ${d.id}`));
    c.appendChild(el('h1', null, `${d.id} — ${d.title}`));

    if (d.prereqs && d.prereqs.length) {
      c.appendChild(el('h2', null, '📋 Diagram-specific Prerequisites'));
      const tbl = el('table');
      tbl.appendChild(el('thead', null, el('tr', null, el('th', null, 'Term'), el('th', null, 'Plain meaning'))));
      const body = el('tbody');
      d.prereqs.forEach(p => body.appendChild(el('tr', null, el('td', null, el('strong', null, p.term)), el('td', null, p.meaning))));
      tbl.appendChild(body);
      c.appendChild(tbl);
    }

    c.appendChild(el('h2', null, '🖼️ Diagram'));
    const wrap = el('div', { class: 'diagram-wrap' });
    wrap.innerHTML = d.svg;
    c.appendChild(wrap);
    c.appendChild(el('p', { class: 'diagram-hint' }, '💡 Click any ⓘ icon on the diagram to open the explanatory panel.'));

    // Wire click handlers on nodes
    wrap.querySelectorAll('[data-node-id]').forEach(n => {
      n.classList.add('node');
      n.addEventListener('click', () => openInfo(d.id, n.dataset.nodeId));
    });

    if (d.mnemonic) {
      const m = el('div', { class: 'diagram-mnemonic' });
      m.appendChild(el('h4', null, '🧠 Mnemonic — ' + d.mnemonic.name));
      const body = el('div'); body.innerHTML = d.mnemonic.html; m.appendChild(body);
      m.appendChild(el('div', { class: 'tag' }, d.mnemonic.tag));
      c.appendChild(m);
    }

    if (d.mcqs && d.mcqs.length) {
      c.appendChild(el('h2', null, '🎯 MCQs'));
      d.mcqs.forEach((q, i) => c.appendChild(renderMcq(q, i+1)));
    }
  }

  // -------- ⓘ PANEL --------
  function openInfo(diagramId, nodeId) {
    const d = data.diagrams.find(x => x.id === diagramId);
    if (!d) return;
    const node = d.nodes.find(n => n.nodeId === nodeId);
    if (!node) return;

    document.getElementById('infoLabel').textContent = node.label;
    const body = document.getElementById('infoBody');
    body.innerHTML = '';
    const contentDiv = el('div'); contentDiv.innerHTML = node.info; body.appendChild(contentDiv);

    if (node.tags && node.tags.length) {
      const tagRow = el('div', { class: 'tag-row' });
      node.tags.forEach(t => tagRow.appendChild(el('span', { class: 'tag' }, t)));
      body.appendChild(tagRow);
    }

    document.getElementById('infoPanel').classList.add('open');
  }

  function closeInfo() {
    const p = document.getElementById('infoPanel');
    if (p) p.classList.remove('open');
  }

  // -------- DIFF TABLE --------
  function renderDT(c, id) {
    const t = data.diffTables.find(x => x.id === id);
    if (!t) return c.appendChild(el('p', null, 'DT not found.'));

    c.appendChild(el('div', { class: 'crumb' }, `Chapter ${data.chapterNumber} · Differentiation Tables · ${t.id}`));
    const block = el('div', { class: 'dt-block' });
    block.appendChild(el('div', { class: 'dt-id' }, t.id));
    block.appendChild(el('h1', { class: 'dt-title' }, t.title));

    if (t.intro) block.appendChild(el('p', { class: 'section-intro' }, t.intro));

    const tbl = el('table');
    tbl.appendChild(el('thead', null, el('tr', null, ...t.columns.map(col => el('th', null, col)))));
    const body = el('tbody');
    t.rows.forEach(r => {
      const tr = el('tr');
      r.forEach(cell => {
        const td = el('td'); td.innerHTML = cell; tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    tbl.appendChild(body);
    block.appendChild(tbl);

    if (t.parentDiagrams && t.parentDiagrams.length) {
      const jl = el('div', { class: 'dt-jumplinks' });
      jl.appendChild(document.createTextNode('🔗 Parent diagrams: '));
      t.parentDiagrams.forEach(pid => {
        const d = data.diagrams.find(x => x.id === pid);
        if (d) jl.appendChild(el('button', { class: 'btn', onclick: () => route('diagram-' + pid) }, `→ ${pid} ${d.shortTitle}`));
      });
      block.appendChild(jl);
    }
    c.appendChild(block);

    if (t.mcqs && t.mcqs.length) {
      c.appendChild(el('h2', null, '🎯 MCQs on Discriminating Features'));
      t.mcqs.forEach((q, i) => c.appendChild(renderMcq(q, i+1)));
    }
  }

  // -------- MCQ --------
  function renderMcq(q, num) {
    const m = el('div', { class: 'mcq' });
    m.appendChild(el('div', { class: 'q-num' }, 'Q' + num));
    const stem = el('div', { class: 'q-stem' }); stem.innerHTML = q.stem; m.appendChild(stem);
    const ul = el('ul', { class: 'options' });
    q.options.forEach((o, i) => ul.appendChild(el('li', null, `${String.fromCharCode(65+i)}) ${o}`)));
    m.appendChild(ul);

    const ansBox = el('div', { class: 'answer-box' });
    const correctText = q.options[q.answerIdx];
    ansBox.appendChild(el('div', null,
      el('span', { class: 'correct' }, `✅ ${String.fromCharCode(65 + q.answerIdx)} — ${correctText}`)
    ));
    if (q.explain) {
      const ex = el('div', { class: 'explain' }); ex.innerHTML = '💡 ' + q.explain; ansBox.appendChild(ex);
    }
    if (q.tag) ansBox.appendChild(el('span', { class: 'tag' }, q.tag));

    const btn = el('button', { class: 'reveal-btn', onclick: () => { ansBox.classList.toggle('shown'); btn.textContent = ansBox.classList.contains('shown') ? '🔒 Hide Answer' : '🔓 Reveal Answer'; } }, '🔓 Reveal Answer');
    m.appendChild(btn);
    m.appendChild(ansBox);
    return m;
  }

  // -------- SUBJECTIVE Q --------
  function renderSubjective(c) {
    c.appendChild(el('div', { class: 'crumb' }, `Chapter ${data.chapterNumber} · Q-Bank`));
    c.appendChild(el('h1', null, '📝 Subjective Q-Bank'));
    c.appendChild(el('p', { class: 'section-intro' }, `${data.subjectiveQs.length} entries · Each carries a complete standalone model answer. Reveal-answer + jump-link to source diagram.`));

    data.subjectiveQs.forEach(q => {
      const sq = el('div', { class: 'subj-q' });
      const head = el('div', { class: 'head' });
      head.appendChild(el('span', { class: 'id' }, q.id));
      head.appendChild(el('span', { class: 'meta' }, `[${q.type} · ${q.marks} marks · ${q.time}]`));
      const tagClass = q.tag.toLowerCase().includes('inspired') ? 'inspired' : 'qbank';
      head.appendChild(el('span', { class: 'tag ' + tagClass }, q.tag));
      sq.appendChild(head);

      const qq = el('div', { class: 'question' }); qq.innerHTML = '<strong>Q:</strong> ' + q.question; sq.appendChild(qq);

      const ansBox = el('div', { class: 'answer-box' });
      ansBox.innerHTML = q.answer;
      if (q.sources && q.sources.length) {
        const links = el('div', { class: 'links' });
        links.appendChild(document.createTextNode('🔗 Source artefacts: '));
        q.sources.forEach(s => links.appendChild(el('span', null, s, ' · ')));
        ansBox.appendChild(links);
      }

      const row = el('div', { class: 'reveal-row' });
      const rb = el('button', { class: 'btn reveal-btn', onclick: () => { ansBox.classList.toggle('shown'); rb.textContent = ansBox.classList.contains('shown') ? '🔒 Hide Model Answer' : '🔓 Reveal Model Answer'; } }, '🔓 Reveal Model Answer');
      row.appendChild(rb);

      if (q.jumpToDiagram) {
        const d = data.diagrams.find(x => x.id === q.jumpToDiagram);
        if (d) row.appendChild(el('button', { class: 'btn jump-btn', onclick: () => route('diagram-' + q.jumpToDiagram) }, `↗ Source diagram: ${q.jumpToDiagram}`));
      }
      if (q.jumpToDT) {
        const t = data.diffTables.find(x => x.id === q.jumpToDT);
        if (t) row.appendChild(el('button', { class: 'btn jump-btn', onclick: () => route('dt-' + q.jumpToDT) }, `↗ Source DT: ${q.jumpToDT}`));
      }
      sq.appendChild(row);
      sq.appendChild(ansBox);
      c.appendChild(sq);
    });
  }

  // -------- ALL MCQs --------
  function renderAllMcqs(c) {
    c.appendChild(el('div', { class: 'crumb' }, `Chapter ${data.chapterNumber} · MCQs`));
    c.appendChild(el('h1', null, '🎯 All MCQs (compiled)'));
    let total = 0; let pyq = 0;
    data.diagrams.forEach(d => (d.mcqs || []).forEach(q => { total++; if ((q.tag||'').includes('NEET-PG') || (q.tag||'').includes('INI-CET')) pyq++; }));
    data.diffTables.forEach(t => (t.mcqs || []).forEach(q => { total++; if ((q.tag||'').includes('NEET-PG') || (q.tag||'').includes('INI-CET')) pyq++; }));
    c.appendChild(el('p', { class: 'section-intro' }, `${total} MCQs · ${pyq} verbatim PYQs from NEET-PG / INI-CET (2016–2024)`));

    data.diagrams.forEach(d => {
      if (!d.mcqs || !d.mcqs.length) return;
      c.appendChild(el('h2', null, `${d.id} — ${d.title}`));
      d.mcqs.forEach((q, i) => c.appendChild(renderMcq(q, i+1)));
    });
    data.diffTables.forEach(t => {
      if (!t.mcqs || !t.mcqs.length) return;
      c.appendChild(el('h2', null, `${t.id} — ${t.title}`));
      t.mcqs.forEach((q, i) => c.appendChild(renderMcq(q, i+1)));
    });
  }

  // -------- FOOTER --------
  function renderFooter(c) {
    c.appendChild(el('div', { class: 'crumb' }, `Chapter ${data.chapterNumber} · Footer`));
    c.appendChild(el('h1', null, '🧠 Consolidated Mnemonics + High-Yield Pickups'));

    const tbl = el('table');
    tbl.appendChild(el('thead', null, el('tr', null, el('th', null, 'Source'), el('th', null, 'Mnemonic'), el('th', null, 'Type'))));
    const body = el('tbody');
    data.diagrams.forEach(d => {
      if (!d.mnemonic) return;
      const r = el('tr');
      const link = el('a', { href: '#', onclick: (e) => { e.preventDefault(); route('diagram-' + d.id); } }, `${d.id} · ${d.shortTitle}`);
      const td = el('td'); td.appendChild(link); r.appendChild(td);
      const mtd = el('td'); mtd.innerHTML = `<strong>${d.mnemonic.name}</strong>`; r.appendChild(mtd);
      r.appendChild(el('td', null, d.mnemonic.tag));
      body.appendChild(r);
    });
    tbl.appendChild(body);
    c.appendChild(tbl);

    if (data.highYield && data.highYield.length) {
      c.appendChild(el('h2', null, '🎯 High-Yield Pickups'));
      const ol = el('ol');
      data.highYield.forEach(h => { const li = el('li'); li.innerHTML = h; ol.appendChild(li); });
      c.appendChild(ol);
    }
  }

  function navigate(key) { route(key); }
  window.__nav = navigate;

  build();
})();
