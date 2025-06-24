function myFunction() {
    const persons = [];
    while (persons.length < 10) {
        let person = prompt("Anna kaverin nimi:");
        persons.push(person);
    }

    let list = document.getElementById("lista");
    for (let i = 0; i < persons.length; ++i) {
        let li = document.createElement("li");
        li.innerText = persons[i];
        list.appendChild(li);
    }
}