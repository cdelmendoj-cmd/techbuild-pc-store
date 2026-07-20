import FloatingNav from '@/components/FloatingNav';

const TIERS = [
  {
    id: 'budget',
    label: 'Entry Level',
    sub: 'Budget',
    accent: '#8f97ad',
    glow: 'rgba(143,151,173,0.35)',
    tagline: 'Your first rig — solid everyday performance and 1080p gaming without breaking the bank.',
    bestFor: 'Office work · School · Casual gaming',
  },
  {
    id: 'mid',
    label: 'Mid Range',
    sub: 'Mid',
    accent: '#7c6cf0',
    glow: 'rgba(124,108,240,0.4)',
    tagline: 'The sweet spot — handles modern AAA titles, multitasking, and creative work with room to spare.',
    bestFor: '1440p gaming · Streaming · Content creation',
  },
  {
    id: 'high',
    label: 'High Performance',
    sub: 'High',
    accent: '#f5b942',
    glow: 'rgba(245,185,66,0.45)',
    tagline: 'No compromises — 4K maxed out, serious creator work, and the best parts money can buy.',
    bestFor: '4K gaming · 3D rendering · AI workloads',
  },
];

const CATEGORIES = [
  { id: 'cpu', label: 'Processor' },
  { id: 'mobo', label: 'Motherboard' },
  { id: 'gpu', label: 'Graphics Card' },
  { id: 'ram', label: 'Memory' },
  { id: 'storage', label: 'Storage' },
  { id: 'psu', label: 'Power Supply' },
  { id: 'cooler', label: 'CPU Cooler' },
  { id: 'keyboard', label: 'Keyboard' },
  { id: 'mouse', label: 'Mouse' },
  { id: 'monitor', label: 'Monitor' },
  { id: 'case', label: 'System Unit' },
];

const PRODUCTS = {
  budget: {
    cpu: { name: 'Ryzen 5 5500', spec: '6 Cores / 12 Threads · 19MB Cache', price: 6950 },
    mobo: { name: 'B650 Entry Board', spec: 'DDR5 · PCIe 4.0', price: 5800 },
    gpu: { name: 'RTX 4060', spec: '8GB GDDR6 Memory', price: 12750 },
    ram: { name: '16GB DDR5-5200', spec: '2x8GB · CL40', price: 2600 },
    storage: { name: '500GB NVMe SSD', spec: 'Gen4 · ~3500MB/s', price: 2300 },
    psu: { name: '550W 80+ Bronze', spec: '80+ Bronze', price: 3200 },
    cooler: { name: 'Basic Air Cooler', spec: 'Single tower · 4 heatpipes', price: 1450 },
    keyboard: { name: 'Membrane Keyboard', spec: 'Full-size · wired', price: 1150 },
    mouse: { name: 'Basic Wired Mouse', spec: '6400 DPI · wired', price: 650 },
    monitor: { name: '24" 1080p 100Hz', spec: '1920x1080 · 100Hz', price: 5200 },
    case: { name: 'Compact Airflow Unit', spec: 'Micro-ATX · 2 fans included', price: 2450 },
  },
  mid: {
    cpu: { name: 'Ryzen 7 7700', spec: '8 Cores / 16 Threads · 40MB Cache', price: 16250 },
    mobo: { name: 'B850 Balanced Board', spec: 'DDR5 · PCIe 5.0', price: 12750 },
    gpu: { name: 'RTX 5070', spec: '12GB GDDR7 Memory', price: 30150 },
    ram: { name: '32GB DDR5-6000', spec: '2x16GB · CL30', price: 5500 },
    storage: { name: '1TB Gen4 NVMe', spec: 'Gen4 · ~7000MB/s', price: 5800 },
    psu: { name: '750W 80+ Gold', spec: '80+ Gold', price: 6400 },
    cooler: { name: 'Tower Air Cooler', spec: 'Dual tower · dual fan', price: 4050 },
    keyboard: { name: 'Mechanical Hot-Swap', spec: 'TKL · hot-swap', price: 3450 },
    mouse: { name: 'Lightweight Wireless Mouse', spec: '26000 DPI · wireless', price: 2950 },
    monitor: { name: '27" 1440p 165Hz', spec: '2560x1440 · 165Hz', price: 11500 },
    case: { name: 'Mesh Tower Unit', spec: 'ATX · tempered glass', price: 4950 },
  },
  high: {
    cpu: { name: 'Ryzen 9 9950X3D', spec: '16 Cores / 32 Threads · 144MB Cache', price: 34800 },
    mobo: { name: 'X870E Flagship Board', spec: 'DDR5 · Dual USB4', price: 29000 },
    gpu: { name: 'RTX 5090', spec: '32GB GDDR7 Memory', price: 115900 },
    ram: { name: '64GB DDR5-6400', spec: '2x32GB · CL30 · RGB', price: 13800 },
    storage: { name: '2TB Gen5 NVMe', spec: 'Gen5 · ~12000MB/s', price: 17400 },
    psu: { name: '1000W 80+ Platinum', spec: '80+ Platinum', price: 14500 },
    cooler: { name: '360mm AIO Liquid Cooler', spec: '360mm radiator', price: 10450 },
    keyboard: { name: 'Premium Wireless Mech', spec: 'Gasket-mount · 2.4GHz', price: 8700 },
    mouse: { name: 'Flagship Esports Mouse', spec: '32000 DPI · 8000Hz', price: 6900 },
    monitor: { name: '27" 4K 240Hz OLED', spec: '3840x2160 · 240Hz OLED', price: 42000 },
    case: { name: 'Premium Showcase Unit', spec: 'Full-ATX · 4 fans included', price: 9800 },
  },
};

const peso = (n) => '₱' + n.toLocaleString('en-PH');

const tierTotal = (tierId) =>
  Object.values(PRODUCTS[tierId]).reduce((sum, p) => sum + p.price, 0);

export default function Comparison() {
  return (
    <div className="cmp-shell">
      <FloatingNav />

      <header className="cmp-hero">
        <p className="cmp-eyebrow">// build tier comparison</p>
        <h1 className="cmp-title">CHOOSE YOUR TIER</h1>
        <p className="cmp-sub">
          Every part in our shop is sorted into three honest tiers. Compare them side-by-side to see exactly
          what fits your budget — from your first budget rig to a no-compromise flagship battlestation.
        </p>
      </header>

      <div className="cmp-grid">
        {TIERS.map((tier) => {
          const total = tierTotal(tier.id);
          return (
            <article
              key={tier.id}
              className="cmp-column"
              style={{ '--tier-accent': tier.accent, '--tier-glow': tier.glow }}
            >
              <div className="cmp-col-head">
                <span className="cmp-badge">{tier.sub}</span>
                <h2>{tier.label}</h2>
                <p className="cmp-tagline">{tier.tagline}</p>
                <div className="cmp-best-for">
                  <span className="cmp-best-label">Best for</span>
                  <span className="cmp-best-value">{tier.bestFor}</span>
                </div>
                <div className="cmp-total">
                  <span>Full Build Total</span>
                  <strong>{peso(total)}</strong>
                </div>
              </div>

              <div className="cmp-rows">
                {CATEGORIES.map((cat) => {
                  const item = PRODUCTS[tier.id][cat.id];
                  return (
                    <div key={cat.id} className="cmp-row">
                      <div className="cmp-row-label">{cat.label}</div>
                      <div className="cmp-row-name">{item.name}</div>
                      <div className="cmp-row-spec">{item.spec}</div>
                      <div className="cmp-row-price">{peso(item.price)}</div>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      <footer className="cmp-footer">
        All prices are typical Philippine street estimates in ₱ (PHP) — verify before you buy.
      </footer>
    </div>
  );
}