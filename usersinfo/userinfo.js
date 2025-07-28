const usernameEl = document.getElementById("username")
const phoneEl = document.getElementById("phone")
const emailEl = document.getElementById("email")
const addButtonEl = document.getElementById("add-user-btn")
const clearButtonEl = document.getElementById("clear-users-btn")
const usersListEl = document.getElementById("users-list")
let userArrayEl = JSON.parse(localStorage.getItem("users")) || []

const saveUserInfo = () =>{
    const usernameVal = usernameEl.value
    const phoneVal = phoneEl.value
    const emailVal = emailEl.value
    if (!usernameVal || !phoneVal || !emailVal) {
        alert("fill all fields")
    }

    const newUser = {
        username: usernameVal,
        phone: phoneVal,
        email: emailVal
    }

    userArrayEl.push(newUser)
    usernameEl.value =""
    phoneEl.value = ""
    emailEl.value = ""

    localStorage.setItem("users", JSON.stringify(userArrayEl))
    displayUserInfo()
}

const displayUserInfo = () =>{
    userArrayEl = JSON.parse(localStorage.getItem("users")) || []

    usersListEl.innerHTML = ""

    userArrayEl.forEach((ele)=>{
        usersListEl.innerHTML += `
            <tr>
                <td>${ele.username}</td>
                <td>${ele.phone}</td>
                <td>${ele.email}</td>
            </tr>
        `
    })
}

const clearUserInfo = () =>{
    localStorage.clear()
    displayUserInfo()
}

addButtonEl.addEventListener("click", saveUserInfo)
clearButtonEl.addEventListener("click", clearUserInfo)