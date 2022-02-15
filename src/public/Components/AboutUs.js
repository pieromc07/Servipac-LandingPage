const AboutUs = () => {
    const view = `
        <div class="AboutUs">
            <div class="section-container">
                <label class="title-section">SOBRE NOSOTROS</label>
                <hr class="separator">
            </div>
            <section class="AboutUs-section">
                <div class="AboutUs-section-mission">
                    <i class="AboutUs-icon fas fa-bullseye"></i>
                  
                    <div class="AboutUs-title">
                        MISIÓN
                    </div>
                    <div class="AboutUs-text">
                    Corporación Servipac SAC empresa dedicada al mantenimiento de vehículos In house, teniendo como propósito generar la atención personalizada al cliente amoldándose a las necesidades que tu transporte requiere.
                    </div>
                </div>
                <div class="AboutUs-section-vision">
                    <i class="AboutUs-icon far fa-eye"></i>
                    <div class="AboutUs-title">
                        VISIÓN 
                    </div>
                    <div class="AboutUs-text">
                        Para el 2025 afianzar y mejorar el funcionamiento de soporte técnico y tecnológico, enfocándonos en la inserción participativa de las grandes ciudades, así mismo comprometidos en el apoyo social.
                    </div>
                </div>
            </section>
        </div>
    `;
    return view;
}
export default AboutUs;