
const contactTab = (() => {
    //Module

    const shopName = document.createElement("h1");
    shopName.innerHTML = "Honey Shop";


    //Contact Information
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("info-container");

    const contactHeader = document.createElement("h3");
    contactHeader.innerHTML = "Contact Information";

    const contactList = document.createElement("ul");
    contactList.classList.add("info-list");

    const contactListItem1 = document.createElement("li");
    const contactListItem1Phone = document.createElement("p");
    contactListItem1Phone.innerHTML = "Phone:";
    const contactListItem1Number = document.createElement("p");
    contactListItem1Number.innerHTML = "555.123.4321";

    contactListItem1.append(contactListItem1Phone);
    contactListItem1.append(contactListItem1Number);

    const contactListItem2 = document.createElement("li");
    const contactListItem2Email = document.createElement("p");
    contactListItem2Email.innerHTML = "Email:";
    const contactListItem2EmailAddress = document.createElement("p");
    contactListItem2EmailAddress.innerHTML = "honeyShop@email.com";

    contactListItem2.append(contactListItem2Email);
    contactListItem2.append(contactListItem2EmailAddress);


    contactList.append(contactListItem1);
    contactList.append(contactListItem2);

    contactContainer.append(contactHeader);
    contactContainer.append(contactList);


    //Location
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("info-container");

    const locationHeader = document.createElement("h3");
    locationHeader.innerHTML = "Location";

    const locationInfo = document.createElement("p");
    locationInfo.innerHTML = "5432 Honey Street, Forestville, IN";

    locationContainer.append(locationHeader);
    locationContainer.append(locationInfo);


    //Append Elements to the page
    const loadElements = () => {
        const tabContainer = document.querySelector("#tab-container");
        tabContainer.append(shopName);
        tabContainer.append(contactContainer);
        tabContainer.append(locationContainer);

        document.querySelector("#contact").classList.add('selected-tab');

    };

    return { loadElements };

})();


export {
    contactTab
};