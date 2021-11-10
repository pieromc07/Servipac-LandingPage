
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Contact from "./Components/Contact.js";
import Team from "./Components/Team.js";
import Banner from './Components/Banner.js';
import AboutUs from './Components/AboutUs.js';
import {Services} from './Components/Services.js';
// import List from './Components/List.js' 
// import Button from './Components/Button.js' 

const header = null || document.getElementById('Header');
const banner = null || document.getElementById('Banner');
const team = null || document.getElementById('Team');
const contact = null || document.getElementById('Contact');
const footer = null || document.getElementById('Footer');
const aboutUs = null || document.getElementById('AboutUs');
const services = null || document.getElementById('Services');


const collapse = () =>{
    var b1 = document.getElementById('chck1')
    var b2 = document.getElementById('chck2')
    var b3 = document.getElementById('chck3')
    var b4 = document.getElementById('chck4')

    b1.addEventListener('click' , ()=>{
        var icon1 = document.getElementById('icon1');
        var ct1 = document.getElementById('ct1');
        icon1.classList.toggle('icon-checked');
        ct1.classList.toggle('tab-checked');
    });

    b2.addEventListener('click' , ()=>{
        var icon2 = document.getElementById('icon2');
        var ct2 = document.getElementById('ct2');
        icon2.classList.toggle('icon-checked');
        ct2.classList.toggle('tab-checked');
    });

    b3.addEventListener('click' , ()=>{
        var icon3 = document.getElementById('icon3');
        var ct3 = document.getElementById('ct3');
        icon3.classList.toggle('icon-checked');
        ct3.classList.toggle('tab-checked');
    });

    b4.addEventListener('click' , ()=>{
        var icon4 = document.getElementById('icon4');
        var ct4 = document.getElementById('ct4');
        icon4.classList.toggle('icon-checked');
        ct4.classList.toggle('tab-checked');
    });
}

const main = async () => {
    header.innerHTML = Header();
    var btnOpenPopup = document.getElementById('btn-open-popup')
    btnOpenPopup.addEventListener('click', () => {
        console.log("toogle")
        header.classList.toggle('active');
    })

    services.innerHTML = Services();
    aboutUs.innerHTML = AboutUs();
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
                breakpoint: 649,
                settings:{
                    slidesToShow: 2,
                }
            },{
                // screens greater than >= 867px
                breakpoint: 850,
                settings:{
                    slidesToShow: 3,
                }
            },{
                // screens greater than >= 1100px
                breakpoint: 1024,
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
    collapse()
}



main()
