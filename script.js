// ================================
// SIMPLE JAVASCRIPT FOR YOUR WEBSITE
// Manages the shopping cart system
// ================================

// STEP 1: Create an empty cart (array to store books)
let cart = [];

// STEP 2: Function to add a book to the cart
function addToCart(bookTitle, price) {
    // Create an object representing the book
    let book = {
        title: bookTitle,
        price: price
    };

    // Push the book into the cart array
    cart.push(book);

    // Show confirmation alert
    alert(bookTitle + " has been added to the cart!");

    // Update the cart count
    updateCartCount();
}

// STEP 3: Function to update the cart count (display in the UI)
function updateCartCount() {
    let cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length; // Show total items
    }
}

// STEP 4: Function to display the cart content
function viewCart() {
    let cartDetails = "Your Cart:\n\n";
    
    // Check if cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Loop through the cart items
    cart.forEach((book, index) => {
        cartDetails += (index + 1) + ". " + book.title + " - $" + book.price + "\n";
    });

    // Show the cart details in an alert
    alert(cartDetails);
}

// STEP 5: Function to remove all items from the cart (Clear Cart)
function clearCart() {
    cart = []; // Empty the cart array
    alert("Your cart has been cleared!");
    updateCartCount(); // Update the cart count display
}

