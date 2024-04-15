let object = document.getElementById("object")
// let product = [];
fetch("https://dummyjson.com/products").then(result => result.json()).then(jumia => {
    console.log(jumia);

    let products = jumia.products
    let proDuct = "";

    products.forEach(prod => {
        proDuct += ""
        proDuct += ` <div class="prod">
        <div id="root">
         <img src ="${prod.thumbnail}" width="180" height="120"
         <div><p id="color">${prod.brand}</p></div>
         </div>
        </div>`
    });
    object.innerHTML += proDuct;
    console.log(proDuct);
})