let columns = document.querySelectorAll(".column");
let days = document.querySelectorAll(".day");
let amounts = document.querySelectorAll(".amount");
// ******
fetch("data.json")
.then(response => response.json())
.then(data => {
    let highestAmount = 0;
    data.forEach(d => {
        if (d.amount > highestAmount) highestAmount = d.amount
    })
    columns.forEach((column, index) => {
        column.style.height = `${data[index].amount * 3}%`
        column.addEventListener("mouseenter", _ => {
            column.appendChild(amounts[index])
            setTimeout(() => {
                amounts[index].classList.add("show")
            }, 0);
        })
        column.addEventListener("mouseleave", _ => {
            amounts[index].classList.remove("show")
            setTimeout(() => {
                column.removeChild(amounts[index])
            }, 200);
        })
    })
    days.forEach((day, index) => {
        day.textContent = data[index].day
    })
    amounts.forEach((amount, index) => {
        amount.textContent = `$${data[index].amount}`
        if (amount.textContent.slice(1) == highestAmount) {
            amount.parentElement.classList.add("highest")
        }
        amount.remove();
    })
})


