
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    console.log(location)
    messageOne.textContent = 'Loading...'
    
    fetch('http://localhost:3000/weather?address='+location).then((resp) => {
        resp.json().then((data) => {
           messageOne.textContent = data.response
        })
    })
})