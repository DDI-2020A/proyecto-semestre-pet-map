import React, {useEffect, useState} from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const Adoptame = () => {

    const [base, setBase] = useState([]);
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        const getPet = async () => {
            const data = await fetch(`https://run.mocky.io/v3/2b0d9203-d2b9-4fe8-b362-294c68b12b89`);
            const jsonPet = await data.json();
            setBase(jsonPet);
            console.log('Mascotas', jsonPet);
        };
        getPet();
    }, [tipo]);

    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default Adoptame;