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
        const glider = new Glider(document.querySelector('.slider-content'), {
            // Mobile-first defaults
            slidesToShow: 1, //render cantidad
            slidesToScroll: 0,
            // rewind: true,
            dots: '.slider-pag',
            // exactWidth: true,
            scrollLock: true,
            arrows: {
                prev: '.slider-prev',
                next: '.slider-next'
            },
            responsive:[{

            }]
        });
        function sliderAuto(slider, miliseconds) {
            const slidesCount = slider.track.childElementCount;
            let slideTimeout = null;
            let nextIndex = 1;

            function slide() {
                slideTimeout = setTimeout(
                    function () {
                        if (nextIndex >= slidesCount) {
                            nextIndex = 0;
                        }
                        slider.scrollItem(nextIndex++);
                    },
                    miliseconds
                );
            }

            slider.ele.addEventListener('glider-animated', function () {
                window.clearInterval(slideTimeout);
                slide();
            });

            slide();
        }

        sliderAuto(glider, 3000)
    })

}



main()
