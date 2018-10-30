var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("main_img");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}



function mostrarPopUp(){

    document.getElementById("contenedorPopUp").innerHTML= `

    
    <div id="menuPopUp">
        <style>
        #menuPopUp{
        border-style: solid ;
        border-color: lightgray;
        }
        </style>
      

        <div class="contenedorIzquierda">
                <div class="fotoMuffin"> 
                    <img src="Data/fotoMuffinChoco.png">
                </div>
    
                <div class="corazon">
                    <img src="Data/corazon.png">
                </div>
            </div>
    
            <div class="contenedorDerecha">
                <div class="textos">

                   <div class="tituloP">
                       Un PopUp a medias
                   </div>
                                  
                    <div class="contenidoP">
                          Este PopUp puede ser cerrado pero no abierto, para esto debe ser reiniciada la página.
                    </div>
                   
                </div>
                <button id="close" onclick="document.getElementById('menuPopUp').style.display='none'">Añadir al Carrito</button>
    
            </div>
            </div>
`

}








