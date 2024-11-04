// Configuration JSON
const importsConfig = {
    css: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;700&family=Barlow:wght@200;300;400;700;800&display=swap",
      //"https://cdn.plyr.io/3.7.8/plyr.css",
      "app/css/app.css"
      
    ],
    js: [
      "https://code.jquery.com/jquery-3.7.1.min.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      "https://unpkg.com/microlang@1.1.1/MicroLang.min.js",
      "https://unpkg.com/@bluemx/blue-components",
      //"https://cdn.plyr.io/3.7.8/plyr.js",
      "app/js/loscabos-components.js",
      "app/js/importer.js",
      "app/js/app.js",
      'https://www.googletagmanager.com/gtag/js?id=G-P05N3XLV0M'
    ]
  };
  
  // Function to dynamically import CSS files
  function importCSS(url) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  
  // Function to dynamically import JavaScript files
  function importJS(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }


  function setInitialLanguage () {

    if (window.location.href.includes('ficloscabos')) { MicroLangSwitch('es') }
    if (window.location.href.includes('loscabosiff')) { MicroLangSwitch('en') }

    // Make links redirect to each domain

    var currentUrl = window.location.href;
    var langLinks = {
        "ficloscabos": document.querySelector('a.nav-lang.nav-lang-en'),
        "loscabosiff": document.querySelector('a.nav-lang.nav-lang-es')
    };

    for (var key in langLinks) {
        if (currentUrl.includes(key) && langLinks[key]) {
            langLinks[key].href = currentUrl.replace(key, key === "ficloscabos" ? "loscabosiff" : "ficloscabos");
            break;
        }
    }


  }

  
  // Import all CSS files
  Promise.all(importsConfig.css.map(importCSS))
    .then(() => {
      // All CSS files are loaded, proceed to load JS files
      return Promise.all(importsConfig.js.map(importJS));
    })
    .then(() => {
      // All JS files are loaded
      console.log("All resources loaded successfully.");
      setInitialLanguage()
    })
    .catch((error) => {
      console.error("Error loading resources:", error);
    });
  