console.log("sdsadaws1")
import Header from './Components/Header.js'
const header = null || document.getElementById('Header');
const banner = null || document.getElementById('Banner');

const main = async () => {  
    console.log("sdsadaws")
    header.innerHTML = await Header();
}
main()
/* export default main; */
