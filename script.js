const prices = document.querySelectorAll(".prices")
let grandTotal = 0;

prices.forEach((price) => {
    grandTotal += Number(price.innerHTML)
})

const newRow = document.createElement("tr")

const attribute = document.createElement("td")
attribute.textContent = "grandTotal"
attribute.classList = ".attributes"

const element = document.createElement("td")
element.textContent = grandTotal
element.classList = ".prices"

newRow.appendChild(attribute)
newRow.appendChild(element)

const table = document.querySelector(".tableClass");
table.appendChild(newRow);
