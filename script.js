// Basic product data and UI logic for the PC store demo.
const products = [
  {
    id: 'p1',
    name: 'Sparrow 3000',
    tier: 'entry',
    price: 499,
    short: 'Compact office & study PC',
    desc: 'An affordable entry-level desktop for browsing, documents, and light gaming.',
    specs: { CPU: 'Intel i3', GPU: 'Integrated', RAM: '8GB', SSD: '256GB' }
  },
  {
    id: 'p2',
    name: 'Comet Mini',
    tier: 'entry',
    price: 599,
    short: 'Tiny form-factor, everyday performance',
    desc: 'Small, efficient, and wallet-friendly — perfect for students and families.',
    specs: { CPU: 'AMD Ryzen 3', GPU: 'Integrated', RAM: '8GB', SSD: '256GB' }
  },
  {
    id: 'p3',
    name: 'Apex 560',
    tier: 'mid',
    price: 999,
    short: 'Balanced gaming and productivity',
    desc: 'Great for creators and mainstream gamers — solid CPU & discrete GPU.',
    specs: { CPU: 'Intel i5', GPU: 'GTX 1660', RAM: '16GB', SSD: '512GB' }
  },
  {
    id: 'p4',
    name: 'Vector Pro',
    tier: 'mid',
    price: 1199,
    short: 'Content creation made faster',
    desc: 'Excellent multitasking, video editing, and 3D work on a budget.',
    specs: { CPU: 'AMD Ryzen 5', GPU: 'RTX 3050', RAM: '16GB', SSD: '512GB' }
  },
  {
    id: 'p5',
    name: 'Zenith X',
    tier: 'high',
    price: 2199,
    short: 'Top-tier performance for pros',
    desc: 'High-end CPU/GPU, massive memory and storage options for demanding workflows.',
    specs: { CPU: 'Intel i9', GPU: 'RTX 4090', RAM: '32GB', SSD: '1TB' }
  },
  {
    id: 'p6',
    name: 'Obsidian RTX',
    tier: 'high',
    price: 2599,
    short: 'Ultimate gaming & AI workstation',
    desc: 'For extreme gaming, streaming, and ML workloads.',
    specs: { CPU: 'AMD Threadripper', GPU: 'RTX 4090 Ti', RAM: '64GB', SSD: '2TB' }
  }
];

const state = {
  filter: 'all',
  cartCount: 0,
  activeProduct: null
};

const productListEl = document.getElementById('productList');
const cartCountEl = document.getElementById('cartCount');
const tierButtons = document.querySelectorAll('.tier');
const modalBackdrop = document.getElementById('modalBackdrop');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const toastEl = document.getElementById('toast');
const modalTitle = document.getElementById('modalTitle');
const modalTier = document.getElementById('modalTier');
const modalDesc = document.getElementById('modalDesc');
const modalSpecs = document.getElementById('modalSpecs');
const modalPrice = document.getElementById('modalPrice');
const optRam = document.getElementById('optRam');
const optSsd = document.getElementById('optSsd');
const addToCartBtn = document.getElementById('addToCart');
const modalImage = document.getElementById('modalImage');

function formatPrice(n){
  return '$' + n.toFixed(0);
}

function renderProducts(){
  productListEl.innerHTML = '';
  const filtered = products.filter(p => state.filter === 'all' ? true : p.tier === state.filter);
  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="thumb" aria-hidden="true">${p.name.split(' ')[0]}</div>
      <div><h4>${p.name}</h4><div class="meta">${p.short}</div></div>
      <div class="card-actions">
        <div>
          <div class="price">${formatPrice(p.price)}</div>
          <div class="meta">${p.specs.CPU} • ${p.specs.GPU}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn ghost view" data-id="${p.id}">View</button>
          <button class="btn primary ${p.tier==='mid'?'mid':p.tier==='high'?'high':''} buy" data-id="${p.id}">Buy</button>
        </div>
      </div>
    `;
    productListEl.appendChild(card);
  });
  // Attach events
  productListEl.querySelectorAll('.view').forEach(btn => {
    btn.addEventListener('click', e => openModal(e.target.dataset.id));
  });
  productListEl.querySelectorAll('.buy').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = e.target.dataset.id;
      const p = products.find(x => x.id === id);
      addToCart(p, {});
      showToast(`${p.name} added to cart`);
    });
  });
}

function updateCartCount(){
  cartCountEl.textContent = state.cartCount;
}

function setFilter(tier){
  state.filter = tier;
  tierButtons.forEach(btn => {
    const is = btn.dataset.tier === tier;
    btn.classList.toggle('active', is);
    btn.setAttribute('aria-selected', is ? 'true':'false');
  });
  renderProducts();
}

// Modal logic
function openModal(id){
  const p = products.find(x => x.id === id);
  state.activeProduct = p;
  modalTitle.textContent = p.name;
  modalTier.textContent = (p.tier === 'entry') ? 'Entry-level' : (p.tier === 'mid') ? 'Mid-range' : 'High-performance';
  modalDesc.textContent = p.desc;
  modalSpecs.innerHTML = '';
  for(const [k,v] of Object.entries(p.specs)){
    const tr = document.createElement('tr');
    tr.innerHTML = `<td style="width:140px;font-weight:700">${k}</td><td>${v}</td>`;
    modalSpecs.appendChild(tr);
  }
  optRam.value = "0";
  optSsd.value = "0";
  modalImage.textContent = p.name;
  updateModalPrice();
  modalBackdrop.hidden = false;
  productModal.showModal?.();
  // trap focus could be added; keep simple for demo
}

function closeModal(){
  productModal.close?.();
  modalBackdrop.hidden = true;
  state.activeProduct = null;
}

function updateModalPrice(){
  if(!state.activeProduct) return;
  const base = state.activeProduct.price;
  const ramExtra = parseFloat(optRam.selectedOptions[0].dataset.price || 0);
  const ssdExtra = parseFloat(optSsd.selectedOptions[0].dataset.price || 0);
  const total = base + ramExtra + ssdExtra;
  modalPrice.textContent = formatPrice(total);
}

function addToCart(product, opts){
  state.cartCount += 1;
  updateCartCount();
  // For demo, optionally store last item in localStorage (stretch)
  try{ localStorage.setItem('demo_cart_count', state.cartCount); }catch(e){}
}

function showToast(message, ms = 1800){
  toastEl.textContent = message;
  toastEl.hidden = false;
  setTimeout(()=>{ toastEl.hidden = true; }, ms);
}

// Event wiring
document.querySelectorAll('.tier').forEach(btn => {
  btn.addEventListener('click', () => setFilter(btn.dataset.tier));
});
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
  if(e.target === modalBackdrop) closeModal();
});
optRam.addEventListener('change', updateModalPrice);
optSsd.addEventListener('change', updateModalPrice);
addToCartBtn.addEventListener('click', () => {
  if(!state.activeProduct) return;
  const opts = {
    ram: optRam.value,
    ssd: optSsd.value
  };
  addToCart(state.activeProduct, opts);
  showToast(`${state.activeProduct.name} added to cart`);
  closeModal();
});

// Initialize from possible persisted cart
(function init(){
  try{
    const saved = parseInt(localStorage.getItem('demo_cart_count') || '0', 10);
    if(!isNaN(saved) && saved > 0) state.cartCount = saved;
  }catch(e){}
  updateCartCount();
  renderProducts();
})();