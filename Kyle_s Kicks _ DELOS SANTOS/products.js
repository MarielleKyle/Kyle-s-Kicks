document.addEventListener("DOMContentLoaded", function() {
	//Function to update product details based on the product id
	function updateProductDetails(productId) {
		//Update product details based on the product id
		const productImage = document.getElementById("product-image");
		const productName = document.getElementById("product-name");
		const productPrice = document.getElementById("product-price");
		const productDescription = document.getElementById("product-description");
		
		//Update the poduct details based on the product id
		switch (productId){
			case "travisscott":
				productImage.src = "travisscott.png";
				productName.textContent = "Air Jordan 1 Low x Travis ScottMedium";
				productPrice.textContent = "₱8,395";
				break;
				
			case "red cement":
				productImage.src = "red cement.png";
				productName.textContent = "Air Jordan 4 Red Cement";
				productPrice.textContent = "₱7545";
				break;	
				
			case "chicago":
				productImage.src = "chicago.jpg";
				productName.textContent = "Air Jordan 1 Chicago";
				productPrice.textContent = "₱9895";
				break;	
			
			case "panda":
				productImage.src = "panda.png";
				productName.textContent = "Dunks Low Panda";
				productPrice.textContent = "₱5400";
				break;	
				
			case "cherry":
				productImage.src = "cherry.png";
				productName.textContent = "Jordan 12 Cherry";
				productPrice.textContent = "₱10400";
				break;	
				
			case "j1 blue":
				productImage.src = "j1 blue.png";
				productName.textContent = "Air jordan 1 high University Blue";
				productPrice.textContent = "₱9895";
				break;
				
			case "j1 green":
				productImage.src = "j1 green.png";
				productName.textContent = "Air Jordan 1 High Black and Lucky Green";
				productPrice.textContent = "₱9895";
				break;
				
			case "royal blue":
				productImage.src = "royal blue.png";
				productName.textContent = "Air Jordan 1 High OG Royal Re-Imagined";
				productPrice.textContent = "₱7895";
				break;
				
			case "black toe":
				productImage.src = "black toe.png";
				productName.textContent = "Air Jordan 1 Low Black Toe";
				productPrice.textContent = "₱7895";
				break;
				
			case "wheat":
				productImage.src = "wheat.png";
				productName.textContent = "Jordan 13 Wheat";
				productPrice.textContent = "₱11000";
				break;
				
			case "air":
				productImage.src = "air.png";
				productName.textContent = "Air More Uptempo Low x AMBUSH Black and White";
				productPrice.textContent = "₱10295";
				break;
				
			case "j12":
				productImage.src = "j12.png";
				productName.textContent = "Women's Air Jordan 12 x A Ma Maniére White and Burgundy Crush";
				productPrice.textContent = "₱11000";
				break;
				
			case "sb purple":
				productImage.src = "sb purple.png";
				productName.textContent = "Nike SB Dunk Low Court Purple";
				productPrice.textContent = "₱6195";
				break;
				
			case "medium gray":
				productImage.src = "medium gray.png";
				productName.textContent = "Women's Air Jordan 1 Medium Grey";
				productPrice.textContent = "₱6195";
				break;
				
			case "j1 b&w":
				productImage.src = "j1 b&w.jpg";
				productName.textContent = "Air Jordan 1 High '85 Black White";
				productPrice.textContent = "₱10895";
				break;
				
			case "Multicolour":
				productImage.src = "Multicolour.jpg";
				productName.textContent = "Air Force 1 x UNDEFEATED Multicolour";
				productPrice.textContent = "₱8395";
				break;
				
			case "dunks red":
				productImage.src = "dunks red.png";
				productName.textContent = "Dunks Low White and University Red";
				productPrice.textContent = "₱495";
				break;
				
			case "af1 blue":
				productImage.src = "af1 blue.jpg";
				productName.textContent = "Air Force 1 Low Colour of the Month";
				productPrice.textContent = "₱6895";
				break;
				
			case "low purple":
				productImage.src = "low purple.jpg";
				productName.textContent = "Air Jordan 1 Low Golf Court Purple";
				productPrice.textContent = "₱8395";
				break;
				
			case "j1 orange":
				productImage.src = "j1 orange.jpg";
				productName.textContent = "Women's Air Jordan 1 Starfish";
				productPrice.textContent = "₱8595";
				break;
				
			case "taxi":
				productImage.src = "taxi.jpg";
				productName.textContent = "Air Jordan 1 Taxi";
				productPrice.textContent = "₱9000";
				break;
				
			case "j1 varsity red":
				productImage.src = "j1 varsity red.jpg";
				productName.textContent = "Air Jordan 1 Varsity Red";
				productPrice.textContent = "₱9000";
				break;
				
			case "j3 red":
				productImage.src = "j3 red.jpg";
				productName.textContent = "Air Jordan 3 Fire Red";
				productPrice.textContent = "₱11000";
				break;
				
			case "taupe":
				productImage.src = "taupe.jpg";
				productName.textContent = "Air Jordan 4 Taupe Haze";
				productPrice.textContent = "₱9500";
				break;
				
			default:
				//Handle unknown product IDs
				break;
		}
		const addToCartButton = document.getElementById("add-to-cart-button");
		addToCartButton.addEventListener("click", addToCart);
		
	}
	
	// Function to handle adding a product to the cart
  function addToCart() {
    // Get the product details from the page
    const productId = getQueryParam("product");
    const productName = document.getElementById("product-name").textContent;
    const productPriceString = document.getElementById("product-price").textContent;
    const quantity = document.getElementById('quantity-input').value;
    const productImageSrc = document.getElementById("product-image").src;

    // Parse the product price as a float
    const productPrice = parseFloat(productPriceString.replace("₱", ""));

    // Create a new cart item object
    const cartItem = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: parseInt(quantity),
      imageSrc: productImageSrc,
    };

    // Check if the cart array already exists in local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment the quantity
      cart[existingProductIndex].quantity++;
    } else {
      // If the product is not in the cart, add it
      cart.push(cartItem);
    }

    // Update the local storage with the modified cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, you can redirect the user to the cart page or show a confirmation message
    alert("Product added to cart!");
  }

  // Function to handle product clicks
  function handleProductClick(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Get the product ID from the data attribute of the clicked element
    const productId = event.target.dataset.productId;

    // Update the URL with the selected product ID
    history.pushState({}, null, `product details.html?product=${productId}`);

    // Update the product details on the page
    updateProductDetails(productId);
  }

  // Attach click event listeners to each product item
  const productItems = document.querySelectorAll(".col-4 img");
  productItems.forEach((item) => {
    item.addEventListener("click", handleProductClick);
  });

  // Call the function to update product details based on the current URL
  const currentProductId = new URLSearchParams(window.location.search).get(
    "product"
  );
  if (currentProductId) {
    updateProductDetails(currentProductId);
  }
});

// Function to get query parameters from the URL
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
