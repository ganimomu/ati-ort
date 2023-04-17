var firstName;
var lastName;

document.querySelector("#formatNames").addEventListener("click", nameFormatter);

function nameFormatter() {
    firstName = document.querySelector("#txtName").value;
    lastName = document.querySelector("#txtSurname").value;
    console.log(`${firstName} ${lastName}`);
    document.querySelector("#formatResult").innerHTML =  `${lastName}, ${firstName}`;
}