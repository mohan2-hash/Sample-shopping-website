document.addEventListener("DOMContentLoaded", () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const productsSection = document.getElementById('products');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
                productsSection.appendChild(productDiv);
            });
        });
});
