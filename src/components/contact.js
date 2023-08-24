const contact = document.createElement('div');

contact.classList.add('contact-component');
contact.setAttribute('id', 'contact');

contact.innerHTML = `
<div class="contact-content">
    <p class="contact-title">Contact</p>
    <div class="contact-info">
        <div class="contact-info-left">
            <p class="contact-email">thecoffespot@gmail.com</p>
            <p class="contact-facebook">The Coffee Spot</p>
        </div>
        <div class="contact-info-right">
            <p class="contact-number">+56 9 4785 9232</p>
            <p class="contact-instagram">@thecoffeespot</p>
        </div>
    </div>
</div>`

export { contact };