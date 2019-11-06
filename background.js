function myfunc(){
if(document.location["href"].endsWith("variables")){
thisinterval = setInterval(function(){
    let dashboard=document.querySelector(".gtm-cloak-grey.gtm-cloaked-borderless.gtm-cloaked.gtm-cloaked-spinner.gtm-cloaked-ready");
    if (dashboard){
        let ettelement=document.querySelector(".gtm-cloak-grey.gtm-cloaked-borderless.gtm-cloaked.gtm-cloaked-spinner.gtm-cloaked-ready").firstElementChild;
        let etannetelement = document.querySelector(".gtm-cloak-grey.gtm-cloaked-borderless.gtm-cloaked.gtm-cloaked-spinner.gtm-cloaked-ready").lastElementChild;
        
        dashboard.insertBefore(etannetelement,ettelement);
        clearInterval(thisinterval);
        let usertable=document.querySelector("body > div.gtm-root > div > div.gtm-ng-view > gtm-variable-list > gtm-container-page > div > div > div.gtm-container-page-content-wrapper > div > div > div > div.card.card--table");
        let userparent=usertable.parentElement;
        let spacer= document.createElement("div");
        spacer.className += "card card--table card-bottom-spacer2";
        userparent.replaceChild(spacer,usertable);
        spacer.appendChild(usertable)
    }
    
},500);}}

window.onpopstate=function(){myfunc()};
window.onload=function(){myfunc()};