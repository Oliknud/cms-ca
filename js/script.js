const url = "http://knudsenweb.no/wp-json/wc/store/products/";
const mainProducts = document.querySelector("main#main-products");

function listProducts(products) {
    // console.log(products);
    for (product of products) {
        console.log(product)
    }
}


fetch (url)
    .then(response => response.json())
    .then(data => listProducts(data))
    .catch(error => console.error(error));