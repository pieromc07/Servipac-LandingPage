
const Team = () => {
    return (`
        <div class="section-container">
            <label class="title-section">EQUIPO</label>
            <hr class="separator"></hr>
        </div>
        <section class="Team">
            <div class="team-slider">
                <div class="slider-conteiner">
                    <div class="slider-content">
                        <div class="slider-element">
                            <img class="element-image" src="img/picture-4.jpg" alt="picture 1"/>
                            <div class="element-description">
                                <h3>JOSÉ PACHECO CANCINO</h3>
                                <p>GERENTE GENERAL</p>
                                <ul class="description-social">
                                    <li>
                                    <a href="https://www.linkedin.com/in/jose-wilmer-pacheco-cancino-b73756173/?originalSubdomain=pe" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="slider-element">
                            <img class="element-image" src="img/picture-2.jpg" alt="picture 2"/>
                            <div class="element-description card-team-opacity">
                            <h3>RONALD PACHECO YÉPEZ</h3>
                            <p>ADMINISTRADOR</p>
                            <ul class="description-social">
                                    <li>
                                    <a href="https://www.linkedin.com/in/ronald-pacheco-yepez/?originalSubdomain=pe" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="slider-element">
                            <img class="element-image" src="img/picture-3.jpg" alt="picture 3"/>
                            <div class="element-description">
                            <h3>GABRIELA LEON CUEVA</h3>
                            <p>JEFA DE RECURSOS HUMANOS</p>
                            <ul class="description-social">
                                    <li>
                                    <a href="https://www.linkedin.com/in/gabriela-leon-cueva-815b7a211/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider-pag"></div>
            </div>
        </section>
    `)
};
export default Team;
