document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('.form-container');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        // Format the message for WhatsApp
        var phoneNumber = '916281810883'; // Add your recipient's phone number here
        var whatsappMessage = "Name: " + name + "%0AEmail: " + email + "%0AMessage: " + message;
        
        // Open WhatsApp with pre-filled message and recipient phone number
        window.open("https://wa.me/" + phoneNumber + "?text=" + whatsappMessage);
    });
});
