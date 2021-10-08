const Header = ()=>{
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1><a href="#">cervipack</a></h1>
            </div>
            <div class="Header-nav">
                <a href="#Mission/">Misión y visión</a>
            </div>
            <div class="Header-nav">
                <a href="#Services/">Servicios</a>
            </div>
            <div class="Header-nav">
                <a href="#Team/">Equipo</a>
            </div>
            <div class="Header-nav">
                <a href="#Contact/">Contáctanos</a>
            </div>
            <button class="menu" id="btn-open-popup">
                x
            </button>
        </div>
    `;
    return view;
};
export default Header;