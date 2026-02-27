const products = [
    {
        name: "Wireless Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },
    {
        name: "Smart Watch",
        price: 2999,
        image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
    },
    {
        name: "Running Shoes",
        price: 2499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        name: "Backpack",
        price: 1499,
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa"
    }
];

let cartCount = 0;

const productList = document.getElementById("product-list");
const cartDisplay = document.getElementById("cart-count");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(card);
});

function addToCart() {
    cartCount++;
    cartDisplay.textContent = cartCount;
}
