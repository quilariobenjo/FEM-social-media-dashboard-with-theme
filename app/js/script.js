const button = document.querySelector('#button');
const title = document.querySelectorAll('.title--text');
const bigBox = document.querySelectorAll('.social-big');
const smallBox = document.querySelectorAll('.overview-box')
const totalFollowers = document.querySelectorAll('.total-followers');
const body = document.querySelector('body');
const heading = document.querySelector('.heading');
const overviewNum = document.querySelectorAll('.overview-number');
button.addEventListener('change', e => {
    if(button.checked) {
        heading.style.backgroundColor = 'hsl(225, 100%, 98%)';
        body.style.backgroundColor = 'hsl(0, 0%, 100%)';
        title.style.color = 'hsl(230, 17%, 14%)';
        bigBox.forEach(e => {
            e.style.backgroundColor = 'hsl(227, 47%, 96%)';
        })
        smallBox.forEach(e => {
            e.style.backgroundColor = 'hsl(227, 47%, 96%)';
        })
        totalFollowers.forEach(e => {
            e.style.color = 'hsl(230, 17%, 14%)';
        })
        overviewNum.forEach(e => {
            e.style.color = 'hsl(230, 17%, 14%)';
        })
    
    
    } else {
        heading.style.backgroundColor = 'hsl(232, 19%, 15%)';
        body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        title.style.color = 'hsl(0, 0%, 100%)';
        bigBox.forEach(e => {
            e.style.backgroundColor = 'hsl(228, 28%, 20%)';
        })
        smallBox.forEach(e => {
            e.style.backgroundColor = 'hsl(228, 28%, 20%)';
       })
        totalFollowers.forEach(e => {
            e.style.color = 'hsl(0, 0%, 100%)';
        })
        overviewNum.forEach(e => {
            e.style.color = 'white';
        })
        
    }
})
