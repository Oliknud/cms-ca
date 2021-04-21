const url = "http://knudsenweb.no/wp-json/wc/store/products/";
const mainProducts = document.querySelector("main#main-products");

function listProducts(products) {
    
    for (product of products) {
        console.log(product)

        mainProducts.innerHTML += `<div class="product">
                                    <img src="${product.images[0].src}">
                                    <h2>${product.name}</h2>
                                    <h3>${product.prices.price}</h3>`
    }
}


fetch (url)
    .then(response => response.json())
    .then(data => listProducts(data))
    .catch(error => console.error(error));