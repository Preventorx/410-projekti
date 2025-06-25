let kaverilista = document.forms["kaverilista"];

function lisaa() {
    const kaverit = [];
    let kaveri = document.querySelector("#kaverilista input[type='text']").value; 

    kaverit.push(kaveri);

    let list = document.getElementById("lista");
    for (let i = 0; i < kaverit.length; ++i) {
        let li = document.createElement("li");
        li.innerText = kaverit[i];
        list.appendChild(li);
    }
}


function poista() {
    let kaveri = document.querySelector("#kaverilista input[type='text'").value;
    let list = document.getElementById("lista");
          
}


function jarjesta() {

}