 
      // Get user input values
const name_ = document.getElementById('name').value;
const email_ = document.getElementById('email').value;
const number_ = document.getElementById('number').value;
const category_ = document.getElementById('category').value;
const venue_ = document.getElementById('venue').value;
const seats_ = document.getElementById('seating-options').value;
const date_ = document.getElementById('date').value;
const time_ = document.getElementById('time').value;

// Get elements
const applePay = document.getElementById('apple-pay');
const stripe = document.getElementById('Stripe'); // Fixed variable name
const payPal = document.getElementById('PayPal');
const flutterwave = document.getElementById('Flutterwave');
const ozowPay = document.getElementById('Ozow_pay');
const creditCard = document.getElementById('credit-card');
const paymentForm = document.getElementById('payment-form');
const confirmation = document.getElementById('confirmation');
const amountInput = document.getElementById('amount');

let balance = 100;

// Function to get the payment amount
function getAmount() {
    if (!amountInput) {
        alert("Amount input field is missing.");
        return null;
    }

    let amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a valid amount.");
        return null;
    }
    return amount;
}

// PayPal Payment
async function payWithPayPal() {
    let amount = getAmount();
    if (!amount) return;

    window.location.href = `https://www.paypal.com/checkoutnow?amount=${amount}`;
}

// Stripe Payment
async function payWithStripe() {
    let amount = getAmount();
    if (!amount) return;

    let response = await fetch("https://your-backend.com/create-stripe-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount })
    });

    let result = await response.json();
    if (result.success) {
        window.location.href = result.checkout_url;
    } else {
        alert("Payment failed. Try again.");
    }
}

// Event Listeners for payment methods
applePay.addEventListener('click', () => {
    
    location.href = "Apple_pay.html";
});

stripe.addEventListener('click', () => {
    alert('Stripe selected. Processing payment...');
    payWithStripe();
});

payPal.addEventListener('click', () => {
    alert('PayPal selected. Redirecting to PayPal...');
    payWithPayPal();
});

flutterwave.addEventListener('click', () => {
    alert('Flutterwave selected. Simulating payment...');
    paymentForm.style.display = 'none';
    confirmation.style.display = 'block';
    location.href = "Flutterwave.html";
});

ozowPay.addEventListener('click', () => {
    alert('Ozow Pay selected. Simulating payment...');
    paymentForm.style.display = 'none';
    confirmation.style.display = 'block';
    location.href = "Ozow.html";
});

creditCard.addEventListener('click', () => {
    paymentForm.style.display = 'block';
    confirmation.style.display = 'none';
});

// Handle form submission
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        alert('Credit/Debit Card payment processed. Simulating payment...');
        paymentForm.style.display = 'none';
        confirmation.style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
});

// Send email using EmailJS when Stripe is clicked
stripe.addEventListener('click', () => {
    const formData = {
        name: name_,
        email: email_,
        number: number_,
        category: category_,
        venue: venue_,
        seats: seats_,
        date: date_,
        time: time_
    };

    emailjs.send("service_sdxlm3t", "template_ud2zj3h", formData)
        .then(
            function(response) {
                alert("Email sent successfully!");
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('bookingForm').reset();
            },
            function(error) {
                alert("Failed to send email. Please try again later.");
                console.error("EmailJS Error:", error);
            }
        );
});