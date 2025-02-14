     
     


    
     const bookingForm = document.getElementById('bookingForm');
        const successMessage = document.getElementById('successMessage');

        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name_ = document.getElementById('name').value;
            const email_ = document.getElementById('email').value;
            const number_ = document.getElementById('number').value;
            const category_ = document.getElementById('category').value;
            const venue_ = document.getElementById('venue').value;
            const seats_ = document.getElementById('seating-options').value;
            const date_ = document.getElementById('date').value;
             const time_ = document.getElementById('time').value;

            if (name_ && email_ && number_ && category_ && seats_ && date_&& venue_&&time_) {
              
             location.href = "payment.html";
                
            } else {
                alert('Please fill in all fields correctly.');
            }
        });

