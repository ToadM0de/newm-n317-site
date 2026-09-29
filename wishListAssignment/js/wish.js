//creates empty array
const wishList = [];
// declaring variables
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const list = document.getElementById("wishList");
const finalTotal = document.getElementById("total");

// puts wishlist on page, creates buttons, and calculates total
function render() {
  // clears list
  list.innerHTML = "";

  //goes through each item on the wishlist
  wishList.forEach((wishItem, index) => {
    //creates item on wishlist
    const listItem = document.createElement("li");
    // gives each item the class name "item"
    listItem.className = "item";

    // creates a div with the class name "info" for item name and price
    const info = document.createElement("div");
    info.className = "info";

    // creates a div with the class name "name" for each item's name to go in
    const itemName = document.createElement("div");
    itemName.className = "name";
    itemName.textContent = wishItem.name;

    // creates a div with the class name "price" for each item's price to go in
    const itemPrice = document.createElement("div");
    itemPrice.className = "price";
    //makes sure prices dont go more than 2 past the decimal
    itemPrice.textContent = `$${wishItem.price.toFixed(2)}`;

    //puts the item's name and price inside the info div
    info.appendChild(itemName);
    info.appendChild(itemPrice);

    // creates buttons div
    const buttons = document.createElement("div");
    buttons.className = "buttons";

    // creates edit button
    const editButton = document.createElement("button");
    editButton.className = "editBtn";
    editButton.textContent = "Edit";

    //when user clicks edit button this runs
    editButton.addEventListener("click", () => {
      // asks user to edit price
      const newPrice = prompt("Enter a new price:", wishItem.price);

      //   checks if the user cancled or not or if they left the box empty or not
      if (newPrice !== null && newPrice !== "") {
        // turns whatever the user put in into a number
        const price = Number(newPrice);

        // checks if the price is a negative or not
        if (price >= 0) {
          // if price is above a neagtive, change it
          wishList[index].price = price;

          //   updates
          render();
        } else {
          // if number is a negative, tell user to enter a valid price
          alert("Please enter a valid price.");
        }
      }
    });

    // creates remove button
    const removeButton = document.createElement("button");
    removeButton.className = "removeBtn";
    removeButton.textContent = "Remove";

    // when user clicks remove button this function runs
    removeButton.addEventListener("click", () => {
      // removes item from array
      wishList.splice(index, 1);
      //   updates
      render();
    });

    // puts the buttons into the buttons container
    buttons.appendChild(editButton);
    buttons.appendChild(removeButton);
    // puts info and buttons into the list
    listItem.appendChild(info);
    listItem.appendChild(buttons);
    // puts list on webpage
    list.appendChild(listItem);
  });

  //   total starts at 0
  let total = 0;

  //   goes through each list item and adds the prices to determine total
  wishList.forEach((wishItem) => {
    total = total + wishItem.price;
  });
  // shows final total on webpage and makes sure it doesnt go past 2 decimal points
  finalTotal.textContent = `Total: $${total.toFixed(2)}`;
}
// when user clicks submit the code runs
form.addEventListener("submit", (event) => {
  // stops page from refreshing
  event.preventDefault();
  //grabs name and price from what the user inputted
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  //   add item's name and price to wishlist
  wishList.push({
    name: name,
    price: price,
  });
  //   update
  render();
  //   clears the form for next submission
  form.reset();
});
render();
