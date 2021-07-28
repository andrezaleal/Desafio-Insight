import React from 'react'
import dsgovce from 'cegov-antd'
import { Row, Col, Typography, Avatar} from "antd";
const {Title} = Typography
const {  Header } = dsgovce();


function HeaderComponente() {
  return(
    <>
      <Header
          accessibility
          onClickAccessibility={(name) => console.log(name)}
          title="Acesso Cidadão"
        >
          <Row
            className="example-header"
            gutter={8}
            align="middle"
            justify="space-between"
            style={{ width: '100%' , height:'8.0rem', borderBottom: ' 0.45rem solid  #87d068', padding:'  0 4.0rem'}}
          >
            <Col>
              <Row justify="end" align="middle" >
                <Col >
                  <img height={45} width="auto"
                    src="https://www.ceara.gov.br/wp-content/themes/ceara2017/assets/images/logotipo-ceara-branco-2021.svg" />
                </Col>
                <Col>
                  <div style={{ background: 'white', height: 38, width: 2, marginLeft: 15, marginRight: 15 }} />
                </Col>
                <Col >
                  <Title level={5} style={{ marginBottom: 0, color: 'white',  fontSize: '1.5rem'}} >
                  Nome do Sistema
                  </Title>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
              </Row>
              <Row gutter={16} justify="end" align="middle">
                <Col>
                  <a style={{ fontSize: '0.8rem', color: "white" }} href="/">Bem Vindo!</a>
                </Col>
                <Col>
                <Avatar  style={{border: '0.1rem solid white'}}  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>,       
    </>
  )
}

export default HeaderComponente;