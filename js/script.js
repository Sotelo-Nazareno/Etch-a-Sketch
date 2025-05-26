const colores = ["blue", "red", "yellow", "green", "violet", "brown", "orange", "black", "white", "pink", "cyan", "gray"];

function crearColores(){
    var paleta = document.querySelector(".paleta");
    
    for(let color of colores){
        var newColor = document.createElement("div");

        newColor.style.height = "60px"
        newColor.style.width = "60px"
        newColor.style.borderRadius = "100px";
        newColor.style.background = color;
        newColor.style.border = '2px solid black'
        newColor.style.marginTop = "20px"
        newColor.style.marginLeft = "2px"
        newColor.addEventListener("click",()=>{
            colorSeleccionado = color;
        });
        paleta.appendChild(newColor)
    }

}


function crerCaja(){
    var contenedor = document.querySelector(".content") ;

    var newDiv = document.createElement("div");
    newDiv.style.height = "40px";
    newDiv.style.width = "40px";
    newDiv.style.backgroundColor = "white";
    newDiv.style.border = '3px solid black';
    newDiv.style.padding = "1px";
    newDiv.addEventListener("click",()=>{
        newDiv.style.backgroundColor = colorSeleccionado;
    });
    newDiv.addEventListener("pointerover", ()=>{
        newDiv.style.border = '3px solid  violet';
    });
    newDiv.addEventListener("pointerout", ()=>{
        newDiv.style.border = '3px solid black';
    })

    contenedor.appendChild(newDiv);


    const borrar = document.querySelector(".clean");
    borrar.addEventListener("click",()=>{
        newDiv.style.backgroundColor = "white"
    })
    }

function crearColumna(){
    for(let i=0;i<16;i++){
        crerCaja();
    }
}

function creaTablero(){
    for(let i=0;i<16;i++){
        crearColumna();
    }
}




creaTablero()
crearColores()

