let lomake = document.forms["formNewItem"];
lomake.addEventListener("submit", uusiListaElementti)

function uusiListaElementti(event){

    event.preventDefault()
    
    //Haetaan elementille nimi 
    let elementinNimi = document.querySelector('#main input[type="text"]').value;

    //Luodaan uusi li-elementti ja sille sisältö
    let uusiElementti = document.createElement("li")
    let uusiElementtiTeksti = document.createTextNode(elementinNimi)
    uusiElementti.appendChild(uusiElementtiTeksti)

    //Lisätään list-item class
    uusiElementti.ClassName = "list-item";

    //Lisätään uusi li-elementti oikeaan paikkaan
    document.querySelector("#itemList").appendChild(uusiElementti)
}