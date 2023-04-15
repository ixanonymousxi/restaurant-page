
const menuTab = (() => {
    //Module

    const shopName = document.createElement("h1");
    shopName.innerHTML = "Honey Shop";


    //Menu
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("info-container");

    const menuHeader = document.createElement("h3");
    menuHeader.innerHTML = "Menu";

    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    for(let i = 1; i < 7; i++){
        const menuListItem = document.createElement("li");

        const menuListItemImage = document.createElement("img");
        menuListItemImage.src = "../src/Images/AdobeStock_67880775_Large.jpeg";
        const menuListItemTitle = document.createElement("p");
        menuListItemTitle.style.fontWeight = "bold";
        menuListItemTitle.innerHTML = "Menu Item #" + i;
        const menuListItemPrice = document.createElement("p");
        menuListItemPrice.innerHTML = "$5.99";

        menuListItem.append(menuListItemImage);
        menuListItem.append(menuListItemTitle);
        menuListItem.append(menuListItemPrice);

        menuList.append(menuListItem);
    }

    menuContainer.append(menuHeader);
    menuContainer.append(menuList);



    //Append Elements to the page
    const loadElements = () => {
        const tabContainer = document.querySelector("#tab-container");
        tabContainer.append(shopName);
        tabContainer.append(menuContainer);

        document.querySelector("#menu").classList.add('selected-tab');
    };

    return { loadElements };

})();


export {
    menuTab
};