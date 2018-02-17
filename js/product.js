
let existingElement = document.getElementsByTagName("article")[0];
let productSection = document.createElement("section");
productSection.setAttribute("id", "productPC");
existingElement.appendChild(productSection);

// Produkt data
let getDataPC = [
    {
        name: "Dator 1",
        price: "11.111 kr",
        description: "1 av 5 Sjärnor",
        url: "img/data1.png"
    },
    {
        name: "Dator 2",
        price: "22.222 kr",
        description: "2 av 5 Sjärnor",
        url: "img/data2.jpeg"
    },
    {
        name: "Dator 3",
        price: "33.333 kr",
        description: "3 av 5 Sjärnor",
        url: "img/data3.jpg"
    },
    {
        name: "Dator 4",
        price: "44.444 kr",
        description: "4 av 5 Sjärnor",
        url: "img/data4.jpg"
    }
];

for(let i of getDataPC) {
    document.getElementById("productPC").innerHTML +=
        `<ul>
            <li>${i.name}</li>
            <li>${i.price} kr </li>
            <li>${i.description}</li>
            <li><img src=' ${i.url}'/>  </li>
            <li><input type="button" value="Köp nu"></li>
        </ul>`
    console.log(i);
}























/*
const datorer = [

    {
        name: "mac",
        price: "10000kr",
        description: "Väldigt bra",
        url: "https://static-goldenfrog.netdna-ssl.com/images/vyprvpn/mac/banner_mac.png"
    },
    {
        name: "PC",
        price: "4000kr",
        description: "Skitbra dator",
        url: "https://i5.walmartimages.com/asr/bac5f561-67fc-4974-8246-560bab226a5f_1.693fea998e5b84e319e693f1963d076c.jpeg?odnHeight=72&odnWidth=90&odnBg=FFFFFF"
    },
    {
        name: "Bärbar dator",
        price: "5000kr",
        description: "Inte alls bra dator",
        url: "https://www.netonnet.se/GetFile/ProductImagePrimary/dator/barbara-datorer/15-16tum/hp-notebook-15-bw040no(246537)_1_Normal_Large.jpg"
    }
];

datorer.forEach(datorer => {
    let create = document.getElementsByTagName("article")[0];
    let lista = document.createElement("ul");
    let item0 = document.createElement("li");
    let item1 = document.createElement("li");
    let item2 = document.createElement("li");
    let image = document.createElement("IMG");

image.src = datorer.url;

let name = document.createTextNode(datorer.name);
let price = document.createTextNode(datorer.price);
let description = document.createTextNode(datorer.description);

create.appendChild(lista);
lista.appendChild(item0);
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(image);

item0.appendChild(name);
item1.appendChild(price);
item2.appendChild(description);
});

*/