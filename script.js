// JS for FIRE90S Fashion Store

// Shared Components Data
const components = {
    navbar: `
        <div class="container nav-content">
            <a href="index.html" class="logo">FIRE90S FASHION <span class="fire-text">STORE</span></a>
            <div class="mobile-menu-btn" onclick="toggleMenu()">☰</div>
            <div class="nav-links" id="navLinks">
                <a href="index.html">Home</a>
                <a href="shop.html">Shop</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
    `,
    footer: `
        <div class="container footer-content">
            <div class="footer-col">
                <a href="index.html" class="logo">FIRE90S FASHION <span class="fire-text">STORE</span></a>
                <p style="margin-top: 1rem; opacity: 0.7; max-width: 300px;">
                    Premium 90s inspired fashion. Wholesale & Print on Demand services available.
                </p>
            </div>
            <div class="footer-col">
                <h4>Shop</h4>
                <ul>
                    <li><a href="shop.html">All Products</a></li>
                    <li><a href="shop.html">New Arrivals</a></li>
                    <li><a href="shop.html">Best Sellers</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Support</h4>
                <ul>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Returns</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            &copy; 2026 FIRE90S FASHION STORE. All rights reserved.
        </div>
    `
};

// Render Components
function renderComponents() {
    const navContainer = document.getElementById('navbar');
    const footerContainer = document.getElementById('footer');

    if (navContainer) navContainer.innerHTML = components.navbar;
    if (footerContainer) footerContainer.innerHTML = components.footer;

    // Set active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Product Functions
function renderProducts(category = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // Ensure products data is available
    if (typeof products === 'undefined') {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Error: Product data not loaded.</p>';
        return;
    }

    let filtered = products;
    if (category !== 'all') {
        filtered = products.filter(p => p.category === category);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.7;">No products found in this category.</p>';
        return;
    }

    let html = '';
    filtered.forEach(p => {
        html += `
            <div class="product-card" onclick="window.location.href='product-detail.html?id=${p.id}'" style="background: var(--color-glass); border: 1px solid var(--color-glass-border); border-radius: 15px; overflow: hidden; transition: 0.3s; cursor: pointer;">
                <div style="height: 300px; overflow: hidden; background: #222;">
                    <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.name}">
                </div>
                <div style="padding: 20px;">
                    <h3 style="font-size: 1.2rem; margin-bottom: 5px;">${p.name}</h3>
                    <p style="font-size: 0.8rem; opacity: 0.6; margin-bottom: 10px;">${p.category}</p>
                    <p style="color: var(--color-primary); font-weight: 700; font-size: 1.1rem; margin-bottom: 15px;">${p.price}</p>
                    <button class="btn" style="width: 100%; font-size: 0.9rem; padding: 10px;">View Details</button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function filterProducts(category) {
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.innerText === category || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderProducts(category);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderComponents();
    renderProducts();

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            // Show modal after a short delay (simulating submission)
            setTimeout(() => {
                document.getElementById('confirmationModal').style.display = 'flex';
                contactForm.reset();
            }, 500);
        });
    }
});

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}
