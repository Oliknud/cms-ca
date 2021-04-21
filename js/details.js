const qStr = document.location.search;
const par = new URLSearchParams(qStr);
const idName = par.get("id");
const url = "http://knudsenweb.no/wp-json/wc/store/products/" + idName;
const details = document.querySelector("main#details");
const title = document.querySelector("title");


function selectedProduct(item) {
    console.log(item)
    title.innerHTML = `${item.name} | Flower power`;
    details.innerHTML = `<div class="productDetails">
                            <img src="${item.images[0].src}">
                            <div>
                                <h1>${item.name}</h1>
                                <h2>${item.short_description}</h2>
                                <p>${item.description}</p>
                            </div>
                        </div>`


}


fetch (url)
    .then(response => response.json())
    .then(data => selectedProduct(data))
    .catch(error => console.error(error));