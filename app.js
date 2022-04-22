const firstName = document.querySelector('#fullName')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const myForm = document.querySelector('.myform')
const btn =document.querySelector('.btn')
myForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    if(firstName.value == '') {
        alert('This is required')
    }
    if(emailInput.value == '') {
        alert('This is required')
    }

    if(phoneInput == '') {
        alert('This is required')
    } else {
        console.log(firstName.value, emailInput.value, phoneInput.value)
    }
})