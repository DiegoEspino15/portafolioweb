let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distrancia_habilidades = window.innerWidth - habilidades.getBoundingClientRect().top;
    if (distrancia_habilidades >= 300) {
        let habilidad = document.getElementsByClassName("progreso");
        habilidad[0].classList.add("javascript")
        habilidad[1].classList.add("htmlcss")
        habilidad[2].classList.add("photoshop")
        habilidad[3].classList.add("illustrator")
        habilidad[4].classList.add("wordpress")
        habilidad[5].classList.add("comunicacion")
        habilidad[6].classList.add("trabajo")
        habilidad[7].classList.add("creatividad")
        habilidad[8].classList.add("dedicacion")
        habilidad[9].classList.add("github")
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

function iniciarMap(){
    var coord = {lat:-14.0652507 ,lng: -75.7312727};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}