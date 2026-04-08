// =============================================
//  MarketBot AI — app.js
//  Main application logic
// =============================================

let currentMode = 'all';
let chatHistory = [];
let isLoading = false;
let savedOutputs = [];

// ---- INIT ----
window.onload = () => {
  checkApiKey();
  renderCards();
  renderHints();
  showWelcome();
};

function checkApiKey() {
  if (!CONFIG.ANTHROPIC_API_KEY || CONFIG.ANTHROPIC_API_KEY === 'YOUR_API_KEY_HERE') {
    const banner = document.createElement('div');
    banner.className = 'api-banner';
    banner.innerHTML = `⚠️ <strong>API Key Missing!</strong> Open <code>config.js</code> and paste your Anthropic API key to activate MarketBot. 
      Get your free key at <a href="https://console.anthropic.com" target="_blank">console.anthropic.com</a>`;
    document.getElementById('chatArea').before(banner);
  }
}

// ---- MODE ----
function setMode(btn, mode) {
  currentMode = mode;
  document.querySelectorAll('.mpill').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  renderCards();
  renderHints();
}

// ---- RENDER CARDS ----
function renderCards() {
  const grid = document.getElementById('qaGrid');
  grid.innerHTML = MODES[currentMode].cards.map((c, i) =>
    `<div class="qacard" onclick="fillInput(${i})">
      <div class="qi">${c.i}</div>
      <div class="ql">${c.l}</div>
      <div class="qd">${c.d}</div>
    </div>`
  ).join('');
}

// ---- RENDER HINTS ----
function renderHints() {
  const hintsEl = document.getElementById('hints');
  hintsEl.innerHTML = MODES[currentMode].hints.map(h =>
    `<span class="hchip" onclick="setInput('${h.replace(/'/g, "\\'")}')">${h}</span>`
  ).join('');
}

// ---- FILL INPUT FROM CARD ----
function fillInput(index) {
  const prompt = MODES[currentMode].cards[index].p;
  setInput(prompt);
}

function setInput(text) {
  const el = document.getElementById('cinput');
  el.value = text;
  grow(el);
  el.focus();
}

// ---- AUTO RESIZE TEXTAREA ----
function grow(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 130) + 'px';
}

// ---- HANDLE ENTER KEY ----
function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

// ---- ADD MESSAGE TO CHAT ----
function addMsg(role, html) {
  const chat = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = `msg ${role}`;

  const avatarHTML = role === 'user'
    ? `<div class="msg-avatar user">You</div>`
    : `<div class="msg-avatar agent">🤖</div>`;

  div.innerHTML = `${avatarHTML}<div class="bubble">${html}</div>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  return div;
}

// ---- TYPING INDICATOR ----
function showTyping() {
  const chat = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = 'msg agent';
  div.id = 'typing_ind';
  div.innerHTML = `<div class="msg-avatar agent">🤖</div><div class="bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing_ind');
  if (t) t.remove();
}

// ---- FORMAT MARKDOWN ----
function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^### (.+)$/gm, '<strong>$1</strong>')
    .replace(/^## (.+)$/gm, '<strong>$1</strong>')
    .replace(/^# (.+)$/gm, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '• $1')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

// ---- SEND MESSAGE ----
async function sendMessage() {
  const input = document.getElementById('cinput');
  const text = input.value.trim();
  if (!text || isLoading) return;

  if (!CONFIG.ANTHROPIC_API_KEY || CONFIG.ANTHROPIC_API_KEY === 'YOUR_API_KEY_HERE') {
    alert('⚠️ Please add your Anthropic API key in config.js first!');
    return;
  }

  isLoading = true;
  const btn = document.querySelector('.sbtn');
  btn.disabled = true;
  input.value = '';
  input.style.height = 'auto';

  addMsg('user', text);
  chatHistory.push({ role: 'user', content: text });
  showTyping();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CONFIG.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: CONFIG.MODEL,
        max_tokens: CONFIG.MAX_TOKENS,
        system: SYSTEM_PROMPT,
        messages: chatHistory.slice(-12)
      })
    });

    const data = await response.json();
    removeTyping();

    let reply = '';
    if (data.content && data.content.length > 0) {
      reply = data.content.map(b => b.type === 'text' ? b.text : '').join('');
    } else if (data.error) {
      reply = '❌ API Error: ' + (data.error.message || JSON.stringify(data.error));
    } else {
      reply = 'No response. Please try again.';
    }

    chatHistory.push({ role: 'assistant', content: reply });
    savedOutputs.push({ q: text, a: reply, t: new Date().toLocaleString('en-IN') });

    const copyId = 'copy_' + Date.now();
    addMsg('agent', formatText(reply) + `<br><button class="copy-btn" id="${copyId}">📋 Copy</button>`);

    document.getElementById(copyId).onclick = () => {
      navigator.clipboard.writeText(reply).then(() => {
        const btn = document.getElementById(copyId);
        if (btn) { btn.textContent = '✅ Copied!'; setTimeout(() => { if(btn) btn.textContent = '📋 Copy'; }, 2000); }
      });
    };

    document.getElementById('saveBar').classList.remove('hidden');

  } catch (err) {
    removeTyping();
    addMsg('agent', `❌ <strong>Error:</strong> ${err.message}<br><br>Make sure your API key in <code>config.js</code> is correct.`);
  }

  isLoading = false;
  btn.disabled = false;
}

// ---- WELCOME MESSAGE ----
function showWelcome() {
  addMsg('agent', `<strong>Namaste! 🙏 I'm MarketBot — your full-stack digital marketing & e-commerce AI agent.</strong><br><br>
I can help you with:<br>
• Ad copy for Google, Facebook, Instagram, TikTok<br>
• SEO strategy, keywords & product listings (Amazon, Flipkart, Shopify, Meesho)<br>
• Email sequences, WhatsApp campaigns & social media calendars<br>
• 90-day growth plans, pricing strategy & CRO audits<br>
• Analytics, KPIs (ROAS, CAC, LTV) & performance reports<br><br>
<strong>Pick a mode above</strong>, click any quick action card, or just type your question below!`);
}

// ---- COPY ALL OUTPUTS ----
function copyAllOutputs() {
  if (!savedOutputs.length) return;
  const all = savedOutputs.map((o, i) =>
    `=== Output ${i + 1} [${o.t}] ===\nQ: ${o.q}\n\nA:\n${o.a}`
  ).join('\n\n---\n\n');
  navigator.clipboard.writeText(all).then(() => {
    const b = document.querySelector('.save-bar button');
    b.textContent = '✅ Copied!';
    setTimeout(() => b.textContent = 'Copy All Outputs', 2000);
  });
}

// ---- CLEAR CHAT ----
function clearChat() {
  if (!confirm('Clear all chat history?')) return;
  document.getElementById('chatArea').innerHTML = '';
  chatHistory = [];
  savedOutputs = [];
  document.getElementById('saveBar').classList.add('hidden');
  showWelcome();
}

// ---- EXPORT CHAT ----
function exportChat() {
  if (!savedOutputs.length) {
    alert('No outputs yet — ask the agent something first!');
    return;
  }
  const content = `MARKETBOT AI — EXPORTED OUTPUTS
Generated: ${new Date().toLocaleString('en-IN')}
${'='.repeat(60)}

` + savedOutputs.map((o, i) =>
    `Output ${i + 1} — ${o.t}
${'─'.repeat(40)}
QUESTION: ${o.q}

ANSWER:
${o.a}`
  ).join('\n\n' + '='.repeat(60) + '\n\n');

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `marketbot-outputs-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}
