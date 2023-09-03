function showProductDetails(productId) {
    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = `
      <div class="product-details-content">
        <h2>Product ${productId} Details</h2>
        <p>Product description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: $10.99</p>
        <button class="close-details-btn" onclick="closeProductDetails()">Close</button>
      </div>
    `;
  
    productDetails.style.display = 'block';
  }
  
  function closeProductDetails() {
    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = '';
    productDetails.style.display = 'none';
  }
  