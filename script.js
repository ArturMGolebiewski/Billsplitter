const price = document.querySelector("#price")
const peopleNumber = document.querySelector("#people")
const tipAmount = document.querySelector("#tip")
const errorParagraph = document.querySelector(".error")
const countBtn = document.querySelector(".count")
const costInfo = document.querySelector(".cost-info")
const span = document.querySelector(".cost")


const checkForm = () => {
    
    if (price.value == '' || peopleNumber.value == '' || tipAmount.value == '') {
        errorParagraph.textContent = "You need to fill in every field!"
        costInfo.style.display = "none"
    } else {
        errorParagraph.textContent = ""
        countBill()
    }

}

const countBill = () => {
    const newPrice = parseFloat(price.value)
    const newPeople = parseInt(peopleNumber.value)
    const newTip = parseFloat(tip.value)
    const sum = (newPrice + (newPrice * newTip)) / newPeople

    span.textContent = sum.toFixed(2)
    costInfo.style.display = 'block'
}

countBtn.addEventListener('click', showBill)