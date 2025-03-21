document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.getElementById('cart-icon');
  const cartPanel = document.getElementById('cart-panel');
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');
  const closeCartButton = document.getElementById('close-cart');
  const checkoutModal = document.getElementById('checkout-modal');
  const closeModalButton = document.getElementById('close-modal');
  const checkoutForm = document.getElementById('checkout-form');
  const clearCartButton = document.getElementById('clear-cart');

  // 模拟购物车数据存储
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // 更新购物车 UI
  function updateCartUI() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.classList.add('flex', 'items-center', 'justify-between', 'mb-4');
      li.innerHTML = `
        <div>
          <p class="font-bold">${item.name}</p>
          <p class="text-sm text-gray-500">单价: ¥${item.price.toFixed(2)}</p>
          <div class="flex items-center">
            <button class="decrease-quantity text-gray-500 hover:text-gray-700" data-index="${index}">-</button>
            <span class="mx-2">${item.quantity}</span>
            <button class="increase-quantity text-gray-500 hover:text-gray-700" data-index="${index}">+</button>
          </div>
        </div>
        <p class="font-bold">¥${(item.price * item.quantity).toFixed(2)}</p>
      `;
      cartItems.appendChild(li);
      total += item.price * item.quantity;
    });

    cartTotal.textContent = `合计: ¥${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // 添加商品到购物车
  function addItemToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(item);
    }
    updateCartUI();
  }

  // 点击“加入购物车”按钮后，购物车弹出
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      const button = e.target;
      const item = {
        id: button.dataset.itemId,
        name: button.dataset.itemName,
        price: parseFloat(button.dataset.itemPrice),
        quantity: 1,
      };
      addItemToCart(item);

      // 显示购物车
      cartPanel.classList.remove('translate-x-full');
    }
  });

  // 点击购物车图标后，购物车弹出
  cartIcon.addEventListener('click', () => {
    cartPanel.classList.remove('translate-x-full');
  });

  // 点击关闭按钮，隐藏购物车
  closeCartButton.addEventListener('click', () => {
    cartPanel.classList.add('translate-x-full');
  });

  // 点击“立即结算”按钮，显示模态框
  checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('购物车为空，请先添加商品！');
      return;
    }
    checkoutModal.classList.remove('hidden');
  });

  // 点击模态框的关闭按钮，隐藏模态框
  closeModalButton.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
  });

  // 提交模态框表单
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(checkoutForm);
    const userInfo = {
      name: formData.get("name"),
      address: formData.get("address"),
      phone: formData.get("phone"),
    };

    const orderData = {
      contact: userInfo,
      cart: cart, // 当前购物车内容
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0), // 计算总价
    };

    console.log("订单数据：", orderData); // 调试信息

    // 将订单数据存储到 LocalStorage
    localStorage.setItem("currentOrder", JSON.stringify(orderData));
    console.log("订单数据已存储到 LocalStorage：", JSON.parse(localStorage.getItem("currentOrder")));

    // 跳转到 /payment 页面
    setTimeout(() => {
      window.location.href = "/payment";
    }, 100);
  });

  // 清空购物车
  clearCartButton.addEventListener('click', () => {
    if (confirm('确定要清空购物车吗？')) {
      cart = [];
      updateCartUI();
    }
  });

  // 绑定数量增减事件
  cartItems.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains('increase-quantity')) {
      cart[index].quantity++;
      updateCartUI();
    } else if (e.target.classList.contains('decrease-quantity')) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
      updateCartUI();
    }
  });

  // 初始化购物车界面
  updateCartUI();
});