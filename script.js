let lomake = document.forms["formNewItem"];
let itemList = document.getElementById("itemList");

lomake.addEventListener("submit", uusiListaElementti)
itemList.addEventListener("click", iteminKlikkaus)

function uusiListaElementti(event){

    event.preventDefault()
    
    //Haetaan elementille nimi 
    let elementinNimi = document.querySelector('#main input[type="text"]').value;

    if(elementinNimi.length < 1){
        alert("Pitää antaa nimi")
        return;
    }

    //Luodaan uusi li-elementti ja sille sisältö
    let uusiElementti = document.createElement("li")
    let uusiElementtiTeksti = document.createTextNode(elementinNimi)
    uusiElementti.appendChild(uusiElementtiTeksti)
    //Lisätään list-item class
    uusiElementti.ClassName = "list-item";

    //Lisätään uusi li-elementti oikeaan paikkaan
    document.querySelector("#itemList").appendChild(uusiElementti)
}

function iteminKlikkaus(event){
    console.log("Klikkasit listaa")
    console.log(event.target)
    let parentti = event.target.parentElement
    poistaItem(event.target, parentti)
}

function poistaItem(poistettavaElementti, elementinParentti){
    elementinParentti.removeChild(poistettavaElementti)
}