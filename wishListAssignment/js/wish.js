const wishList = [];
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const list = document.getElementById("wishList");
const finalTotal = document.getElementById("total");

function render() {
  list.innerHTML = "";

  wishList.forEach((wishItem, index) => {
    const listItem = document.createElement("li");
    listItem.className = "item";

    const info = document.createElement("div");
    info.className = "info";

    const itemName = document.createElement("div");
    itemName.className = "name";
    itemName.textContent = wishItem.name;

    const itemPrice = document.createElement("div");
    itemPrice.className = "price";
    itemPrice.textContent = `$${wishItem.price.toFixed(2)}`;

    info.appendChild(itemName);
    info.appendChild(itemPrice);

    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const editButton = document.createElement("button");
    editButton.className = "editBtn";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", () => {
      const newPrice = prompt("Enter a new price:", wishItem.price);

      if (newPrice !== null && newPrice !== "") {
        const price = Number(newPrice);

        if (price >= 0) {
          wishList[index].price = price;

          render();
        } else {
          alert("Please enter a valid price.");
        }
      }
    });

    const removeButton = document.createElement("button");
    removeButton.className = "removeBtn";
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      wishList.splice(index, 1);
      render();
    });

    buttons.appendChild(editButton);
    buttons.appendChild(removeButton);
    listItem.appendChild(info);
    listItem.appendChild(buttons);
    list.appendChild(listItem);
  });

  let total = 0;

  wishList.forEach((wishItem) => {
    total = total + wishItem.price;
  });
  finalTotal.textContent = `Total: $${total.toFixed(2)}`;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  wishList.push({
    name: name,
    price: price,
  });
  render();
  form.reset();
  nameInput.focus();
});
render();
