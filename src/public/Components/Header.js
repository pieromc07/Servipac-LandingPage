const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo" id="hl">
                <h1 class="logo"><a href="/">Servipac</a></h1>
                <i class="menu fas fa-bars" id="btn-open-popup"> 
                </i>
            </div>
            <ul class="Header-navs">
                <li class="Header-nav">
                    <a href="#AboutUs">Nosotros</a>
                </li>
                <li class="Header-nav">
                    <a href="#Services">Servicios</a>
                </li>
                <li class="Header-nav">
                    <a href="#Team">Equipo</a>
                </li>
                <li class="Header-nav">
                    <a href="#Contact">Contáctanos</a>
                </li>
            </ul>
        </di>
    `;
    return view;
};
export default Header;