/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
/**@author Franklin da Silva Batista 
 * @email  frsbatist@gmail.com
 * @github https://github.com/franklyk
 * &copy; versite.click
*/
/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/

// Esconder header e reaparecer ao scroll
let navbar = document.querySelector('.header');
var lastScrollTop = 0;

window.addEventListener('scroll', function (e) {
    if (this.scrollY <= 200) {
        navbar.classList.remove('active');
        navbar.classList.remove('hide');
    } else {
        if (this.scrollY <= lastScrollTop) {
            if ((lastScrollTop - this.scrollY) >= 10) {

                navbar.classList.add('active');
                navbar.classList.remove('hide');
            } else {
                navbar.classList.remove('hide');
            }
        } else {
            if (lastScrollTop < 100) {
                navbar.classList.remove('hide');
            } else {
                navbar.classList.add('hide');

            }
        }
    }
    lastScrollTop = this.scrollY;
})
// Esconder header e reaparecer ao scroll

/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
// Debounce do Lodash
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Animar itens na tela 
const animeItems = document.querySelectorAll('[data-anime="scroll-item"]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
    animeItems.forEach(function (e) {
        if ((windowTop) >= e.offsetTop) {
            e.classList.add(animationClass);
        } else {
            e.classList.remove(animationClass);
        }
    })
}

if (animeItems.length){
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
        // console.log('sdfadfadfadfa')
    }, 200));
}

// Animar itens na tela 

/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/

