
// public/app.js// public/app.js
// public/app.js
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const row = document.createElement('div');
            row.classList.add('row', 'justify-content-center'); // Center the content in the row

            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-md-4', 'col-sm-6', 'mb-4'); // Adjust column size for medium and small screens
                productCard.innerHTML = `
                <div class = "card-animate">
                    <div class="card">
                        <img class="card-img-top" width="350px" height="350px" src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">${product.title}</h6>
                            <p class="card-text">$${product.price}</p>
                            <button class="btn btn-primary" id="form">Add to Cart</button>
                        </div>
                </div>
                    
                `;
                row.appendChild(productCard);
            });

            productsContainer.appendChild(row);
        })
        .catch(error => console.error('Error fetching data:', error));


});



gsap.timeline();

var navbar = document.querySelector(".navbar")

gsap.from(navbar,{
    y : -200,
    duration : 1.1
})

gsap.from(".carousel-inner h2",{
    opacity:0,
    y:-20,
    duration:1.5
    
})

gsap.from(".carousel-inner h1",{
    opacity:0,
    y:-20,
    duration:1.5
   
})

gsap.from("#yoyo", {
    y:-10,
   yoyo:"true",
   repeat : 5
})








