document.addEventListener("DOMContentLoaded", function() {
    const itemsList = document.getElementById('items-list');
    const cart = document.getElementById('cart');
    const totalContainer = document.getElementById('total'); // Agregamos referencia al contenedor del total
    let cartItems = [];
  
    // Agregar evento de click a cada producto
    itemsList.addEventListener('click', function(event) {
      if (event.target.closest('.item')) {
        const item = event.target.closest('.item');
        const itemId = item.querySelector('.item-details').dataset.id;
        const itemName = item.querySelector('.item-details').dataset.name;
        const itemPrice = parseFloat(item.querySelector('.item-details').dataset.price);
  
        addToCart(itemId, itemName, itemPrice);
      }
    });
  
    // Función para agregar un producto al carrito
    function addToCart(id, name, price) {
      const existingItem = cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartItems.push({ id, name, price, quantity: 1 });
      }
      renderCart();
    }
  
    // Función para renderizar el carrito
    function renderCart() {
      cart.innerHTML = '';
      let total = 0; // Inicializamos la variable total
  
      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cart.appendChild(itemElement);
  
        total += item.price * item.quantity; // Sumamos el precio de cada producto al total
      });
  
      // Mostramos el total en el contenedor correspondiente
      totalContainer.textContent = `Total: $${total.toFixed(2)}`;
    }
  });
  