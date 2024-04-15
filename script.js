let image = document.getElementById("image")
// let product = [];
fetch("https://dummyjson.com/products").then(result => result.json()).then(jumia => {
    console.log(jumia);

    let products = jumia.products
    let proDuct = "";

    products.forEach(prod => {
        proDuct +=
            `<div id="prod">
        <h6>${prod.description}</h6> ;
        <h6>${prod.title}<h6>
        <img src ="${prod.thumbnail}" alt ="${prod.title}"
        </div>`
    });
    document.body.innerHTML += proDuct;
    console.log(proDuct);
})