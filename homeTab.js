
const homeTab = (() => {
    //Module

    const shopName = document.createElement("h1");
    shopName.innerHTML = "Honey Shop";


    //About Us
    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.classList.add("info-container");

    const aboutUsHeader = document.createElement("h3");
    aboutUsHeader.innerHTML = "About Us";

    const aboutUsInfo = document.createElement("p");
    aboutUsInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis interdum eros, id ultrices lacus sollicitudin et.Nulla facilisi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec suscipit a ante quis tincidunt.Donec fringilla aliquet tortor eu venenatis.Nulla scelerisque gravida tortor, in gravida nisi imperdiet sed.";
    
    aboutUsContainer.append(aboutUsHeader);
    aboutUsContainer.append(aboutUsInfo);


    //Hours
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("info-container");

    const hoursHeader = document.createElement("h3");
    hoursHeader.innerHTML = "Hours";

    const hoursList = document.createElement("ul");
    hoursList.classList.add("info-list");

    const hoursListItem1 = document.createElement("li");
    const hoursListItem1Day = document.createElement("p");
    hoursListItem1Day.innerHTML = "Sunday:";
    const hoursListItem1Time = document.createElement("p");
    hoursListItem1Time.innerHTML = "Closed";

    hoursListItem1.append(hoursListItem1Day);
    hoursListItem1.append(hoursListItem1Time);

    const hoursListItem2 = document.createElement("li");
    const hoursListItem2Day = document.createElement("p");
    hoursListItem2Day.innerHTML = "Mon-Fri:";
    const hoursListItem2Time = document.createElement("p");
    hoursListItem2Time.innerHTML = "9:00am - 5:00pm";

    hoursListItem2.append(hoursListItem2Day);
    hoursListItem2.append(hoursListItem2Time);

    const hoursListItem3 = document.createElement("li");
    const hoursListItem3Day = document.createElement("p");
    hoursListItem3Day.innerHTML = "Saturday:";
    const hoursListItem3Time = document.createElement("p");
    hoursListItem3Time.innerHTML = "9:00am - 2:00pm";

    hoursListItem3.append(hoursListItem3Day);
    hoursListItem3.append(hoursListItem3Time);

    hoursList.append(hoursListItem1);
    hoursList.append(hoursListItem2);
    hoursList.append(hoursListItem3);

    hoursContainer.append(hoursHeader);
    hoursContainer.append(hoursList);


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
    const loadElements = () =>{
        const tabContainer = document.querySelector("#tab-container");
        tabContainer.append(shopName);
        tabContainer.append(aboutUsContainer);
        tabContainer.append(hoursContainer);
        tabContainer.append(locationContainer);

        document.querySelector("#home").classList.add('selected-tab');
    };   
    
    return { loadElements };

})();


export {
    homeTab
};