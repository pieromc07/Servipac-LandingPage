const Contact = () => {
    return `
        <div class="section-container">
            <label class="title-section">CONTÁCTANOS</label>
            <hr class="separator">
        </div>
        <section class="Contact">     
            <div class="Contact-content">
                <form class="Contact-form">
                    <div class="form-group">
                        <label class="form-group__title">ESCRIBE TU NOMBRE</label>
                        <input class="form-group__text" placeholder="Escribe tu nombre">
                    </div>
                    <div class="form-group">
                        <label class="form-group__title">ESCRIBE TU EMAIL</label>
                        <input class="form-group__text" placeholder="Escribe tu email">
                    </div>
                    <div class="form-group">
                        <label class="form-group__title">ESCRIBE TU MENSAJE</label>
                        <textarea class="form-group__area" cols="auto" rows="auto" placeholder="Escribe tu mensaje"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="form-group__btn">CONTACTAR</button>
                    </div>
                </form>
                <div class="Contact-image">
                    <img src="img/contact.svg" alt="imagen contacto" />
                </div>
            </div>
        </section>
    `;
};
export default Contact;