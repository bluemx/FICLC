const { createApp, ref } = Vue



createApp({
    setup() {

        const thepath = 'https://news.loscabosiff.org/';
        const theurl = thepath+"graphql";
        const categoryName = 'noticias'
        const categoryPagination = 4
        const numPages = ref(0)
        const currentPage = ref(0)
        const isPost = ref(false)
        const prevPost = ref(false)
        const nextPost = ref(false)
        const loading = ref(true)
        const thequery = `{
            posts(first:100, where: {categoryName: "${categoryName}"}) {
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
                    const nodes = data.data.posts.nodes;
                    items.value = nodes
                    numPages.value = Math.ceil(nodes.length / this.itemsPerPage);

                    getURLParams()
                    setTimeout(()=>{makeSwitch()},500)
                    
                })

        }
        
        loadItems()

        const getURLParams = () => {
            let params = Object.fromEntries(new URLSearchParams(window.location.search));
            if(params.i && params.p && params.t){
                //ISPOST
                let currentIndex = items.value.findIndex(item => item.id === params.i);
                if (currentIndex === -1) { return null; }
                isPost.value = items.value[currentIndex];
                prevPost.value = currentIndex > 0 ? items.value[currentIndex - 1] : null;
                nextPost.value = currentIndex < items.value.length - 1 ? items.value[currentIndex + 1] : null;
                loading.value = false

            } else {
                loading.value = false
            }
        }

        


        function newImgWidth(originalWidth, originalHeight) {
            const aspectRatio = originalWidth / originalHeight;
            const newHeight = 200;
            const newWidth = aspectRatio * newHeight;
            return newWidth;
          }

          function createExcerpt(str) {
            let div = document.createElement('div');
            div.innerHTML = str;
            let text = div.textContent || div.innerText || '';
            return text.substring(0, 120)+'...';
          }

          function createuri(noteID, noteTitle){
            return '/NoticiasInicial?i=' + noteID + '&p=' + currentPage.value + '&t=' + slugify(noteTitle)
          }
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

        return{
            items,
            newImgWidth,
            thepath,
            numPages,
            createExcerpt,
            createuri,
            isPost,
            prevPost,
            nextPost,
            loading
        }

    }
}).mount('#noticias-app')






