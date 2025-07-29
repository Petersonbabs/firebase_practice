export const baseUrl = "https://fakestoreapi.com"

export const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (!element) {
        console.log(`There's no element with this selector: ${selector}`)
        return
    }
    return element
}