let kaverilista = document.forms("kaverilista");
kaverilista.addEventListener("submit", toiminto)


function toiminto(event) {
    event.preventDefault()

    const kaverit = [];
    let kaveri = document.getElementById("nimi");
    if document.getElementById("nimi").onclick == "lisää" {
        kaverit.push(kaveri);       
        let list = document.getElementById("lista");
        for (let i = 0; i < persons.length; ++i) {
            let li = document.createElement("li");
            li.innerText = persons[i];
            list.appendChild(li);
        }
    }
}