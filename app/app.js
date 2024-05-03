
let defaultLang = 'es'

//Si loscabosiff.org = -en-
defaultLang = (window.location.origin.indexOf("loscabosiff.org") >= 0) ? 'en' : defaultLang
// Si -en- cambiar titulo de sitio
document.title = (defaultLang == 'en') ? 'Los Cabos IFF' : document.title


// Lenguajes disponibles
const langs = ['es', 'en']
// Reemplazo de contenidos
const langsReplace = [
    ['data-l', ''],
    ['data-l-src', 'src'],
    ['data-bg-src', 'src'],
    ['data-l-placeholder', 'placeholder']
]

let currentLang = defaultLang;


function lang_start(setLang) {
    // Variable de lenguaje
    let theLang = defaultLang
    // Guardar cookie "bluelang" con lenguaje
    Cookies.set("bluelang", theLang)
    currentLang = theLang
    // Imprimir lenguaje asignado
    console.log('Lang:%c' + theLang, 'background-color:#ffdd00; padding: 2px; border-radius: 50%; font-size: 1.1rem; font-weight: bold;')
    langActions()
}


function langActions() {
    const theLang = Cookies.get("bluelang") || currentLang
    // Cada objeto con attr data-active asignar o quitar ".active"
    for (dactive of document.querySelectorAll('[data-active]')) {
        if (dactive.getAttribute('data-active') == theLang) {
            dactive.classList.add('active')
        } else {
            dactive.classList.remove('active')
        }
    }
    // Ocultar/mostar lang-en lang-es
    for (lang of langs) {
        if (lang == theLang) {
            $('.lang-' + lang).show()
        } else {
            $('.lang-' + lang).hide()
        }
    }

    //Si lang no es el default
    if (theLang != langs[0]) {
        for (rep of langsReplace) {
            const items = document.querySelectorAll('[' + rep[0] + ']')
            const isHtml = rep[1] == ''
            for (item of items) {
                if (isHtml) {
                    item.innerHTML = item.getAttribute(rep[0])
                } else {
                    item.setAttribute(rep[1], item.getAttribute(rep[0]))
                }
            }
        }
    }

}


function lang_btns() {
    $('[data-active=es]').attr('href', window.location.href.replace('loscabosiff.org', 'ficloscabos.org'));
    $('[data-active=en]').attr('href', window.location.href.replace('ficloscabos.org', 'loscabosiff.org'));
}


function banner_init() {
    if ($('.homeSlider').length == 0) {
        return false
    }
    $('.homeSlider').slick({
        autoplay: true,
        autoplaySpeed: 4500
    })
}



$(document).ready(function () {
    banner_init();
    lang_start();
    lang_btns();
    /*
    // Encuentra el enlace por su atributo data-target
var enlace = document.querySelector('a[data-target="#aviso"]');

// Encuentra el div que contiene el enlace
var divElement = enlace.parentElement;

// Oculta el div estableciendo su estilo de visualización en "none"
divElement.style.display = "none";
*/
});





function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



/**menú */
/*
document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("menu-container").innerHTML = data;
      });
  });
  */