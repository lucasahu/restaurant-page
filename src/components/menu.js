const menu = document.createElement('div');

menu.classList.add('menu-component');

menu.innerHTML = 
`<div class="menu">
    <h1 class="menu-title">Menu</h1>
    <div class="menu-content">
        <p class="item-title">Items</p>
        <div class="item">
            <p class="item-name">Espresso</p>
            <p class="item-description">Intense and invigorating, our Espresso captivates with its bold flavor and rich aroma – a pure coffee essence in every sip.</p>
        </div>
        <div class="item">
            <p class="item-name">Latte</p>
            <p class="item-description">Luxurious espresso meets velvety steamed milk, crafting a smooth and harmonious Latte that's both comforting and bold.</p>
        </div>
        <div class="item">
            <p class="item-name">Capuccino</p>
            <p class="item-description">A classic blend of espresso, frothy milk, and cocoa dusting, our Cappuccino offers a balanced and delightful Italian tradition.</p>
        </div>
        <div class="item">
            <p class="item-name">Mocha</p>
            <p class="item-description">Indulge in the perfect union of espresso and premium chocolate, crowned with whipped cream – a heavenly Mocha experience.</p>
        </div>
        <div class="item">
            <p class="item-name">Frappe</p>
            <p class="item-description">A creative fusion of chilled coffee and ice, our Frappe is a refreshing escape that redefines your coffee adventure.</p>
        </div>
        <div class="item">
            <p class="item-name">Iced Matcha Latte</p>
            <p class="item-description">Revitalize with the serene harmony of Iced Matcha, where vibrant green tea meets the cool embrace of ice and milk for pure refreshment.</p>
        </div>
    </div>
</div>`

export { menu };