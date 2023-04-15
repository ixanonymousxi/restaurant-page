import { homeTab } from './homeTab.js';
import { menuTab } from './menuTab.js';
import { contactTab } from './contactTab.js';
import { clearTab } from './clearTab.js';


window.addEventListener("onload", homeTab.loadElements());


const switchTab = (e) => {
    const tab = e.target.id;

    clearTab.clear();

    switch(tab){
        case "home":
            homeTab.loadElements();
            break;

        case "menu":
            menuTab.loadElements();
            break;
        
        case "contact":
            contactTab.loadElements();
            break;

        default:
            clearTab.clear();
            break;
    }
}


document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", switchTab);
});