import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Contact from "./Components/Contact.js";
import Team from "./Components/Team.js";

const header = null || document.getElementById('Header');
const banner = null || document.getElementById('Banner');
const team = null || document.getElementById('Team');
const contact = null || document.getElementById('Contact');
const footer = null || document.getElementById('Footer');

const main = async () => {
    header.innerHTML = Header();
    var btnOpenPopup = document.getElementById('btn-open-popup')
    btnOpenPopup.addEventListener('click', () => {
        console.log("toogle")
        header.classList.toggle('active');
    })
    team.innerHTML = Team();
    contact.innerHTML = Contact();
    footer.innerHTML = Footer();

    window.addEventListener('load', () => {
        new Glider(document.querySelector('.slider-content'), {
            // Mobile-first defaults
            slidesToShow: 1,
            rewind:true,
            dots: '.slider-pag',
            arrows: {
                prev: '.slider-prev',
                next: '.slider-next'
            },
        });
    })

}



main()
