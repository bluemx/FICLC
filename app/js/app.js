// Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-P05N3XLV0M');
gtag('config', 'G-K0N0NFB1B5');

/*********************************************************************** */
const languageFN = () => {
    setTimeout(()=>{
        MicroLang(['es', 'en'])
    }, 200)
}



/*********************************************************************** */
const cookiesFN = () => {
    const information = '<div data-en="This website uses cookies to improve your experience. Continue to use the site as normal if you agree to the use of cookies. If you’d like to find out more about the cookies we use or to opt-out, please see our Privacy Policy"> Este sitio web utiliza cookies para mejorar tu experiencia. Si continúas navegando en el sitio, significa que aceptas el uso de las cookies. Si deseas más información sobre las cookies que empleamos y cómo manejarlas visita nuestra Política de Privacidad. <a href="#" style="color: #061E41" data-toggle="modal" data-target="#aviso" data-en="Privacy Policy.">Leer más.</a></div>'
    const button = '<span data-en="Accept">Aceptar</span>'
    BlueCookies(information, "✔ Cookies", button, 'background-color: #8bb8e8; color:#fff;')
}


/*********************************************************************** */
const carouselFN = () => {
    if(document.getElementsByClassName('homebanner').length==0){return false}
    setTimeout(()=>{
        new Splide( '.homebanner',{ type   : 'loop', autoplay: true, pauseOnHover: false }).mount();
    }, 500)
}
    
/*********************************************************************** */



const onStart = () => {
    languageFN()
    carouselFN()
    //cookiesFN()
    fadeOutAndRemove('transitioning');
}


function fadeOutAndRemove(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '0';
        setTimeout(() => element.parentNode.removeChild(element), 500);
    } else {
        console.error("Element with id '" + elementId + "' not found.");
    }
}

function waitForVariables() {
    const interval = setInterval(() => {
        if (typeof Splide !== 'undefined' && typeof BlueCookies !== 'undefined') {
            clearInterval(interval);
            // Variables Glide and BlueCookies are now available, you can perform actions here
            console.log('READY.');
            onStart()
        }
    }, 100); // Check every 100 milliseconds
}


function loadImportsRecursive() {
    if (typeof loadImports === 'function') {
        loadImports()
            .then(() => {
                // Code to execute after all imports are finished
                console.log('File imports completed.');
                waitForVariables();
            })
            .catch(error => {
                console.error('Error loading imports:', error);
                // Retry after a delay
                setTimeout(loadImportsRecursive, 200);
            });
    } else {
        // Retry after a delay
        setTimeout(loadImportsRecursive, 200);
    }
}

loadImportsRecursive();

/************************************************************************/

function showImage(image) {
    document.getElementById('modalImage').src = image.src;
  }





