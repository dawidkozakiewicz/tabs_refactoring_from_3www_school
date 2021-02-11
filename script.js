document.querySelector("#green").style.display = "block"
document.querySelector(".green").style.backgroundColor = "green"

const tablinks = document.querySelectorAll('.tablink')
const tabcontent = document.querySelectorAll('.tabcontent')

tablinks.forEach((tab) => {
    tab.addEventListener('click', () => {

        tablinks.forEach((x) => {
            x.style.backgroundColor = ""
        })

        tabcontent.forEach((x) => {
            x.style.display = "none"
        })

        const id = tab.classList[1]

        document.querySelector(`#${id}`).style.display = "block";
        document.querySelector(`.${id}`).style.backgroundColor = id
    })
})