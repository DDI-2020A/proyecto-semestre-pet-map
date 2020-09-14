import React from "react";
import  {Button, Col, Row, Typography,} from "antd";
import Routes from "../constants/routes";
import '../styles/derechos.css';

const {Title,paragraph,text} =Typography;

const derechos = () => {
    return (
        <div className="main_donations">
            <h1 level = {1} className='title1 '>DERECHO ANIMAL</h1>
            <h2 level = {2} className='title2 '>REGLAMENTO NACIONAL DE TENDENCIA DE PERROS</h2>

            <p>En febrero de 2009, se elaboró el Acuerdo Interministerial para la Tenencia Responsable de Perros, el cual entró en vigencia en agosto del mismo año.
            </p>
            <p>En sus puntos principales el reglamento establece:
            </p>

            <h2 level = {2} className='title2 '>OBLIGACIONES</h2>

            <paragraph className='paragraph '>
                <ul>
                    <li>Otorgar condiciones de vida adecuadas a las características del animal.</li>
                    <li>Educar, socializar e interactuar con el perro en la comunidad.</li>
                    <li>Mantener únicamente el número de perros que las normas de bienestar animal permiten.</li>
                    <li>Recoger y disponer sanitariamente los desechos del animal.</li>
                    <li>Cuidar que los perros no causen molestias a los vecinos.</li>
                    <li>Entre otras.</li>
                    </ul>
                </paragraph>

            <h2 level = {2} className='title2 '>PROHIBICIONES</h2>

            <paragraph>
                <ul>
                    <li>Maltratar, golpear o someter al animal.</li>
                    <li>Abandonar o mantener en estado de aislamiento.</li>
                    <li>Encadenar, enjaular o confinar permanententemente en terrazas, patios, balcones.</li>
                    <li>Envenenar masivamente perros propios o ajenos.</li>
                    <li>Usar la imagen de perros para simbolizar maldad, agresiva o peligrosa.</li>
                    <li>Entre otras.</li>
                </ul>
            </paragraph>
        </div>
    );
};

export default derechos;