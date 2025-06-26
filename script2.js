let kaverilista = document.forms["kaverilista"];
let lista = document.getElementById("lista");

function lisaa() {
    const kaverit = [];
    let kaveri = document.querySelector("#kaverilista input[type='text']").value; 
    kaverit.push(kaveri);

    for (let i = 0; i < kaverit.length; ++i) {
        let li = document.createElement("li");
        li.innerText = kaverit[i];
        lista.appendChild(li);
    }

}

function poista() {
    let kaveri = document.querySelector("#kaverilista input[type='text'").value;
    let nimet = lista.getElementsByTagName("li");

    for (let i = nimet.length - 1; i >= 0; i--) {
        let nimi = nimet[i].textContent;
        if (nimi === kaveri) {
            lista.removeChild(nimet[i]);
        }
    }
}

function jarjesta() {
    let nimet = Array.from(lista.getElementsByTagName("li"));

    nimet.sort((a, b) =>
        a.textContent.localeCompare(b.textContent));

    lista.innerHTML = "";
    nimet.forEach(nimi => lista.appendChild(nimi));
}