const colors = ['red', 'blue', 'green', 'pink', 'white', 'grey', 'orange']

const blogWithBtn = document.getElementById('blogWithBtn');

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', function() {
    const randomColor = randomC();

    document.getElementById('blogWithBtn').style.borderColor = colors[randomColor]
})


randomC = () => {
    return Math.floor(Math.random() * colors.length)   
}