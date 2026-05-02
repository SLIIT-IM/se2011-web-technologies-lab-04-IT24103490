alert("Welcome to Campus Tech Store JavaScript Lab!");

let storeName = "Campus Tech Store";  
let year = 2026;  

console.log(storeName);  
console.log(year);

let welcomeButton = document.getElementById("welcomeBtn");
let welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.onclick = function () {
    welcomeMessage.textContent = "Welcome to Campus Tech Store! Enjoy student-friendly technology deals.";
};

let productTable = document.getElementById("productTable");
let productCount = document.getElementById("productCount");

let totalRows = productTable.rows.length - 1;
productCount.textContent = totalRows;

let discountButton = document.getElementById("discountBtn");
let priceInput = document.getElementById("priceInput");
let discountResult = document.getElementById("discountResult");

discountButton.onclick = function () {
    let price = Number(priceInput.value);

    if (price > 0) {
        let discount = price * 0.10;
        let finalPrice = price - discount;
        discountResult.textContent = "Discount: Rs. " + discount + " | Final Price: Rs. " + finalPrice;
    } else {
        discountResult.textContent = "Please enter a valid product price.";
    }
};
let offersButton = document.getElementById("offersBtn");
let offersMessage = document.getElementById("offersMessage");

offersButton.onclick = function () {
    offersMessage.textContent = "Special student offer active: Free delivery and selected item discounts are available today.";
};
let products = ["Laptop", "Headphones", "Smart Watch", "USB Flash Drive"];

let searchButton = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResult");

searchButton.onclick = function () {
    let userInput = searchInput.value.toLowerCase();
    let found = false;

    for (let i = 0; i < products.length; i++) {
        if (products[i].toLowerCase() === userInput) {
            found = true;
            break;
        }
    }

    if (found) {
        searchResult.textContent = "Product found in the store list.";
    } else {
        searchResult.textContent = "Sorry, this product is not in the current store list.";
    }
};
let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.onsubmit = function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (fullName === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields before submitting.";
        formMessage.style.color = "red";
    }
    else if (phone.length < 10) {
        formMessage.textContent = "Phone number should contain at least 10 characters.";
        formMessage.style.color = "red";
    } 
    else if (!email.includes("@")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    }
    else if (message.length < 10) {
    formMessage.textContent = "Message should be at least 10 characters long.";
    formMessage.style.color = "red";
    }     
    else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
    }
};
window.onload = function () {
    document.getElementById("welcomeMessage").textContent = "Page loaded successfully. Click buttons below to interact with the website.";
};
let themeButton = document.getElementById("themeBtn");

themeButton.onclick = function () {
    document.body.classList.toggle("dark-mode");
};
let showProductsBtn = document.getElementById("showProductsBtn");
let productListDisplay = document.getElementById("productListDisplay");

showProductsBtn.onclick = function () {
    productListDisplay.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        productListDisplay.innerHTML += "<li>" + products[i] + "</li>";
    }
};

function updateClock() {
    let now = new Date();
    document.getElementById("clock").textContent = "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
















