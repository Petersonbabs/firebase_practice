const products = [
    {
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 49.99,
        seller: "TechGiant",
        description: "Over-ear Bluetooth headphones with noise cancellation and 20-hour battery life."
    },
    {
        name: "Organic Green Tea",
        category: "Groceries",
        price: 9.99,
        seller: "HealthyLeaf",
        description: "100% organic green tea leaves from the Himalayas, rich in antioxidants."
    },
    {
        name: "Gaming Mouse RGB",
        category: "Electronics",
        price: 29.99,
        seller: "GamerZone",
        description: "Ergonomic mouse with 7 programmable buttons and customizable RGB lighting."
    },
    {
        name: "Leather Office Chair",
        category: "Furniture",
        price: 129.99,
        seller: "FurniStyle",
        description: "Comfortable executive chair with adjustable height and tilt function."
    },
    {
        name: "Men's Running Shoes",
        category: "Fashion",
        price: 59.99,
        seller: "SportX",
        description: "Breathable mesh sneakers with durable soles for long-distance running."
    },
    {
        name: "Electric Kettle 1.7L",
        category: "Home Appliances",
        price: 24.99,
        seller: "HomeEssentials",
        description: "Fast boiling electric kettle with auto shut-off and BPA-free design."
    },
    {
        name: "Ceramic Plant Pots (Set of 3)",
        category: "Home & Garden",
        price: 34.99,
        seller: "UrbanRoots",
        description: "Modern decorative ceramic pots perfect for succulents and indoor plants."
    },
    {
        name: "4K Action Camera",
        category: "Electronics",
        price: 79.99,
        seller: "CamPro",
        description: "Waterproof action cam with 4K resolution, WiFi, and multiple mounts."
    },
    {
        name: "Stainless Steel Water Bottle",
        category: "Outdoors",
        price: 14.99,
        seller: "GoGreen",
        description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12."
    },
    {
        name: "Yoga Mat with Strap",
        category: "Fitness",
        price: 22.49,
        seller: "FitFlex",
        description: "Non-slip yoga mat with carrying strap, ideal for home workouts and gym."
    },
    {
        name: "Bluetooth Smartwatch",
        category: "Wearables",
        price: 89.99,
        seller: "TimeTech",
        description: "Tracks fitness, heart rate, sleep, and notifications with iOS/Android support."
    },
    {
        name: "LED Desk Lamp",
        category: "Home Office",
        price: 19.99,
        seller: "BrightLite",
        description: "Adjustable LED lamp with touch controls and 5 brightness levels."
    },
    {
        name: "Mini Projector",
        category: "Electronics",
        price: 99.99,
        seller: "ViewPoint",
        description: "Compact projector suitable for home cinema and presentations."
    },
    {
        name: "Portable Power Bank 20,000mAh",
        category: "Accessories",
        price: 39.99,
        seller: "ChargeHub",
        description: "High-capacity power bank with fast charging for phones and tablets."
    },
    {
        name: "Baby Diaper Bag Backpack",
        category: "Baby",
        price: 45.99,
        seller: "MommyGear",
        description: "Multi-pocket waterproof bag for moms with changing pad included."
    },
    {
        name: "Electric Hair Clipper",
        category: "Personal Care",
        price: 27.99,
        seller: "TrimIt",
        description: "Rechargeable hair clipper with multiple guards for home grooming."
    },
    {
        name: "Scented Soy Candles (Pack of 3)",
        category: "Home Decor",
        price: 18.99,
        seller: "CozyAura",
        description: "Eco-friendly candles with lavender, vanilla, and rose scents."
    },
    {
        name: "Kids Educational Tablet",
        category: "Toys & Games",
        price: 64.99,
        seller: "EduPlay",
        description: "Tablet preloaded with educational games, parental controls included."
    },
    {
        name: "Car Vacuum Cleaner",
        category: "Automotive",
        price: 25.99,
        seller: "AutoCare",
        description: "Compact handheld vacuum for car interiors with strong suction."
    },
    {
        name: "Stainless Steel Cookware Set",
        category: "Kitchen",
        price: 99.99,
        seller: "ChefPro",
        description: "10-piece non-stick stainless steel cookware set for all cooking surfaces."
    }
];

const productListEl = document.getElementById("productList")

products.forEach((ele) => {
    productListEl.innerHTML += `
                <h3>${ele.name}</h3>
                <p>Category:${ele.category}</p>
                <p>Price:${ele.price}</p>
                <p>Seller:${ele.seller}</p>
                <p>Description:${ele.description}</p><br>
            `
})



// console.log(searchResults)

function search() {
    const searchQuery = searchProductsInput.value
    const searchResults = products.filter((ele) => ele.name.toLowerCase().includes(searchQuery.toLowerCase()) || ele.category.toLowerCase().includes(searchQuery.toLowerCase()) || ele.seller.toLowerCase().includes(searchQuery.toLowerCase()) || ele.description.toLowerCase().includes(searchQuery.toLowerCase()))

    productListEl.innerHTML = ""

    searchResults.forEach((ele) => {
        productListEl.innerHTML += `
                <div style="border: 1px solid black;">
                    <h3>${ele.name}</h3>
                <p>Category:${ele.category}</p>
                <p>Price:${ele.price}</p>
                <p>Seller:${ele.seller}</p>
                <p>Description:${ele.description}</p><br>
                </div>
            `
    })

}


