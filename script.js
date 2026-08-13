let cart = [];

function addToCart(itemName, price) {

    cart.push({
        name: itemName,
        price: price
    });

    updateCartSummary();
}


function updateCartSummary() {

    if (cart.length > 0) {

        const itemNames = cart.map(item => item.name).join(', ');

        const itemCount = cart.length;

        document.getElementById('cart-items').innerText =
            `Items: ${itemNames}`;

        document.getElementById('cart-count').innerText =
            `Total items: ${itemCount}`;

    } else {

        document.getElementById('cart-items').innerText =
            'No items in the cart';

        document.getElementById('cart-count').innerText =
            'Total items: 0';
    }
}


function clearCart() {

    cart = [];

    updateCartSummary();
}


function showSection(id) {

    const sections = [
        'Home',
        'Shop',
        'About',
        'Contact'
    ];

    sections.forEach(section => {

        const element = document.getElementById(section);

        if (element) {
            element.classList.add('hidden');
        }

    });

    const target = document.getElementById(id);

    if (target) {

        target.classList.remove('hidden');

        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


function handleSignUp() {

    const username =
        document.getElementById('username').value.trim();

    const email =
        document.getElementById('email').value.trim();

    const password =
        document.getElementById('password').value.trim();


    if (username && email && password) {

        document.getElementById('signup-page').style.display = 'none';

        document.getElementById('flower-shop-page').style.display = 'block';

    } else {

        alert('Please fill all the fields.');
    }
}
