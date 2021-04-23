// This code snippet is a slightly customized version of that provided by Code Institute on Email JS
const contactForm = document.querySelector("#contact-form")

function sendMail(event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 1000 | 0
    emailjs.sendForm("contact_service", "spaceambush_form", this)
    .then(function() 
    {
        console.log('SUCCESS!');
        // confirmation();
                    }, 
    function(error) 
    {
        console.log('FAILED...', error);
            });
    return false;
}

function confirmation() {
    
}

// Event Listeners
contactForm.addEventListener("submit", sendMail)