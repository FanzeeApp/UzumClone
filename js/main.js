let cardContainer = document.getElementById("cardContainer");

async function fetchApi() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let produkt = await res.json();
    cardQosh(produkt);
  } catch (error) {
    console.error("Ma'lumot olishda xatolik:", error);
  }
}

function cardQosh(produkt) {
  produkt.forEach((product) => {
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    card.appendChild(img);
    let title = document.createElement("h2");
    title.textContent = product.title;
    card.appendChild(title);

    let malumot = document.createElement("p");
    malumot.className = "description";
    malumot.textContent = product.description;
    card.appendChild(malumot);

    let price = document.createElement("p");
    price.className = "price";
    price.textContent = `${product.price} $`;
    card.appendChild(price);
    if (product.rating.count) {
      let oldPrice = document.createElement("p");
      oldPrice.className = "old-price";
      oldPrice.textContent = `${product.rating.count} $`;
      card.appendChild(oldPrice);
    }

    let button = document.createElement("div");
    button.className = "button";
    button.textContent = "Sotib olish";
    card.appendChild(button);

    cardContainer.appendChild(card);
  });
}

fetchApi();
