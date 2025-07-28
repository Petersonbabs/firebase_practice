import { app } from "../firestore/firebase.js"
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js"
import { collection, getFirestore, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { baseUrl } from "./utils.js"

const DB = getFirestore(app)
const auth = getAuth(app)
const cartColRef = collection(DB, "carts")
onAuthStateChanged(auth, (user) => {
    if (user) {

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

export const getCartCount = async () => {
    const cartEl = getElement("#cart")
    const user = auth.currentUser
    console.log(user.uid)
    const cartItems = await getCartItems(user.uid)
    console.log(cartItems.size)
    cartEl.textContent = cartItems.size
}


export const addToCart = async (id) => {
    // find the current user
    const user = auth.currentUser
    if (!user) {
        alert("Kindly login to perform this action")
        // redirect to login
        return
    }
    if (!id) {
        alert("Missing id")
        return
    }
    console.log("Adding to cart....")
    try {

        // Find the product with this id
        const res = await fetch(`${baseUrl}/products/${id}`)
        const product = await res.json()

        // create an object for firestore with it
        const newCartItem = {
            image: product.image,
            title: product.title,
            id: product.id,
            price: product.price,
            quantity: 1
        }
        // add it to firestore subcollection
        const cartItemsColRef = collection(cartColRef, user.uid, "cartItems")
        const docRef = await addDoc(cartItemsColRef, newCartItem)
        getCartCount()
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

// GET CART ITEMS
export const getCartItems = async (uid) => {
    try {
        if (uid) {
            const userCartRef = collection(cartColRef, uid, "cartItems")
            const querySnapShot = await getDocs(userCartRef)
            return querySnapShot
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}