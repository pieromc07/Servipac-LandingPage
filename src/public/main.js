import Header from './Components/Header.js'
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js' //componete
import List from './Components/List.js' 
import Button from './Components/Button.js' 
const header = null || document.getElementById('Header');
const banner = null || document.getElementById('Banner');
const footer = null || document.getElementById('Footer'); //html

const main = async () => {  
    header.innerHTML = Header();
    var btnOpenPopup = document.getElementById('btn-open-popup')
    btnOpenPopup.addEventListener('click', ()=>{
        console.log("toogle")
        header.classList.toggle('active');
    })
    banner.innerHTML=Banner()
    /*footer.innerHTML = Button({}); */
}
main()
