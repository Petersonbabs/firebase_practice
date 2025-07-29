import { app } from "../firestore/firebase.js"
import { getCartNumber, getCartItems, removeCartItem } from "./cartFunctions.js"
import { getElement } from "./utils.js"

// FIREBASE IMPORT
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const auth = getAuth(app)
let currentUser
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user
        getCartNumber()
        fetchCartItems()
    }
})
// ELEMENTS
const cartItemsEl = getElement("#cart-items")
const fetchCartItems = async () => {
    try {
        const cartItems = await getCartItems(currentUser.uid)
        if (!cartItems) {
            cartItemsEl.innerHTML = `
                <div>
                    <p>Nothing found</p>
                </div>
            `
        }
        if (cartItems.size === 0) {
            cartItemsEl.innerHTML = `
                <div>
                    <p>Your cart is empty</p>
                    <a href="./index.html">Start Shopping</a>
                </div>
            `
        }
        cartItems.forEach(item => {
            const cartItem = item.data()
            cartItemsEl.innerHTML += `
             <div class="cart-item">
            <img src="${cartItem.image}" alt="Product Image ${cartItem.id}">
            <div class="item-details">
                <div class="item-name">${cartItem.title}</div>
                <div class="item-quantity">Quantity: ${cartItem.quantity}</div>
                <div class="item-price">$${cartItem.price}</div>
                <button buttonid="${item.id}" class="delete-btn">Delete</button>
            </div>
        </div>
            `
        })

        const deleteCartBtns = document.querySelectorAll(".delete-btn")
        deleteCartBtns.forEach((btn) => {
            // alert()
            btn.addEventListener("click", (e) => {
                const cartId = e.target.getAttribute("buttonid")
                removeCartItem(cartId)
            })
        })
    } catch (error) {

    }
}