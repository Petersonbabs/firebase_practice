
import { app } from "../firestore/firebase.js"
import { addToCart, getCartNumber } from "./cartFunctions.js"
import { baseUrl } from "./utils.js"

// FIREBASE IMPORT
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const auth = getAuth(app)
let currentUser
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user
        getCartNumber()
    }
})

const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (!element) {
        console.log(`There's no element with this selector: ${selector}`)
        return
    }
    return element
}
const productsEl = getElement("#products")

// FETHC PRODUCT FROM DATABASE
const fetchProducts = async () => {
    console.log("Fetching products...")
    try {
        const res = await fetch(`${baseUrl}/products`)
        const data = await res.json()
        displayProducts(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

fetchProducts()

const displayProducts = (products = []) => {
    productsEl.innerHTML = ""
    products.forEach((ele, index) => {
        productsEl.innerHTML += `
            <div class="product-card">
            <div class="img-con">
                <img src="${ele.image}"
                    alt="">
            </div>
            <h3>${ele.title}</h3>
            <span>$${ele.price}</span>
            <span>${ele.category}</span>
            <div class="cart-control-btns">
                <div>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <button buttonId="${ele.id}" class="add-cart-btn" >Add To Cart</button>
            </div>
        </div>
        `
    })

    // 
    const cartBtns = document.querySelectorAll(".add-cart-btn")
    cartBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const productId = e.target.getAttribute("buttonId")
            addToCart(productId)
        })
    })
    
}




// const button1 = getElement("#call")
// const button2 = getElement("#call-2")

// const call = (e) => {
//     console.log(e.target)
//     const id = e.target.getAttribute("buttonId")
//     console.log(id)
// }

// button1.addEventListener("click", call)
// button2.addEventListener("click", call)
