let resultes = document.getElementById('all-product');
const filteredProduct = document.getElementById('filtered-product')
const searchBox = document.querySelector(".searchbox")
const showError = document.getElementById('error')

   fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    let prodInner = '';

    data.map((value, index) => {
      prodInner += `
        <div class="product-item">
          <div class="product-category">${value.category}</div>
          <div class="product-image"><img src="${value.image}" alt="${value.title}"></div>
          <div class="product-title">${value.title}</div>
          <div class="product-description"> ${value.description.slice(0,120)}</div>
          <div class="product-price">price :$${value.price}</div>
        </div>

        `        
        resultes.innerHTML = prodInner;

        ; 

    });
    const filteredProduct = document.getElementById('filtered-product')
    const searchBox = document.querySelector(".searchbox")
    const showError = document.getElementById('error')

      const filterProductList =(searchvalue)=> data.filter((product)=>product.category.toLowerCase().includes(searchvalue.toLowerCase()))


        searchBox.oninput=(e)=> {
          let searchValue = e.target.value
          const filteredArray = filterProductList(searchValue)
          console.log(filteredArray)
          filteredProduct.innerHTML =""
          showError.textContent =""

          if (searchValue.length > 0 && filteredArray.length > 0) {
              console.log('show filtered movies')
              showError.textContent = `Showing ${filteredArray.length} results for "${searchValue}"`
              resultes.classList.remove('all-product')
              resultes.classList.add('remove-product')
          }  
    console.log(data);
  }});








  