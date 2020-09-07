import React from "react";
import  {Button, Col, Row, Typography,} from "antd";
import Routes from "../constants/routes";
import derechosa from "../styles/derechos.css";

const {Title,paragraph,text} =Typography;

const derechos = () => {
    return (
        <div>
            <Title level = {1} className='title1 '>DERECHO ANIMAL</Title>
            <Title level = {2} className='title2 '>REGLAMENTO NACIONAL DE TENDENCIA DE PERROS</Title>

            <paragraph>En febrero de 2009, se elaboró el Acuerdo Interministerial para la Tenencia Responsable de Perros, el cual entró en vigencia en agosto del mismo año.
            </paragraph>
            <paragraph>En sus puntos principales el reglamento establece:
            </paragraph>

            <Title level = {2} className='title2 '>OBLIGACIONES</Title>

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

            <Title level = {2} className='title2 '>PROHIBICIONES</Title>

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