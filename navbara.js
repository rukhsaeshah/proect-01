// search btn 
const input = document.querySelector('input#info');
     const showInput = document.querySelector('button#showInfo');
     
     showInput.addEventListener('click', () => {
        input.classList.toggle('active')
     })
     