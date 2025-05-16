export function loadCSS(href) {
    if (document.querySelector(`link[href="${href}"]`)) return; // prevent duplicates 
  
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  } 