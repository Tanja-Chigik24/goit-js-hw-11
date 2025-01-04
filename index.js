import{i as c,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=s=>s.map(({largeImageURL:r,webformatURL:o,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
          <img
            src="${o}"
            alt="${i}"
            class="gallery-img img-fluid" loading="lazy" 
          />
          <div class="text-list">
              <p class="text-likes">Likes: ${e}</p>
              <p class="text-views">Views: ${t}</p>
              <p class="text-comments">Comments: ${a}</p>
              <p class="text-downloads">Downloads: ${u}</p>
          </div>
        </a>
      </li>`).join(""),p="47936251-08966a92c9e59538871cb9ab8",f="https://pixabay.com/api/",h=15,y=(s,r=1)=>{const o=new URLSearchParams({q:s,key:p,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:h,page:r});return fetch(`${f}?${o}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})},n=document.querySelector(".js-gallery"),g=document.querySelector(".js-search-form"),l=document.querySelector(".loader");function L(s){s.preventDefault();const r=s.target.elements.searchKeyword.value.trim();if(r===""){n.innerHTML="",s.target.reset(),c.error({message:"Input field can not be empty",color:"red",position:"topRight",timeout:2e3,close:!0});return}n.innerHTML="",l.classList.remove("is-hidden"),y(r).then(o=>{o.total===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:2e3,close:!0}),n.innerHTML=d(o.hits),new m(".js-gallery a",{captionPosition:"bottom",captionDelay:250,captionsData:"alt"}).refresh()}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
