
function carregarCookies() {
    let header:HTMLHeadingElement = document.getElementById("header") as HTMLHeadingElement;
    let paragraph:HTMLParagraphElement = document.getElementById("paragraph") as HTMLParagraphElement;
    console.log(header);
    console.log(paragraph);
    console.log(localStorage.getItem("idioma"));
    console.log(localStorage.getItem("color"));
        switch(localStorage.getItem("color")){
            case "red":
                document.body.style.backgroundColor = localStorage.getItem("color")as unknown as string;
                break;
            case "blue":
                document.body.style.backgroundColor = localStorage.getItem("color")as unknown as string;
                break;
            case "green":
                document.body.style.backgroundColor = localStorage.getItem("color")as unknown as string;
                break;
        }
        switch(localStorage.getItem("idioma")){
            case "catalan":
                header.innerHTML = "Text en català";
                paragraph.innerHTML = "Per veure els canvis, actualitzar la pàgina. (Original)";
                break;
            case "castellano":
                header.innerHTML = "Texto en castellano";
                paragraph.innerHTML = "Para ver los canvios, actualizar la página. (Castellano)";
                break;
            case "ingles":
                header.innerHTML = "Text in english";
                paragraph.innerHTML = "To see the changes, reload the page. (English)";
                break; 
    }
};
    