const { createApp, ref } = Vue



createApp({
    setup() {

        const thepath = 'https://news.loscabosiff.org/';
        const theurl = thepath+"graphql";
        const thequery = `{
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
          }`;//thequery



        const items = ref([])
        const loadItems = () => {

            fetch(theurl, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ query: thequery, variables: {} }),
              })
                .then((response) => response.json())
                .then((data) => {
                    const nodes = data.data.ediciones.nodes;
                    items.value = nodes
                    eListeners()
                })

        }
        
        loadItems()



        const eListeners = () => {
            setTimeout(()=>{

                var modalToggleElements = document.querySelectorAll('.modal');
                
                modalToggleElements.forEach(function(element) {
                    element.addEventListener('show.bs.modal', function(event) {
                        for(const carousel of document.querySelectorAll('.loscabos-carousel')){
                            new Splide( carousel , {
                                type   : 'loop',
                                autoWidth: true,
                                gap: '2px',
                                pagination: true,
                            } ).mount();
                            
                          }
                    });
                });
            }, 100)
            
        }


        function newImgWidth(originalWidth, originalHeight) {
            const aspectRatio = originalWidth / originalHeight;
            const newHeight = 200;
            const newWidth = aspectRatio * newHeight;
            return newWidth;
          }


        return{
            items,
            newImgWidth,
            thepath,
        }

    }
}).mount('#ediciones-app')






