const loginInput = document.querySelector("#before-login input")
const loginBtn = document.querySelector('#before-login button')
const afterlogin = document.querySelector("#after-login")
const greeting = document.querySelector("#greeting")
const login = document.querySelector('#login')


function start (event) {
  event.preventDefault()
  const username = loginInput.value
  if (username) {
    login.hidden = "True"
    afterlogin.hidden = false
    greeting.innerText = `안녕하세요! ${username}님`
    }  
}



loginBtn.addEventListener('click', start)