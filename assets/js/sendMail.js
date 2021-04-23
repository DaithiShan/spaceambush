// This code snippet is a slightly customized version of that provided by Code Institute on Email JS
const contactForm = document.querySelector("#contact-form")

function sendMail(event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 1000 | 0
    emailjs.sendForm("contact_service", "spaceambush_form", this)
    .then(function() 
    {
        console.log('SUCCESS!');
        alert(`Thank you for your email! We'll be in touch soon.`);
    },
    function(error) 
    {
        console.log('FAILED...', error);
        alert(`Unfortunately your email didn't send correctly! Here is the error message: `, error);
            });
    return false;
}

// Event Listeners
contactForm.addEventListener("submit", sendMail)