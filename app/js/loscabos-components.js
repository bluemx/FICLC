//let url = window.location.href;
/*
if (url.includes('noticias.html')) {
  let [base, hash] = url.replace('noticias.html', 'NoticiasInicial').split('#/');
  if (hash) {
    let [i, p, ...t] = hash.split('/');
    window.location.href = `${base}?i=${encodeURIComponent(i)}&p=${encodeURIComponent(p)}&t=${encodeURIComponent(t.join('-'))}`;
  } else {
    window.location.href = base;
  }
}
*/

const api = 'https://news.loscabosiff.org/';


// create a script element for the Splide JS library
const splideScript = document.createElement('script');
splideScript.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
splideScript.setAttribute('id', 'splidescript')
// create a link element for the Splide CSS file
const splideCss = document.createElement('link');
splideCss.rel = 'stylesheet';
splideCss.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';



// append the script and link elements to the head of the document
document.head.appendChild(splideScript);
document.head.appendChild(splideCss);



/*
class LoscabosPosts extends HTMLElement {
  constructor() {
    super();
    this.currentPage = 1;
    this.itemsPerPage = parseInt(this.getAttribute("pagination")) || 6;
    this.categoryName = this.getAttribute("category");
    
    this.hashurl = window.location.hash || false
    this.hashid = false
    // URL
    if(this.hashurl){
      const hashS = this.hashurl.split('/')
      if(hashS[1]){
        // ID
        this.hashid = hashS[1];
        // CURRENT PAGE
        this.currentPage = hashS[2];
      }
    }
    if(!this.hashid){
      const queryParams = new URLSearchParams(window.location.search);
      if(queryParams.size){
        this.hashid = queryParams.get('i');
      }
    }
    console.log(this.hashid)
    
    this.url = api+"graphql";
    this.query = `{
      posts(first:100, where: {categoryName: "${this.categoryName}"}) {
        nodes {
          id
          postId
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          date
          excerpt
          titleEn
          descEn
          imageEn{
            sourceUrl
          }
        }
      }
    }`;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: this.query,
        variables: {},
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const nodes = data.data.posts.nodes;
        this.nodes = nodes;
        this.numPages = Math.ceil(nodes.length / this.itemsPerPage);

        // DOM ELEMENTS
        this.innerHTML = `
          <div class=" my-5">
            <div class="">
              <div class="row posts-container"></div>
              <!--<div class="col-md-2" id="sidebar"></div>-->
            </div>

            <div class="pagination pagination-container justify-content-center my-5"></div>

          </div>
        `;

        this.renderPosts();
        this.renderPagination();
      })
      .catch((error) => console.error("Error:", error));
  }

  renderPosts() {
    const container = this.querySelector(".posts-container");
    container.innerHTML = "";

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const currentNodes = this.nodes.slice(startIndex, endIndex);
    function slugify(str) {
      return String(str)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
    }
    currentNodes.forEach((node) => {
      
      const nota = document.createElement("div");
      nota.classList.add("col-md-6", "my-2");
      nota.innerHTML = `
        <img src="${node.featuredImage?.node?.sourceUrl}" data-en-src="${node.imageEn?.sourceUrl}" alt="Imagen de nota" width="800" height="400" class="img-fluid lang-es">
        <p class="news-tit" data-en='${node.titleEn}'>${node.title}</p>
        <p class="" style="height:3em; overflow:hidden; text-overflow: ellipsis; font-size:1rem;" data-en="${createExcerpt(node.descEn)}">${createExcerpt(node.content)}</p>
        <p class="text-right">
        <!--
          <a data-notaid="${node.id}" role="button" href="#/${node.id}/${this.currentPage}/${slugify(node.title)}" class="open-nota news-link" style="cursor:pointer;" data-en="Keep reading">Seguir leyendo</a>
        -->
          <a data-notaid="${node.id}" role="button" href="?i=${node.id}&p=${this.currentPage}&t=${slugify(node.title)}" class="open-nota news-link" style="cursor:pointer;" data-en="Keep reading">Seguir leyendo</a>
        </p>
        <div class="modal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title h4 font-weight-bold" data-en='${node.titleEn}'>${node.title}</div>                
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">
                <div class="text-center">
                  <img src="${node.featuredImage?.node?.sourceUrl}" data-en-src="${node.imageEn?.sourceUrl}" alt="Imagen de nota" width="800" height="400" class="img-fluid lang-es">
                </div>
                  <div data-en='${node.descEn}'>${node.content}</div>
              </div>
              <div class="modal-footer">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
            </div>
          </div>
        </div>
        `;
        
      const opennota = nota.querySelector('.open-nota');
      const modal = nota.querySelector('.modal');
      opennota.addEventListener("click", () => {
        $(modal).modal('show')
        $(modal).on('hide.bs.modal', () => {
          window.location.hash = ""
        })
      })
      // OPEN NOTE FROM URL



      if(  this.hashid && this.hashid == node.id){
        $(modal).modal('show')
        $(modal).on('hide.bs.modal', () => {
          window.location.hash = ""
        })
      }

      container.appendChild(nota);

    });

  }
  
 renderPagination() {
    if(this.numPages<=1){
      return false;
    }
    const container = this.querySelector(".pagination-container");
    container.innerHTML = "";

    for (let i = 1; i <= this.numPages; i++) {
      const button = document.createElement("a");
      button.classList.add("btn", "btn-pagination", 'btn-sm');
      button.textContent = i;
      if (i === this.currentPage) {
        button.classList.add("btn-light");
      }
      button.addEventListener("click", () => {
        this.currentPage = i;
        this.renderPosts();
        this.renderPagination();
      });
      container.appendChild(button);
    }
  }


}

*/


/*
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
*/

/*

class LoscabosEdiciones extends HTMLElement {
  constructor() {
    super();
    this.url = api+"graphql";
    this.query = `{
      ediciones(first:15) {
        nodes {
          title
          featuredImage {
              node {
                sourceUrl
              }
          }
          hashtag
          gallery{
            mediaItemUrl
            mediaDetails {
              width
              height
            }
          }
          fecha
          descripcion
          programacion
          homenajes
          premios
          ignite
          mujeres
          imageposter{
            sourceUrl
          }
          imagecatalogo{
            sourceUrl
          }
          linkposter
          linkcatalogo
          video
          enFecha
          enDescripcion
          enProgramacion
          enHomenajes
          enPremios
          enIgnite
          enMujeres
          enImageposter{
            sourceUrl
          }
          enImagecatalogo{
            sourceUrl
          }
          enLinkposter
          enLinkcatalogo
          enVideo
          
          
        }
      }
    }`;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: this.query,
        variables: {},
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const nodes = data.data.ediciones.nodes;
        this.nodes = nodes;

        // DOM ELEMENTS
        this.innerHTML = `
          <div class=" my-5">
            <div class=" ">
              <div class="row ediciones-container"></div>
              <!--<div class="col-md-2" id="sidebar"></div>-->
            </div>
          </div>

        `;

        this.renderPosts();

      })
      .catch((error) => console.error("Error:", error));
  }

  renderPosts() {
    const container = this.querySelector(".ediciones-container");
    container.innerHTML = "";

    const currentNodes = this.nodes

    currentNodes.forEach((node) => {
      const edicion = document.createElement("div");
      edicion.classList.add("col-md-3", "col-6", "my-2", "ediciones");


      var edicioncontent = '';
      

      const ec_gallery = `
        <div class="my-4">
          <h3 class="backTitle" data-en="GALLERY">GALERÍA</h3>
          <div id="edicioncarousel_${node.title}" class="splide edicioncarousel" aria-label="Galerí­a de la edicion">
              <div class="splide__track"><ul class="splide__list"></ul></div>
          </div>
        <div>
      `;

      const ec_program = `
        <div class="my-4">
          <h3 class="backTitle" data-en="FILM PROGRAMMING">PROGRAMACIÓN</h3>
          <div class="contenttext" data-en='${node.enProgramacion}'>${node.programacion}</div>
        </div>
      `;
      
      const ec_tribute = `
        <div class="my-4">
          <h3 class="backTitle" data-en="FILM TRIBUTES (Special Guests)">HOMENAJES (Invitados Especiales)</h3>
          <div class="contenttext" data-en='${node.enHomenajes}'>${node.homenajes}</div>
        </div>
      `;
      
      const ec_awards = `
        <div class="my-4">
          <h3 class="backTitle" data-en="AWARDS">PREMIOS</h3>
          <div class="contenttext" data-en='${node.enPremios}'>${node.premios}</div>
        </div>
      `;
      
      const ec_ignite = `
        <div class="my-4">
          <h3 class="backTitle">IGNITE SESSIONS</h3>
          <div class="contenttext" data-en='${node.enIgnite}'>${node.ignite}</div>
        </div>
      `;


    
      const ec_video = `
        <div class="my-4">
          <h3 class="backTitle" data-en="SO IT WAS">ASÍ FUE</h3>
          <div class="contenttext text-center" >
            <iframe id="ytplayer_${node.title}" width="100%" height="315" data-en-src="${node.enVideo}?enablejsapi=1&version=3&playerapiid=ytplayer" src="${node.video}?enablejsapi=1&version=3&playerapiid=ytplayer" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      `;


    
      if(node.gallery.length){
        edicioncontent+=ec_gallery;
      }
      if(node.programacion){
        edicioncontent+=ec_program;
      }
      if(node.homenajes){
        edicioncontent+=ec_tribute;
      }
      if(node.premios){
        edicioncontent+=ec_awards;
      }
      if(node.ignite){
        edicioncontent+=ec_ignite;
      }
      if(node.video){
        edicioncontent+=ec_video;
      }


      var ediciondescargas = '';

      if(node.imageposter && node.imageposter?.sourceUrl){
        ediciondescargas+=`
        <div class="col-12 col-md-6 text-center">
          <h3 class="backTitle" data-en="POSTER ${node.hashtag}">CARTEL ${node.hashtag}</h3>
          <div class="contenttext text-center" >
            <img data-en-src="${node.enImageposter?.sourceUrl}" src="${node.imageposter?.sourceUrl}"  class="img-fluid" style="width:200px;">
          </div>
          <a href="${api}ediciones/posters/${node.linkposter}" target="_blank" class="btn-download" data-en="Download">Descargar</a>
        </div>
      `;
      }
      if(node.imagecatalogo && node.imagecatalogo?.sourceUrl){
        ediciondescargas+=`
        <div class="col-12 col-md-6 text-center">
          <h3 class="backTitle" data-en="CATALOGUE ${node.hashtag}">CATÁLOGO ${node.hashtag}</h3>
          <div class="contenttext text-center" >
            <img data-en-src="${node.enImagecatalogo?.sourceUrl}" src="${node.imagecatalogo?.sourceUrl}" class="img-fluid" style="width:200px;">
          </div>
          <a href="${api}ediciones/catalogos/${node.linkcatalogo}" target="_blank" class="btn-download" data-en="Download">Descargar</a>
        </div>
      `;
      }


      edicion.innerHTML = `
        <div class="bg-white p-3 open-edicion" role="button" style="cursor:pointer; text-align:center">
          <img src="${node.featuredImage?.node?.sourceUrl}"  alt="Imagen de nota" width="800" height="400" class="img-fluid lang-es">
          <p class="news-tit">${node.title}</p>
          <div role="button" data-en="View more" style="margin:2px auto; background: #0a1e3f; color:#fff; padding:2px 10px; border:1px solid #E4D8AD; display:inline-block; text-align:center; ">Ver más</div>
        </div>
        
        <div class="modal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">   
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">

                <div class="row">
                  <div class="col-4">
                    <img src="${node.featuredImage?.node?.sourceUrl}"  alt="Imagen de nota" width="800" height="400" class="img-fluid lang-es">
                  </div>
                  <div class="col">
                    <h2 class="" data-en="${node.title} Edition | ${node.hashtag}">Edición ${node.title} | ${node.hashtag}</h2>

                    <h3 data-en="${node.enFecha}">${node.fecha}</h3>
                    <div data-en='${node.enDescripcion}'>${node.descripcion}</div>
                  </div>
                </div>
                ${edicioncontent}
                <div class="row">
                  ${ediciondescargas}
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
            </div>
          </div>
        </div>
        `;
      container.appendChild(edicion);

      if(node.gallery.length){
        const carouselUL = document.querySelector('#edicioncarousel_'+node.title+' ul.splide__list');
        node.gallery.forEach((gal)=>{
          carouselUL.innerHTML +=`
            <li class="splide__slide" style="width: ${newImgWidth(gal.mediaDetails.width, gal.mediaDetails.height)}px;">
                <img src="${gal.mediaItemUrl}" style="width:100%;">
            </li>
          `;
        })
      }
        
      const openedicion = edicion.querySelector('.open-edicion');
      const modal = edicion.querySelector('.modal');
      openedicion.addEventListener("click", () => {
        //$(modal).modal('show')
        new bootstrap.Modal(modal)
        
        if(node.video){
          

          $(modal).on('hide.bs.modal', () => {

            $('iframe').each(function(){
              this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
            });
          });
        }

      })
        
      
    });

    for(const carousel of document.querySelectorAll('.edicioncarousel')){

    
      new Splide( carousel, {
        type   : 'loop',
        autoWidth: true,
        gap: '2px',
        pagination: true,
        
      } ).mount();
        
      }

  }


}





*/


/*
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
*/


class LoscabosCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const items = this.getslides(this)
    const perPage = this.getAttribute('pagination') || 3;
    const gap = this.getAttribute('gap') || 0;

    this.innerHTML = `
      <div class="splide loscabos-carousel" data-splide='{"perPage":${perPage}, "gap":"${gap}"}'>
        <div class="splide__track">
          <ul class="splide__list">
            ${items}
          </ul>3
        </div>
      </div>
    `;
  }
  getslides(content){
    let items = ''
    
    for(const itm of content.children){
      const liContainer =  `<li class="splide__slide">${itm.outerHTML}</li>`;
      items+=liContainer;
    }
    return items;
  }
  
}



var script = document.querySelector('#splidescript');
script.addEventListener('load', function() {
  for(const carousel of document.querySelectorAll('.loscabos-carousel')){


    new Splide( carousel , {
      type   : 'loop',
      perPage: 3,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    } ).mount();
    
  }

  
});



function createExcerpt(str) {
  let div = document.createElement('div');
  div.innerHTML = str;
  let text = div.textContent || div.innerText || '';
  return text.substring(0, 120)+'...';
}

function newImgWidth(originalWidth, originalHeight) {
  const aspectRatio = originalWidth / originalHeight;
  const newHeight = 200;
  const newWidth = aspectRatio * newHeight;
  return newWidth;
}




const loscabosstyle =  document.createElement('style');
loscabosstyle.innerHTML = `



.splide{
  display: flex;
  flex-wrap: wrap;
}
.splide__arrows{
  display: flex;

}
.splide__track{
  order:1;
  width: 100%;
}
.splide__pagination{
  position: static;
  order:2;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  height: 32px;
}
.splide__pagination li{
  line-height:0;
}

.splide__arrow{
  width:32px;
  height:32px;
  background: #172E4D;
  border: 2px solid #E4D8AD;
  padding: 4px;
}
.splide__arrow svg{ fill: #E4D8AD;  }
.splide__pagination__page{
  background: #172E4D;
}
.splide__pagination__page.is-active{
   background-color: #E4D8AD;
}


`;

document.head.appendChild(loscabosstyle);




//customElements.define("loscabos-posts", LoscabosPosts);
//customElements.define("loscabos-ediciones", LoscabosEdiciones);
customElements.define("loscabos-carousel", LoscabosCarousel);





function addCSSFile() {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://news.loscabosiff.org/loscabos-components.css';
  head.appendChild(link);
}
// Call the function to add the CSS file
//addCSSFile();



