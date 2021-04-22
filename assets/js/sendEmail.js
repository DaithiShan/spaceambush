// This code snippet is directly from The Code Institute Module on Email JS

function sendMail(contactForm) {
    emailjs.send("Gmail", "spaceambush101", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    return false;
}