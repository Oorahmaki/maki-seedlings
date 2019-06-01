const grid = document.getElementById("grid");
const checkoutTitle = document.getElementById("checkoutTitle");
const basketItems = document.getElementById("basketItems");
const plants = [
  {
    name: "Echeveria",
    description: "A beginner friendly succulent",
    image: "images/echeveria.jpg",
    price: "4"
  },
  {
    name: "Sansevieria",
    description: "A drought tolerant shade lover",
    image: "images/snakeplant.jpg",
    price: "7"
  },
  {
    name: "Boston Fern",
    description: "Perfect for humid dappled shade",
    image: "images/fern.jpg",
    price: "5"
  },
  {
    name: "Peace Lily",
    description: "Shade tolerant and easy to care for",
    image: "images/peacelily.jpg",
    price: "6"
  },
  {
    name: "Peperomia",
    description: "Indirect light and occasional watering",
    image: "images/peperomia.jpg",
    price: "3"
  }
];
let total = 0;
const basket = [];

function priceDisplay(price) {
  //   for (a = 0; a < plants.length; a++) {
  return "£" + price;
}

//data = object from array. Contain info needed to create card //
function createCard(data) {
  const card = document.createElement("div");
  const name = document.createElement("h3");
  const description = document.createElement("p");
  const image = document.createElement("img");
  const price = document.createElement("p");
  const buy = document.createElement("button");

  name.classList.add("name");
  description.classList.add("description");
  card.classList.add("cardStyle");
  image.classList.add("productImage");
  price.classList.add("price");
  buy.classList.add("buy");

  name.textContent = data.name;
  description.textContent = data.description;
  image.src = data.image;
  price.textContent = priceDisplay(data.price);
  buy.textContent = "+";

  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(image);
  card.appendChild(buy);
  card.appendChild(description);
  grid.appendChild(card);

  buy.addEventListener("click", function() {
    total = total + parseFloat(data.price);
    checkoutTitle.innerHTML = "Basket Total: £" + total;
    basket.push(data.name);
    itemNo = basket.length;
    basketItems.innerHTML = itemNo;
  });
}

function createCards() {
  for (i = 0; i < plants.length; i++) {
    createCard(plants[i]);
  }
}

createCards();
