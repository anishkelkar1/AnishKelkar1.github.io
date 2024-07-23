document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    
    this.reset();
});
