for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);   
    }
}

const infoEl = document.getElementById("info");
const properties = {name: "Damilare", age: 20, email: "damilare2025@gmail.com"}

const displayInfo = ()=>{
    infoEl.innerHTML = `
    <h1>${properties.name}</h1>
    <p>${properties.age}</p>
    <p>${properties.email}</p>
    `
}
// displayInfo();

// localStorage.setItem("username", "deleke")

const emailEl = document.getElementById("email")
const buttonEl = document.getElementById("submit-email")
const paraEl = document.getElementById("email-el")

function saveEmail() {
    const getEmail = emailEl.value
    localStorage.setItem("email", getEmail)
    retrieveEmail()
}
buttonEl.addEventListener("click", saveEmail)

function retrieveEmail() {
    const userId = localStorage.getItem("email")
    paraEl.innerHTML = userId
}


// const userID = localStorage.getItem("email", getEmail)
// console.log(userID);
