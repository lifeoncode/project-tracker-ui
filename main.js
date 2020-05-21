
const [menu, open, close] = [document.querySelector('#menu'), document.querySelector('#menu-btn'), document.querySelector('#close-btn')];

window.addEventListener('DOMContentLoaded', init);

function init(e){


    open.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    

    function openMenu(){
        this.classList.add('hide');
        close.classList.remove('hide');

        menu.classList.remove('hide');
        menu.classList.add('show-menu');

        setTimeout(() => {
            menu.style.display = 'block';
            menu.classList.remove('show-menu');
        }, 500);
    }


    function closeMenu(){
        this.classList.add('hide');
        open.classList.remove('hide');

        menu.classList.add('hide-menu');
        setTimeout(() => {
            menu.classList.add('hide');
            menu.classList.remove('hide-menu');
        }, 500);
    }





const links = document.querySelectorAll('#menu li');
links.forEach(link => {
link.addEventListener('click', hide);
})
document.querySelector('#menu span').addEventListener('click', hide);


function hide(e){

close.classList.add('hide');
        open.classList.remove('hide');

        menu.classList.add('hide-menu');
        setTimeout(() => {
            menu.classList.add('hide');
            menu.classList.remove('hide-menu');
        }, 500);
}





    
    
    
}