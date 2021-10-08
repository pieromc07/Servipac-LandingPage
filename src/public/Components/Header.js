const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1><a href="#">cervipack</a></h1>
                <button class="menu" id="btn-open-popup">
                    x
                </button>
            </div>
            <ul class="Header-navs">
                <li class="Header-nav">
                <a href="#Mission/">Misión y visión</a>
                </li>
                <li class="Header-nav">
                    <a href="#Services/">Servicios</a>
                </li>
                <li class="Header-nav">
                    <a href="#Team/">Equipo</a>
                </li>
                <li class="Header-nav">
                    <a href="#Contact/">Contáctanos</a>
                </li>
            </ul>
            
        </di>
    `;
    return view;
};
export default Header;