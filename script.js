// Products
const products = [
  {
    id: 1,
    title: "Boho Wall Hanging",
    price: 1200,
    category: "Home Decor",
    description: "Handmade cotton wall hanging with tassels. Adds warmth and texture to any room.",
    image: "images/tassels.jpeg"
  },
  {
    id: 2,
    title: "Wooden Coffee Table",
    price: 6999,
    category: "Furniture",
    description: "Solid pinewood side table with a distressed rustic finish.",
    image: "images/table.jpeg"
  },

  {
    id: 3,
    title: "Ruttan Lamps",
    price: 2199,
    category: "Lighting",
    description: "Natural ruttan lamps for a warm and cozy vibe in your home.",
    image: "images/lamps.jpeg"
  },
  {
    id: 4,
    title: "Minimalist Ceramic Vase",
    price: 1499,
    category: "Home Decor",
    description: "A smooth matte-finish vase perfect for modern interiors. Perfect for living rooms.",
    image: "images/vase.jpeg"
  },
  {
    id: 5,
    title: "Compact Work Desk",
    price: 8999,
    category: "Furniture",
    description: "A sleek matte finish desk with smart cable slots and wooden legs.",
    image: "images/desk.jpeg"
  },

  {
    id: 6,
    title: "Chandelier",
    price: 1899,
    category: "Lighting",
    description: "Cluster of clear glass orbs with golden accents — playful yet sophisticated.",
    image: "images/chand.jpeg"
  },
  {
    id: 7,
    title: "Wall Clock",
    price: 1699,
    category: "Home Decor",
    description: "Sleek oversized clock with modern roman numerals.",
    image: "images/clock.jpeg"
  },
  {
    id: 8,
    title: "Minimalist Bookshelf",
    price: 5999,
    category: "Furniture",
    description: "Wood bookshelf. Open design, perfect for modern spaces.",
    image: "images/shelf.jpeg"
  },
  {
    id: 9,
    title: "Table Lamp",
    price: 2100,
    category: "Lighting",
    description: "A soft, neutral lighting piece.",
    image: "images/tablelamp.jpeg"
  },
  {
    id: 10,
    title: "Wall Frame Set",
    price: 1999,
    category: "Home Decor",
    description: "Set of elegant wall frames to enhance your living room's look.",
    image: "images/frame.jpeg"
  },
  {
    id: 11,
    title: "Dining Table Set",
    price: 7499,
    category: "Furniture",
    description: "Modern industrial feel with a sturdy wooden base and smooth finish.",
    image: "images/dining.jpeg"
  },
  {
    id: 12,
    title: "Swing Arm Lamp",
    price: 2999,
    category: "Lighting",
    description: "Adjustable industrial wall light — great for reading corners or workspace style.",
    image: "images/swinglamp.jpeg"
  }
];

// Render
const productsSection = document.getElementById("productsSection");

function renderProducts(list) {
  productsSection.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">₹${product.price}</p>
      <span class="product-category">${product.category}</span>
      <div class="card-buttons">
        <button onclick="addToCart('${product.title}')">Add to Cart</button>
        <button onclick="openModal(${product.id})">Read More</button>
      </div>
    `;
    productsSection.appendChild(card);
  });
}


renderProducts(products);

// search
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(keyword)
  );
  applyFilters(filtered);
});

// category filter
const categoryFilter = document.getElementById("categoryFilter");
categoryFilter.addEventListener("change", () => {
  applyFilters(products);
});

// Sort.. price
const priceSort = document.getElementById("priceSort");
priceSort.addEventListener("change", () => {
  applyFilters(products);
});



function applyFilters(list) {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const sort = priceSort.value;

  let filtered = list.filter(p =>
    p.title.toLowerCase().includes(keyword)
  );

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

// cart alert
function addToCart(title) {
  alert(`🛒 ${title} added to cart!`);
}

// Modal
const modal = document.getElementById("productModal");
const modalImage = modal.querySelector(".modal-image");
const modalTitle = modal.querySelector(".modal-title");
const modalCategory = modal.querySelector(".modal-category");
const modalPrice = modal.querySelector(".modal-price");
const modalDescription = modal.querySelector(".modal-description");
const closeModalBtn = document.getElementById("closeModal");

function openModal(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    modalImage.src = product.image;
    modalTitle.textContent = product.title;
    modalPrice.textContent = `₹${product.price}`;
    modalCategory.textContent = product.category;
    modalDescription.textContent = product.description;
    modal.style.display = "flex";
  }
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  });