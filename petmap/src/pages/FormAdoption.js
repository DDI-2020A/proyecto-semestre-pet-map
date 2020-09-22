import React from 'react';
import "../styles/forms.less";
import {Input, Button, Col, Layout, Row, Checkbox, Form} from "antd";
import {Link} from 'react-router-dom';
import {EditOutlined,DingtalkOutlined} from '@ant-design/icons';

const {Content,Footer} = Layout;

const forms = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <layout className='layout'>
            <Content className='main-content mb-3'>
                <Row>
                    <Col span={24}>
                        <div className='presentation'>
                            <Row>
                                <Col span={12}><h1 className='maintitle'>Pet Map</h1></Col>
                                <Col span={12}><h1 className='secondtitle'>Formulario-Adopción <EditOutlined /></h1></Col>
                            </Row>

                            <Row className='form'>
                                <Col span={24}>
                                    <p><DingtalkOutlined />¿Ha tenido mascotas con anterioridad? </p>
                                    <Checkbox onChange={onChange}>Si</Checkbox>
                                    <Checkbox onChange={onChange}>No</Checkbox>
                                    <br /><br />
                                    <p><DingtalkOutlined />¿Cuenta con los recursos necesarios para mantener sano y contenta a su mascota? </p>
                                    <Checkbox onChange={onChange}>Si</Checkbox>
                                    <Checkbox onChange={onChange}>No</Checkbox>
                                    <br /><br />
                                    <p><DingtalkOutlined />¿Les realiza el chequeo médico con regularidad? </p>
                                    <Checkbox onChange={onChange}>Si</Checkbox>
                                    <Checkbox onChange={onChange}>No</Checkbox>
                                    <br /><br />
                                    <p><DingtalkOutlined />¿Cuenta con espacio suficiente en su vivienda para tener una mascota? </p>
                                    <Checkbox onChange={onChange}>Si</Checkbox>
                                    <Checkbox onChange={onChange}>No</Checkbox>
                                    <br /><br />
                                    <p><DingtalkOutlined />¿Cuántas veces al día los alimenta? </p>
                                    <Checkbox onChange={onChange}>Si</Checkbox>
                                    <Checkbox onChange={onChange}>No</Checkbox>
                                    <br /><br />
                                    <p><DingtalkOutlined />¿Por qué queire adoptar? </p>
                                    <Checkbox onChange={onChange}>Si</Checkbox>
                                    <Checkbox onChange={onChange}>No</Checkbox>
                                    <br /><br />
                                    <p><DingtalkOutlined />¿De cuánto es su ingreso monetario mensual? </p>
                                    <Input placeholder="ingrese un número" type="color:black"/>
                                    <br /><br />
                                    <Link to="sheet.js"><Button type="btn btn-access"> Terminar </Button></Link>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </Content>
        </layout>

    );
}

export default forms;