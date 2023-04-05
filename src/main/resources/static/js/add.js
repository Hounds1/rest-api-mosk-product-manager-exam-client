const CATEGORY_BASE_URL = "http://localhost:9090/api/v1/categories"
const PRODUCT_BASE_URL = "http://localhost:9090/api/v1/products"

async function addCategory() {
    const name = document.querySelector('#category-name').value;
    const description = document.querySelector('#category-description').value;
    const req = {
        name: name,
        description: description
    };

    const reqJSON = JSON.stringify(req);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: reqJSON
    };

    fetch(CATEGORY_BASE_URL, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

async function addProduct() {
    const name = document.querySelector('#product-name').value;
    const description = document.querySelector('#product-description').value;
    const price = document.querySelector('#product-price').value;
    const categoryName = document.querySelector('#product-category-name').value;

    const req = {
        name: name,
        description: description,
        price: price,
        categoryName: categoryName
    }

    const reqJSON = JSON.stringify(req);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: reqJSON
    }

    fetch(PRODUCT_BASE_URL, options)
        .then(response => response.json())
        .then(data => {
           console.log(data)
        });
}