function e(e){e.paused?e.play():e.pause()}function t(e,t){const n=e.querySelector("i");n.textContent="",n.textContent=t.paused?"play_arrow":"paused"}function n(e,t){e.currentTime+="rewind"===t?-10:10}function r(e,t){const n=e.currentTime/e.duration*100;t.style.width=`${n}%`}function c(e,t,n){const r=n.offsetX/t.offsetWidth*e.duration;e.currentTime=r}function o(e){e.classList.toggle("hidden")}const d=document.querySelector("#play-pause"),u=document.querySelector("video"),i=document.querySelector("#rewind"),l=document.querySelector("#fast-forward"),s=document.querySelector("#volume"),a=document.querySelector("#progress-indicator"),m=document.querySelector("#progress-bar"),f=document.querySelector("#load-file"),v=document.querySelector("#file-input"),y=document.querySelector("#load-text-input"),S=document.querySelector("#text-input"),p=document.querySelector("#on-full-screen"),L=document.querySelector("dialog"),E=document.querySelector("dialog p"),w=document.querySelector("dialog button");d.addEventListener("click",(()=>e(u))),u.addEventListener("play",(()=>t(d,u))),u.addEventListener("pause",(()=>t(d,u))),i.addEventListener("click",(()=>n(u,"rewind"))),l.addEventListener("click",(()=>n(u,"forward"))),u.addEventListener("volumechange",function(e,t){const n=e.querySelector("i");n.textContent="",n.textContent=t.muted?"volume_off":"volume_up"}(s,u)),s.addEventListener("click",(()=>function(e){e.muted=!e.muted}(u))),u.addEventListener("timeupdate",(()=>r(a,u))),window.addEventListener("keyup",(t=>{if("Space"===t.code)e(u);else if("ArrowLeft"===t.code)n(u,"rewind");else{if("ArrowRight"!==t.code)return;n(u,"forward")}})),u.addEventListener("timeupdate",(()=>r(u,a)));let q=!1;m.addEventListener("click",(e=>c(u,m,e))),m.addEventListener("mousedown",(()=>q=!0)),m.addEventListener("mouseup",(()=>q=!1)),m.addEventListener("mousemove",(e=>q&&c(u,m,e))),f.addEventListener("click",(()=>v.click())),v.addEventListener("change",(e=>function(e,t){const n=t.target.files[0],r=URL.createObjectURL(n);e.src=r}(u,e))),y.addEventListener("click",(()=>(o(S),S.focus()))),S.addEventListener("focusout",(()=>o(S))),S.addEventListener("keypress",(e=>function(e,t){"Enter"===t.key&&(t.preventDefault(),e.src=t.data)}(u,e)));p.addEventListener("click",(()=>((async()=>{let e=await document.documentElement,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;if(t)return t.call(e),!0;if(void 0!==window.ActiveXObject){let e=new ActiveXObject("WScript.Shell");if(null!==e)e.SendKeys("{F11}")}})(),(async()=>((document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen)&&setTimeout((function(){window.screen.orientation.lock("landscape-primary")}),200),!0))()))),u.addEventListener("error",(e=>function(e,t,n){t.textContent+=n.srcElement.error.message||"",e.showModal()}(L,E,e))),w.addEventListener("click",(()=>function(e){e.close()}(L)));
