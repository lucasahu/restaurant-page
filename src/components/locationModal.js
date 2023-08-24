const locationModal = document.createElement('div');

locationModal.classList.add('location-modal');

locationModal.innerHTML = `
<div class="location-title">
    <p>Location</p>
</div>
<div class="location-info">
    <p class="street">📍 123 Blossom Lane</p>
    <p class="city">Willowbrook, Serenityville</p>
    <p class="county">Mystic County, MV5678</p>
</div>`

export { locationModal };