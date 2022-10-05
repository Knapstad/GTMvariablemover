const storageCache = {};
// Asynchronously retrieve data from storage.sync, then cache it.
const initStorageCache = getAllStorageSyncData().then(items => {
  // Copy the data retrieved from storage into storageCache.
    Object.assign(storageCache, items);
});


chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.options?.newValue) {
        const save = Boolean(changes.options.newValue.save); 
        const preview = Boolean(changes.options.newValue.preview); 
        storageCache.options.save = save;
        storageCache.options.preview = preview;
    }
    });





function getAllStorageSyncData() {
    // Immediately return a promise and start asynchronous work
    return new Promise((resolve, reject) => {
      // Asynchronously fetch all data from storage.sync.
        chrome.storage.sync.get(null, (items) => {
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
            return reject(chrome.runtime.lastError);
        }
        // Pass the data retrieved from storage down the promise chain.
        resolve(items);
        });
    });
}


function myfunc(){
    if(document.location["href"].endsWith("variables")){
        thisinterval = setInterval(function(){

            let dashboard=document.querySelector(".gtm-cloak-grey.gtm-cloaked-borderless.gtm-cloaked.gtm-cloaked-spinner.gtm-cloaked-ready");
            try{
                if(dashboard){    
                
                    let userDefined = dashboard.firstElementChild.innerText.split(" ");
                
                    if(userDefined[0]==="User-Defined"){
                        clearInterval(thisinterval);
                    }else{
                        let ettelement=dashboard.firstElementChild;
                        let etannetelement = dashboard.lastElementChild;
                        dashboard.insertBefore(etannetelement,ettelement);
                        clearInterval(thisinterval);
                        let usertable=document.querySelector("body > div.gtm-root > div > div.gtm-ng-view > gtm-variable-list > gtm-container-page > div > div > div.gtm-container-page-content-wrapper > div > div > div > div.card.card--table");
                        let userparent=usertable.parentElement;
                        let spacer= document.createElement("div");
                        spacer.className += "card card--table card-bottom-spacer2";
                        userparent.replaceChild(spacer,usertable);
                        spacer.appendChild(usertable)
                    }
                }
                }catch(TypeError){
                    }
            
        },500)
    }
    if(document.location.href.includes("tagmanager.google")){
        document.addEventListener('keydown', e => {
            if(storageCache?.options?.save){
                if (e.ctrlKey && e.key === 's'){
                        e.preventDefault();
                        allSaveButtons=document.querySelectorAll("button[type='submit']:not([disabled])");
                        if(allSaveButtons){
                            try{
                                lastSaveButton=allSaveButtons[allSaveButtons.length-1];
                                lastSaveButton.click();}
                            catch(e){
                            }
                        }
                    }
                }
            if(storageCache?.options?.preview){
                if(e.ctrlKey && e.key == 'p'){
                    e.preventDefault();
                    preview=document.querySelector(".gtm-preview-button:not([disabled])");
                    if(preview){
                        try{
                            preview.click();}
                        catch(e){
                            console.warn(e)
                        }
                    }
                }
            }
        });}
    if(document.location.href.includes("marketingplatform.google")){
        document.addEventListener('keydown', e => {
            if(storageCache?.options?.save){
                if (e.ctrlKey && e.key === 's'){
                        e.preventDefault();
                        saveButton=document.querySelector("button[gtmtrigger='users-save-permissions']:not([disabled])");

                        try{
                            saveButton.click();}
                            catch(e){
                                console.warn(e);
                            }
                        }
                    }
        }
        );}
    }

try{
    if(document.location.href.includes("marketingplatform.google" || "tagmanager.google")){
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete') {
                chrome.scripting.executeScript({
                    target: {tabId: tabId},
                    func: myfunc
                });

            }
        });
    }
}catch(e){

}
