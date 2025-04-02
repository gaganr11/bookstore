// Retrieve cart items from local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItemsContainer = document.getElementById("cart-items");
let totalPriceContainer = document.getElementById("total-price");

// Display cart items
let totalPrice = 0;
cart.forEach(book => {
    let item = document.createElement("p");
    item.textContent = `${book.title} - ₹${book.price}`;
    cartItemsContainer.appendChild(item);
    totalPrice += book.price;
});

// Update total price
totalPriceContainer.textContent = `₹${totalPrice}`;

// Automatically update the Paytm transaction amount field
document.querySelector("input[name='TXN_AMOUNT']").value = totalPrice;

// After successful payment, clear cart
document.querySelector("form").addEventListener("submit", function() {
    localStorage.removeItem("cart");
});
// Function to save buyer details
function saveBuyerDetails() {
    let buyer = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        postalCode: document.getElementById("postal-code").value,
        phone: document.getElementById("phone").value
    };

    // Store buyer details in local storage
    localStorage.setItem("buyerDetails", JSON.stringify(buyer));

    alert("Your delivery details have been saved! Proceed to payment.");
}
function validateForm() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let postalCode = document.getElementById("postal-code").value;
    let phone = document.getElementById("phone").value;

    if (name && address && city && postalCode && phone) {
        localStorage.setItem("buyerDetails", JSON.stringify({ name, address, city, postalCode, phone }));
        alert("Your delivery details have been saved! You can now proceed to payment.");
        document.getElementById("paytm-btn").removeAttribute("disabled"); // Enable Paytm button
    } else {
        alert("Please fill out all the fields before proceeding.");
    }
}
function sendEmail() {
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let postalCode = document.getElementById("postal-code").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let paytmButton = document.getElementById("paytm-btn");

    if (!name || !address || !city || !postalCode || !phone) {
        alert("Please fill out all the fields before proceeding.");
        return;
    }

    // Prepare the email format
    let mailBody = `Customer Details:\n\nName: ${name}\nAddress: ${address}, ${city}, ${postalCode}\nPhone: ${phone}`;

    // Open the user's email app with pre-filled details
    window.location.href = `mailto:your-email@example.com?subject=New Book Order&body=${encodeURIComponent(mailBody)}`;

    // Enable the Paytm button after email is sent
    paytmButton.removeAttribute("disabled");

    alert("Your details have been filled in the email! Please click 'Send' in your mail app.");
}
