// ============= PRODUCT DATABASE =============
const products = [
    // GPU - Graphics Cards (Budget to Best)
    {
        id: 1,
        name: "GTX 1050 Ti",
        category: "gpu",
        price: 150,
        tier: 1,
        image: "🎮",
        description: "Entry-level gaming graphics card, perfect for casual gaming",
        specs: ["2GB GDDR5 Memory", "768 CUDA Cores", "90W Power", "1050 MHz Clock"]
    },
    {
        id: 2,
        name: "RTX 3060",
        category: "gpu",
        price: 329,
        tier: 2,
        image: "🎮",
        description: "Mid-range ray tracing capable GPU for gaming and content creation",
        specs: ["12GB GDDR6 Memory", "3584 CUDA Cores", "170W Power", "1320 MHz Clock"]
    },
    {
        id: 3,
        name: "RTX 3080 Ti",
        category: "gpu",
        price: 1199,
        tier: 3,
        image: "🎮",
        description: "High-end gaming and professional workstation card",
        specs: ["12GB GDDR6X Memory", "10240 CUDA Cores", "350W Power", "1860 MHz Clock"]
    },
    {
        id: 4,
        name: "RTX 4090",
        category: "gpu",
        price: 1999,
        tier: 4,
        image: "🎮",
        description: "Ultimate performance GPU for extreme gaming and professional work",
        specs: ["24GB GDDR6X Memory", "16384 CUDA Cores", "450W Power", "2520 MHz Clock"]
    },

    // CPU - Processors (Budget to Best)
    {
        id: 5,
        name: "Ryzen 5 5500",
        category: "cpu",
        price: 99,
        tier: 1,
        image: "⚙️",
        description: "Budget-friendly 6-core processor for everyday computing",
        specs: ["6 Cores / 12 Threads", "3.6-4.2 GHz", "65W TDP", "AM4 Socket"]
    },
    {
        id: 6,
        name: "Ryzen 7 5800X",
        category: "cpu",
        price: 299,
        tier: 2,
        image: "⚙️",
        description: "High-performance 8-core processor for gaming and multitasking",
        specs: ["8 Cores / 16 Threads", "3.8-4.7 GHz", "105W TDP", "AM4 Socket"]
    },
    {
        id: 7,
        name: "Ryzen 9 5900X",
        category: "cpu",
        price: 549,
        tier: 3,
        image: "⚙️",
        description: "Premium 12-core processor for professional workloads",
        specs: ["12 Cores / 24 Threads", "3.7-4.6 GHz", "105W TDP", "AM4 Socket"]
    },
    {
        id: 8,
        name: "Ryzen 9 7950X",
        category: "cpu",
        price: 699,
        tier: 4,
        image: "⚙️",
        description: "Top-tier 16-core processor for extreme performance",
        specs: ["16 Cores / 32 Threads", "4.5-5.7 GHz", "105W TDP", "AM5 Socket"]
    },

    // MONITORS (Budget to Best)
    {
        id: 9,
        name: "1080p 60Hz Monitor",
        category: "monitor",
        price: 149,
        tier: 1,
        image: "🖥️",
        description: "Basic 24-inch Full HD monitor for everyday use",
        specs: ["1920x1080 Resolution", "60Hz Refresh Rate", "5ms Response Time", "IPS Panel"]
    },
    {
        id: 10,
        name: "1080p 144Hz Gaming",
        category: "monitor",
        price: 249,
        tier: 2,
        image: "🖥️",
        description: "24-inch gaming monitor with high refresh rate",
        specs: ["1920x1080 Resolution", "144Hz Refresh Rate", "1ms Response Time", "TN Panel"]
    },
    {
        id: 11,
        name: "1440p 144Hz Pro",
        category: "monitor",
        price: 399,
        tier: 3,
        image: "🖥️",
        description: "27-inch high-quality monitor for gaming and work",
        specs: ["2560x1440 Resolution", "144Hz Refresh Rate", "1ms Response Time", "IPS Panel"]
    },
    {
        id: 12,
        name: "4K 144Hz Ultra",
        category: "monitor",
        price: 899,
        tier: 4,
        image: "🖥️",
        description: "32-inch premium 4K gaming and professional monitor",
        specs: ["3840x2160 Resolution", "144Hz Refresh Rate", "0.5ms Response Time", "IPS Panel"]
    },

    // PSU - Power Supplies (Budget to Best)
    {
        id: 13,
        name: "500W Bronze PSU",
        category: "psu",
        price: 49,
        tier: 1,
        image: "⚡",
        description: "Basic 500W power supply for budget builds",
        specs: ["500W Output", "Bronze Rated 82%", "Modullar", "120mm Fan"]
    },
    {
        id: 14,
        name: "750W Gold PSU",
        category: "psu",
        price: 99,
        tier: 2,
        image: "⚡",
        description: "Reliable 750W power supply for gaming builds",
        specs: ["750W Output", "Gold Rated 87%", "Fully Modular", "120mm Fan"]
    },
    {
        id: 15,
        name: "1000W Platinum PSU",
        category: "psu",
        price: 179,
        tier: 3,
        image: "⚡",
        description: "Premium 1000W power supply for high-end builds",
        specs: ["1000W Output", "Platinum Rated 90%", "Fully Modular", "140mm Fan"]
    },
    {
        id: 16,
        name: "1200W Titanium PSU",
        category: "psu",
        price: 249,
        tier: 4,
        image: "⚡",
        description: "Ultimate 1200W power supply with best efficiency",
        specs: ["1200W Output", "Titanium Rated 94%", "Fully Modular", "140mm Fan"]
    },

    // RAM (Budget to Best)
    {
        id: 17,
        name: "8GB DDR4 2666MHz",
        category: "ram",
        price: 25,
        tier: 1,
        image: "💾",
        description: "Basic 8GB RAM stick for everyday computing",
        specs: ["8GB Capacity", "DDR4 2666MHz", "1.2V", "CAS Latency 19"]
    },
    {
        id: 18,
        name: "16GB DDR4 3200MHz",
        category: "ram",
        price: 59,
        tier: 2,
        image: "💾",
        description: "16GB RAM for gaming and multitasking",
        specs: ["16GB Capacity", "DDR4 3200MHz", "1.35V", "CAS Latency 16"]
    },
    {
        id: 19,
        name: "32GB DDR4 3600MHz RGB",
        category: "ram",
        price: 149,
        tier: 3,
        image: "💾",
        description: "32GB high-speed RAM with RGB lighting",
        specs: ["32GB Capacity", "DDR4 3600MHz", "1.35V", "CAS Latency 16"]
    },
    {
        id: 20,
        name: "64GB DDR5 5600MHz",
        category: "ram",
        price: 349,
        tier: 4,
        image: "💾",
        description: "Ultimate 64GB DDR5 RAM for professional workstations",
        specs: ["64GB Capacity", "DDR5 5600MHz", "1.25V", "CAS Latency 28"]
    },

    // STORAGE (Budget to Best)
    {
        id: 21,
        name: "240GB SSD",
        category: "storage",
        price: 29,
        tier: 1,
        image: "💿",
        description: "Budget SSD for OS installation",
        specs: ["240GB Capacity", "SATA 3", "550MB/s Read", "2.5 inch"]
    },
    {
        id: 22,
        name: "500GB NVMe SSD",
        category: "storage",
        price: 59,
        tier: 2,
        image: "💿",
        description: "Fast NVMe SSD for gaming and applications",
        specs: ["500GB Capacity", "NVMe PCIe 3.0", "3500MB/s Read", "M.2 Form Factor"]
    },
    {
        id: 23,
        name: "1TB NVMe Pro SSD",
        category: "storage",
        price: 129,
        tier: 3,
        image: "💿",
        description: "Professional-grade fast NVMe SSD",
        specs: ["1TB Capacity", "NVMe PCIe 4.0", "7000MB/s Read", "M.2 Form Factor"]
    },
    {
        id: 24,
        name: "2TB NVMe Enterprise",
        category: "storage",
        price: 299,
        tier: 4,
        image: "💿",
        description: "Enterprise-grade high-speed storage",
        specs: ["2TB Capacity", "NVMe PCIe 5.0", "14000MB/s Read", "M.2 Form Factor"]
    }
];

// ============= SHOPPING CART =============
let cart = [];
let selectedProduct = null;

// Initialize the store
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupFilterButtons();
    loadCartFromLocalStorage();
    updateCartUI();
});

// ============= DISPLAY PRODUCTS =============
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem;"><p>No products found</p></div>';
        return;
    }

    productsToDisplay.forEach((product, index) => {
        const card = createProductCard(product, index);
        grid.appendChild(card);
    });
}

// ============= CREATE PRODUCT CARD =============
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;

    // Format price with comma for thousands
    const formattedPrice = formatPrice(product.price);

    card.innerHTML = `
        <div class="product-image">
            ${product.image}
        </div>
        <div class="product-content">
            <span class="product-category">${capitalizeFirstLetter(product.category)}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-specs">
                ${product.specs[0]}
            </div>
            <div class="product-price">$${formattedPrice}</div>
            <div class="product-actions">
                <button class="btn btn-view" onclick="openProductModal(${product.id})">
                    <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn btn-primary" onclick="quickAddToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add
                </button>
            </div>
        </div>
    `;

    return card;
}

// ============= FILTER PRODUCTS =============
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get category
            const category = btn.getAttribute('data-category');
            
            // Filter products
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                displayProducts(filtered);
            }
        });
    });
}

// ============= PRODUCT MODAL =============
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedProduct = product;
    document.getElementById('quantityInput').value = 1;

    // Update modal content
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = capitalizeFirstLetter(product.category);
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = `$${formatPrice(product.price)}`;
    document.getElementById('modalImage').textContent = product.image;
    document.getElementById('modalImage').style.fontSize = '6rem';

    // Update specifications
    const specsList = document.getElementById('modalSpecs');
    specsList.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');

    // Show modal with animation
    const modal = document.getElementById('productModal');
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    selectedProduct = null;
}

// ============= QUANTITY CONTROLS IN MODAL =============
function incrementQuantity() {
    const input = document.getElementById('quantityInput');
    input.value = parseInt(input.value) + 1;
}

function decrementQuantity() {
    const input = document.getElementById('quantityInput');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// ============= ADD TO CART FROM MODAL =============
function addToCartFromModal() {
    if (!selectedProduct) return;
    
    const quantity = parseInt(document.getElementById('quantityInput').value);
    addToCart(selectedProduct.id, quantity);
    closeModal();
}

// ============= QUICK ADD TO CART =============
function quickAddToCart(productId) {
    addToCart(productId, 1);
}

// ============= ADD TO CART LOGIC =============
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    // Save to local storage
    saveCartToLocalStorage();
    updateCartUI();
    showNotification(`${product.name} added to cart!`, 'success');
}

// ============= REMOVE FROM CART =============
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    updateCartUI();
    showNotification('Item removed from cart', 'info');
}

// ============= UPDATE CART QUANTITY =============
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCartToLocalStorage();
            updateCartUI();
        }
    }
}

// ============= UPDATE CART UI =============
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;

    // Update cart items display
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>$${formatPrice(item.price)}</p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, this.value)">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-price">$${formatPrice(item.price * item.quantity)}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `).join('');
    }

    // Update summary
    updateCartSummary();
}

// ============= UPDATE CART SUMMARY =============
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${formatPrice(subtotal)}`;
    document.getElementById('tax').textContent = `$${formatPrice(tax)}`;
    document.getElementById('total').textContent = `$${formatPrice(total)}`;
}

// ============= OPEN CART MODAL =============
document.querySelector('.cart-link').addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.getElementById('cartModal');
    modal.classList.add('active');
});

// ============= CLOSE CART MODAL =============
function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

// ============= CHECKOUT =============
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxedTotal = total * 1.1;

    // Simulate checkout
    showNotification(`Processing payment of $${formatPrice(taxedTotal)}...`, 'info');
    
    setTimeout(() => {
        showNotification('✅ Order placed successfully! Thank you for your purchase!', 'success');
        cart = [];
        saveCartToLocalStorage();
        updateCartUI();
        closeCart();
    }, 2000);
}

// ============= LOCAL STORAGE FUNCTIONS =============
function saveCartToLocalStorage() {
    localStorage.setItem('techbuildCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('techbuildCart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading cart from localStorage:', e);
            cart = [];
        }
    }
}

// ============= NOTIFICATION SYSTEM =============
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============= UTILITY FUNCTIONS =============
function formatPrice(price) {
    return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ============= KEYBOARD SHORTCUTS =============
document.addEventListener('keydown', (e) => {
    // Press 'C' to open cart
    if (e.key.toLowerCase() === 'c' && !e.ctrlKey) {
        const modal = document.getElementById('cartModal');
        modal.classList.toggle('active');
    }
    
    // Press 'Escape' to close modals
    if (e.key === 'Escape') {
        document.getElementById('productModal').classList.remove('active');
        document.getElementById('cartModal').classList.remove('active');
    }
});

// ============= ANIMATION FOR NOTIFICATIONS =============
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ============= LAZY LOADING AND OPTIMIZATION =============
// Simulate stock levels for added realism
const getProductStock = (productId) => {
    return Math.floor(Math.random() * 50) + 5;
};

// Add stock indicator to cards (optional enhancement)
console.log('TechBuild PC Store JavaScript loaded successfully!');
console.log('Features: Shopping cart, product filtering, notifications, local storage persistence');