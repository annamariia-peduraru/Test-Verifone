const url = 'http://private-32dcc-products72.apiary-mock.com/product';
let products = [];

async function getProducts() {
    const response = await fetch(url);

    response.json().then(data => {
        console.log(data);

        data.sort(function(a, b) {
        return b.price - a.price;
    });

    data.forEach(element => {
        var myDiv = document.getElementById('b');
        var b = document.createElement("button");

        b.setAttribute('content', 'test content');
        b.setAttribute('class', 'btn');  
        b.textContent = 'Add to cart';
        myDiv.appendChild(b);
        products.push(element.name);
    });

    for(var i = 0; i < products.length; i++) {
        console.log(products[i]);
        document.getElementById('output').innerHTML = products[i];
    }
});

}

getProducts();

