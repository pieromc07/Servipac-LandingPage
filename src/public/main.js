
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Contact from "./Components/Contact.js";
import Team from "./Components/Team.js";
import Banner from './Components/Banner.js'
// import List from './Components/List.js' 
// import Button from './Components/Button.js' 

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
            rewind: true,
            dots: '.slider-pag',
            arrows: {
                prev: '.slider-prev',
                next: '.slider-next'
            },
            draggable: true,
            responsive:[{
                // screens greater than >= 700px
                breakpoint: 700,
                settings:{
                    slidesToShow: 2,
                }
            },{
                // screens greater than >= 867px
                breakpoint: 867,
                settings:{
                    slidesToShow: 3,
                }
            },{
                // screens greater than >= 1100px
                breakpoint: 1100,
                settings:{
                    slidesToShow: 4,
                }
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
    banner.innerHTML=Banner()
    /*footer.innerHTML = Button({}); */
}



main()
