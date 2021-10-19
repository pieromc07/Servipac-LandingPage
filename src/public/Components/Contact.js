const Contact = () => {
    return `
        <section class="Contact">
            <label class="title-section">CONTÁCTANOS</label>
            <hr class="separator">
            <div class="Contact-form">
                <label class="Contact-form-title">ESCRIBE TU NOMBRE</label>
                <input class="Contact-form-text" placeholder="Escribe tu nombre">
       
                <label class="Contact-form-title">ESCRIBE TU EMAIL</label>
                <input class="Contact-form-text" placeholder="Escribe tu email">
                
                <label class="Contact-form-title">ESCRIBE TU MENSAJE</label>
                <textarea class="Contact-form-area" cols="auto" rows="auto" placeholder="Escribe tu mensaje"></textarea>
                <button class="Contact-form-btn">CONTACTAR</button>
            </div>
        </section>
    `;
};
export default Contact;