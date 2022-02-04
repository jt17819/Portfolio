const lightMode = () => {
    console.log('light')
    let array = []
    array.push(document.getElementById('body'))
    array.push(...document.querySelectorAll('div.card'))
    array.push(document.getElementById('title'))
    // document.getElementById('body').classList.remove('dark')
    // document.getElementById('body').classList.add('light')
    // const cards = document.querySelectorAll('div.projectCard')
    array.forEach((card) => {
        card.classList.add('light');
        card.classList.remove('dark')       
    })
}

const darkMode = () => {
    console.log('dark')
    let array = []
    array.push(document.getElementById('body'))
    array.push(...document.querySelectorAll('div.card'))
    array.push(document.getElementById('title'))
    // document.getElementById('body').classList.remove('light')
    // document.getElementById('body').classList.add('dark')
    // const cards = document.querySelectorAll('div.projectCard')
    array.forEach((card) => {
        card.classList.add('dark');
        card.classList.remove('light')       
    })
}

document.getElementById('lightBtn').addEventListener('click', lightMode)
document.getElementById('darkBtn').addEventListener('click', darkMode)
