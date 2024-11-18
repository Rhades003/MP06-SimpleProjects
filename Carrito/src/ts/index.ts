let categoriesSet:Set<String> = new Set<String>();
let divList:HTMLDivElement = document.getElementById("categoryList") as HTMLDivElement;

let productsSet:Set<String> = new Set<String>();
let divProduct:HTMLDivElement = document.getElementById("productList") as HTMLDivElement;

function addCategory() {
    let categoryElement:HTMLInputElement = document.getElementById("category") as HTMLInputElement;
    categoriesSet.add(categoryElement.value);
    alert("Category added")
}

function addProduct() {
    let productElement:HTMLInputElement = document.getElementById("product") as HTMLInputElement;
    productsSet.add(productElement.value);
    alert("Product added")
}
function deleteProduct() {
    let productElement:HTMLInputElement = document.getElementById("product") as HTMLInputElement;
    let removed:boolean = false;
    productsSet.forEach(product => {
        if(product.toString() == productElement.value){
            productsSet.delete(product);
            alert("Product deleted");
            removed = true;
        }
        

    });
    if(!removed) alert("Product doesn't exists");
}

function showCategories(){
    divList.innerHTML = "";
    //Se recorre el Set con un foreach iterando en cada indice "category"
    categoriesSet.forEach(category => {
        console.log(category.toString());
        let paragraph:HTMLParagraphElement =  document.createElement("p") as HTMLParagraphElement;
        paragraph.innerText = category.toString();

        divList.appendChild(paragraph);

    });
}

function showProducts(){
    divProduct.innerHTML = "";
    //Se recorre el Set con un foreach iterando en cada indice "product"
    productsSet.forEach(product => {
        console.log(product.toString());
        let paragraph:HTMLParagraphElement =  document.createElement("p") as HTMLParagraphElement;
        paragraph.innerText = product.toString();

        divProduct.appendChild(paragraph);

    });
}