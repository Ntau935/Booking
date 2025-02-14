 
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
        const Stripe = document.getElementById('Stripe');
        const PayPal = document.getElementById('PayPal');
        const Flutterwave = document.getElementById('Flutterwave');
        const Ozow_pay = document.getElementById('Ozow_pay');
        const creditCard = document.getElementById('credit-card');
        const paymentForm = document.getElementById('payment-form');
        const confirmation = document.getElementById('confirmation');
let balance = 100;

async function payWithPayPal() {
    let amount = getAmount();
    if (!amount) return;
    window.location.href = `https://www.paypal.com/checkoutnow?amount=${amount}`;
}

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



function getAmount() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a valid amount.");
        return null;
    }

        // Handle payment method selection
        applePay.addEventListener('click', () => {
            alert('Apple Pay selected. Simulating payment...');
            paymentForm.style.display = 'none';
            confirmation.style.display = 'block';
            location.href = "Apple_pay.html";
        });
           Stripe.addEventListener('click', () => {
            alert('Google Pay selected. Simulating payment...');
              var formData = {
                   name : name_ ,
                  email : email_,
                  number : number_,
                 category: category_,
                  venue: venue_,
                  seats : seats_,
                  date :document.getElementById('date').value,
                  time:time_            
        };

        // Send email using EmailJS
        emailjs
            .send("service_sdxlm3t", "template_ud2zj3h", formData)
            .then(
                function(response) {
                    alert("Email sent successfully!");
                   successMessage.style.display = 'block';
                   bookingForm.reset();
                },
                function(error) {
                    alert("Failed to send email. Please try again later.");
                    console.error("EmailJS Error:", error);
                }
            );

        });
           PayPal.addEventListener('click', () => {
         createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{ amount: { value: '10.00' } }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
            } });
           Flutterwave.addEventListener('click', () => {
            alert('Google Pay selected. Simulating payment...');
            paymentForm.style.display = 'none';
            confirmation.style.display = 'block';
            location.href = "Google_pay.html";
        });

       Ozow_pay.addEventListener('click', () => {
            alert('Google Pay selected. Simulating payment...');
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
        
        
