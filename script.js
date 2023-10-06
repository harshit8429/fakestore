const apiUrl = 'https://fakestoreapi.com/products'; 
function fetchProducts() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayProducts(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayProducts(products) {
  const tableBody = document.querySelector('#productTable tbody');

  products.forEach(product => {
    const row = tableBody.insertRow();

    const cellId = row.insertCell(0);
    cellId.innerText = product.id;

    const cellTitle = row.insertCell(1);
    cellTitle.innerText = product.title;

    const cellPrice = row.insertCell(2);
    cellPrice.innerText = product.price;

    const cellDescription = row.insertCell(3);
    cellDescription.innerText = product.description;

    const cellCategory = row.insertCell(4);
    cellCategory.innerText = product.category;

    const cellImage = row.insertCell(5);
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = 'Product Image';
    cellImage.appendChild(image);

    const cellRating = row.insertCell(6);
    cellRating.innerText = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
  });
}


fetchProducts();
