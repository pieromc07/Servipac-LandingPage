
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Contact from "./Components/Contact.js";
import Team from "./Components/Team.js";
import Banner from './Components/Banner.js';
import AboutUs from './Components/AboutUs.js';
import { Services } from './Components/Services.js';
// import List from './Components/List.js' 
// import Button from './Components/Button.js' 

const header = null || document.getElementById('Header');
const banner = null || document.getElementById('Banner');
const team = null || document.getElementById('Team');
const contact = null || document.getElementById('Contact');
const footer = null || document.getElementById('Footer');
const aboutUs = null || document.getElementById('AboutUs');
const services = null || document.getElementById('Services');




const main = async () => {
    header.innerHTML = Header();
    var btnOpenPopup = document.getElementById('btn-open-popup')
    btnOpenPopup.addEventListener('click', () => {
        let hl = document.getElementById('hl')
        hl.classList.toggle('outline')
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
            responsive: [{
                // screens greater than >= 700px
                breakpoint: 649,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                // screens greater than >= 867px
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                // screens greater than >= 1100px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
    banner.innerHTML = Banner()
    /*footer.innerHTML = Button({}); */

    var form_contact = document.getElementById('form_contact');
    form_contact.addEventListener('submit', (e) => {
        e.preventDefault();
        let name = form_contact.name.value;
        let email = form_contact.email.value;
        let msg = form_contact.msg.value;

        if (name.trim() === '' || email.trim() === '' || msg.trim() === '') {
            toastr["warning"]("Todos los campos son obligatorios", "warning")

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            
            toastr["warning"]("El Email es incorrecto", "warning")

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            return;
        }

        const data = {
            name,
            email,
            msg
        }

        fetch('https://api-gneric-laravel.herokuapp.com/api/test', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {

                toastr["success"]("Mensaje enviado... nos contactaremos pronto.", "Confirmacion")

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }

                form_contact.name.value = '';
                form_contact.email.value = '';
                form_contact.msg.value = '';

            }).catch((err) => {
                toastr["error"]("Ups.. Surgio un error", "Error")

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
            })
    });





}



main()
