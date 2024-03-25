
const contentDiv = document.querySelector(".content");

const getProducts = async()=>{
    try{
        const getProducts = await fetch("https://dummyjson.com/products");
        const getJson = await getProducts.json();
        return getJson.products
    }catch(error){
        console.log(error)
    }
}

getProducts().then(generateCard)

function generateCard(data) {
    let string = "";
    data.forEach((element) => {
      string += `<div class="card">
      <img src="${element.images[0]}" alt="" class="image"/>
      <p class="quote">${element.title}</p>
      <p class="author">${element.description}</p>
      <p class="price">${element.price}$</p>
    </div> `;
    });
    contentDiv.innerHTML = string;
  }