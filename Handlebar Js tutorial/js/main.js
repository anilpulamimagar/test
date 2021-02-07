var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', `https://learnwebcode.github.io/json-example/pets-data.json`);
ourRequest.onload = function () {
    if(ourRequest.status >= 200 && ourRequest.status < 400){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData)
    } else {
        console.log("We connect to the server, but it return error")
    }
}
ourRequest.onerror = () => {
    console.log("Connection error")
}
ourRequest.send();

Handlebars.registerHelper("calculateAge", function (birthYear) {
    var age = new Date().getFullYear() - birthYear;
    if (age > 5){
        return `${age} years old`;
    } else {
        return `Less then a year old`;
    }
})

function renderHTML(petsData) {
    var rawTemplate = document.getElementById("petsTemplate").innerText;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(petsData);

    var petsContainer = document.getElementById("pets-container")
    petsContainer.innerHTML = ourGeneratedHTML;
}