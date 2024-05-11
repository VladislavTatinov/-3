// Array of product objects with image URLs
// Array of product objects with image URLs
const products = [
    { name: 'Nvidia GeForce RTX 3080', imageUrl: 'rtx3080.png', price: 54000 },
    { name: 'AMD RX 6800 XT', imageUrl: 'rx6800xt.png', price: 22000 },
    { name: 'Intel CORE i9', imageUrl: 'intelxe.png', price: 19000 },
    { name: 'Nvidia GTX 1660 Ti', imageUrl: 'gtx1660ti.png', price: 20000 },
    { name: 'AMD Radeon Rx 570', imageUrl: 'RadeonRx570Amd.png', price: 9000 },
    { name: 'Nvidia GTX 1060', imageUrl: 'GTX 1060.png', price: 8200 },
    { name: 'AMD RX 6600 XT', imageUrl: 'rx6600xt.png', price: 30000 },
    { name: 'Intel Core i3', imageUrl: 'IntelCorei3.png' , price: 14000},
    { name: 'Nvidia GeForce RTX 2080', imageUrl: 'RTX2080.png', price: 34000},
    { name: 'Intel Core i7', imageUrl: 'IntelCorei7.png', price: 17500 }
    
];

// Function to dynamically load product images and buttons
function loadProducts() {
    const productsSection = document.getElementById('products-section');
    const productsSection2 = document.getElementById('products-section-2');
    
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        
        const productImage = document.createElement('img');
        productImage.src = `images/${product.imageUrl}`;
        productImage.alt = product.name;
        
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Купить'; // Set button text
        
        // Event listener for button click
        buyButton.addEventListener('click', function() {
            // alert(`Вы купили ${product.name}!`); // Example action on button click
        });
        
        productDiv.appendChild(productName);
        productDiv.appendChild(productImage);
        productDiv.appendChild(buyButton); // Append button to product div
        
        if (index < 5) {
            productsSection.appendChild(productDiv); // Add first 5 products to the first row
        } else {
            productsSection2.appendChild(productDiv); // Add next 5 products to the second row
        }
    });
}

// Функция фильтрации продуктов по производителю
function filterProducts(manufacturer) {
    const filteredProducts = products.filter(product => product.name.includes(manufacturer));
    renderProducts(filteredProducts);
}

// Функция сброса фильтра
function resetFilter() {
    renderProducts(products);
}

// Функция отображения продуктов
function renderProducts(productsToShow) {
    const productsSection1 = document.getElementById('products-section');
    const productsSection2 = document.getElementById('products-section-2');
    // Удаляем все продукты из обоих разделов
    productsSection1.innerHTML = '';
    productsSection2.innerHTML = '';

    productsToShow.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productImage = document.createElement('img');
        productImage.src = `images/${product.imageUrl}`;
        productImage.alt = product.name;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Купить';
        buyButton.addEventListener('click', () => buyProduct(product));

        productDiv.appendChild(productName);
        productDiv.appendChild(productImage);
        productDiv.appendChild(buyButton);

        // Распределяем продукты по разным секциям в зависимости от индекса
        if (index < 5) {
            productsSection1.appendChild(productDiv);
        } else {
            productsSection2.appendChild(productDiv);
        }
    });
}

// Вызываем функцию загрузки продуктов при загрузке страницы
window.onload = function() {
    renderProducts(products);
};



// Объект корзины товаров
const cart = [];

// Функция добавления товара в корзину
function addToCart(product) {
    cart.push(product);
    renderCart();
}

// Функция отображения корзины
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Очищаем предыдущий контент корзины

    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Цена: ${product.price} руб.`; // Добавляем цену товара
        cartItems.appendChild(li);
    });
    updateTotalPrice(); // Вызываем функцию для обновления общей стоимости
}



// Функция для обработки нажатия кнопки "Купить"
function buyProduct(product) {
    addToCart(product);
    updateTotalPrice(); // Обновляем общую стоимость после добавления товара
}
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    totalPriceElement.textContent = totalPrice; // Обновляем общую стоимость
}


// Вызываем функцию загрузки продуктов и настройки кнопок при загрузке страницы
window.onload = function() {
    loadProducts();
    setupButtons();
};
// Функция фильтрации продуктов по производителю
function filterProducts(manufacturer) {
    const filteredProducts = products.filter(product => {
        // Проверяем, включает ли название продукта указанного производителя
        return product.name.toLowerCase().includes(manufacturer.toLowerCase());
    });

    // Передаем отфильтрованные продукты для отображения
    renderProducts(filteredProducts);
}


// JavaScript to add rotation class to the logo
const nvidiaLogo = document.querySelector('.nvidia-logo');
nvidiaLogo.classList.add('rotate');



// Call the function to load products when the page loads
window.onload = loadProducts;
