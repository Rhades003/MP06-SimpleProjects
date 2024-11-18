"use strict";
let categoriesSet = new Set();
let divList = document.getElementById("categoryList");
let productsSet = new Set();
let divProduct = document.getElementById("productList");
function addCategory() {
    let categoryElement = document.getElementById("category");
    categoriesSet.add(categoryElement.value);
    alert("Category added");
}
function addProduct() {
    let productElement = document.getElementById("product");
    productsSet.add(productElement.value);
    alert("Product added");
}
function deleteProduct() {
    let productElement = document.getElementById("product");
    let removed = false;
    productsSet.forEach(product => {
        if (product.toString() == productElement.value) {
            productsSet.delete(product);
            alert("Product deleted");
            removed = true;
        }
    });
    if (!removed)
        alert("Product doesn't exists");
}
function showCategories() {
    divList.innerHTML = "";
    //Se recorre el Set con un foreach iterando en cada indice "category"
    categoriesSet.forEach(category => {
        console.log(category.toString());
        let paragraph = document.createElement("p");
        paragraph.innerText = category.toString();
        divList.appendChild(paragraph);
    });
}
function showProducts() {
    divProduct.innerHTML = "";
    //Se recorre el Set con un foreach iterando en cada indice "product"
    productsSet.forEach(product => {
        console.log(product.toString());
        let paragraph = document.createElement("p");
        paragraph.innerText = product.toString();
        divProduct.appendChild(paragraph);
    });
}
