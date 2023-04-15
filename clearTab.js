const clearTab = (() => {
    //Module
    const tabContainer = document.querySelector("#tab-container");
    const elements = tabContainer.childNodes;

    const clear = () => {
        document.querySelector(".selected-tab").classList.remove('selected-tab');

        for (let i = elements.length - 1; i >= 0; i--) {
            tabContainer.removeChild(elements[i]);
        }
    }

    return { clear };

})();


export {
   clearTab
};