// Import and configure Firebase (ensure your Firebase config is set correctly)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const category = document.getElementById("category").value;
    const venue = document.getElementById("venue").value;
    const seats = document.getElementById("seats").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Create a booking object
    const booking = {
        name,
        email,
        number,
        category,
        venue,
        seats,
        date,
        time,
        timestamp: new Date().toISOString() // Optional: Add timestamp
    };

    // Push the booking data to Firebase
    const bookingsRef = ref(database, "bookings");
    push(bookingsRef, booking)
        .then(() => {
            // Display success message
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("bookingForm").reset(); // Reset form
        })
        .catch((error) => {
            console.error("Error saving booking: ", error);
        });
});

