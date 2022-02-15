const Footer = () => {
    return `
        <footer class="Footer">
            <div class="footer-contents">
                <div class="Footer-info">
                    <div class="Footer-info__card">
                        <label class="Footer-info-title">Contacta con nosotros</label>
                        <a href="#" class="Footer-info-link">Contacto</a>
                        <a class="Footer-info-link">Suport</a>
                        <a class="Footer-info-link">Destinations</a>
                        <a class="Footer-info-link">Sponsorships</a>
                    </div>
                    <div class="Footer-info__card">
                        <label class="Footer-info-title">Sobre nosotros</label>
                        <a class="Footer-info-link">Cómo funciona</a>
                        <a class="Footer-info-link">Testimonios</a>
                    </div>
                </div>
                <div class="Footer-rights">
                    <img class="Footer-rights-logo" src="logo.svg" alt="Acá va el logo">
                    <div class="Footer-social">
                        <a href="https://pe.linkedin.com/company/corporacion-servipac-s-a-c" target="_blank"><i class="Footer-social-icon fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/ServipacPeru/" target="_blank"><i class="Footer-social-icon fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/servipac.peru/?hl=es-la" target="_blank"><i class="Footer-social-icon fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UC9GACmf8VzBlO3yMtaObWAA" target="_blank"><i class="Footer-social-icon fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="Footer-reserved">
                <p class="Footer-rights-text">Servipac SAC © 2021 All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

};
export default Footer;