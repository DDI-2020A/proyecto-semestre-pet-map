import React from 'react';
import '../styles/Mision.less';
import dog from '../images/dog1.png';
import d1 from "../images/Carlos.jpg";
import d2 from "../images/Yoma.jpg";
import d3 from "../images/Guillo.jpg";
import d4 from "../images/Elvis.jpg";


const Mision = () => {

    return (
        <>

            <div className="fo"></div>
            <div className="row con">
                <div className="col-5">
                    <img src={dog}/>
                </div>
                <div className="col-6">
                    <h1>MISION</h1>
                    <p>PETMAP es una idea que nacio gracias a el amor por los animales de un grupo de estudiantes de la Escuela Politecnica Nacional.</p>
                    <p>Promovemos la protecciòn y adopcion de animales mediante la aplicacion de PET MAP y la conciencia de la comudad en el respeto que merecen y se debe tener hacia las demas especies.</p>
                    <p>Cada animalito que se encuentre sin un hogar que le brinde cariño, comida y un techo donde vivir deberia encontrar un hogar. </p>
                    <br/>
                    <h1>VISION</h1>
                    <p>Ser una organizaciòn autosusteble, reconocida como referencia nacional en el bienestar animal, responsable del cambio en la relacion humana -animal en el Ecuador, Coordinaciones en la ciudad de Quito y sus alrededores.</p>
                </div>
                <div className="col-12">
                    <h1>DESARROLLADORES</h1>
                    <div className="row">
                        <div className="col-6 card">
                            <img src={d1} className="desarrolladores" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Carlos Montesdeoca</h3>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="col-6 card">
                            <img src={d2} className="desarrolladores" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Yomara Diaz</h3>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="col-6 card">
                            <img src={d3} className="desarrolladores" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Guillermo Rivera</h3>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="col-6 card">
                            <img src={d4} className="desarrolladores" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Elvis Agila</h3>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mision;