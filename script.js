// const key = '80a0e3da'

const name = document.querySelector("h2")
const capital = document.querySelector(".capital")
const input = document.querySelector("input")
const btn = document.querySelector("button")

fetch(`https://countryapi.io/api/all?apikey=hFqqqZuAahhSp4WYJHxGjXrIzPHpUWgpLjh0z3nY`)

.then(res => res.json())
.then(data => Object.keys(data))
.then(array => {
    const randomIndex = Math
})
