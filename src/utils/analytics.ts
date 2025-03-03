declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const initGA = () => {
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-8EWRPES6ZK";
  
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8EWRPES6ZK');
  `;
  
  document.head.appendChild(script1);
  document.head.appendChild(script2);
}; 