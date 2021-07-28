import React from 'react'
import { Row, Col, Button } from "antd";
import {AiOutlinePrinter, AiOutlineDiff } from 'react-icons/ai';
import {SiMicrosoftexcel } from "react-icons/si";
import {Link} from "react-router-dom"
import './style.css'
function ComponenteTable({dataSource}) {
  const columns = [
    {
      title: "ASSUNTO",
      dataIndex: "assunto",
      key: "assunto",
    },
    {
      title: "NUM PROCESSO",
      dataIndex: "num_processo",
      key: "num_processo",
    },
    {
      title: "MIN DURAÇÃO PROCESSO",
      dataIndex: "min_duracao_processo",
      key: "min_duracao_processo",
    },
    {
      title: "MÉDIA DURAÇÃO PROCESSO",
      dataIndex: "med_duracao_processo",
      key: "med_duracao_processo",
    },
    {
      title: "MÁXIMA DURAÇÃO PROCESSO",
      dataIndex: "max_duracao_processo",
      key: "max_duracao_processo",
    },
    {
      title: "NUM EVENTOS",
      dataIndex: "num_eventos",
      key: "num_eventos",
    },
    {
      title: "MIN NUM EVENTOS",
      dataIndex: "min_num_eventos",
      key: "min_num_eventos",
    },
    {
    title: "MED NUM EVENTOS",
      dataIndex: "med_num_eventos",
      key: "med_num_eventos",
    },
    {
    title: "MAX NUM EVENTOS",
      dataIndex: "max_num_eventos",
      key: "max_num_eventos",
    },
  ];
  return(
    <>
     <Row style={{background: 'rgb(135, 208, 104) ', borderRadius: '30px 30px 0 0'}}>
        <div className="gp-tabela">
        {columns.map(value => 
          <Col style={{ width: 'calc(100% / 9)', textAlign: 'center', color: 'white', padding: '5px', borderRight: ' 2px solid white'}}>{value.title}</Col>)}
        </div>
      </Row>
     {dataSource?.map(value =>
        <Row style={{borderTop: 'none' , border: ' 1px  solid #bababa', alignItems:' center', display: ' flex' }}>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.assunto}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.num_processo}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.min_duracao_processo}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.med_duracao_processo}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.max_duracao_processo}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.num_eventos}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.min_num_eventos}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.med_num_eventos}
          </Col>
          <Col style={{margin: '20px 0', width: 'calc(100% / 9)', textAlign: 'center', padding: '5px'}}>
            {value.max_num_eventos}
          </Col>
        </Row>
      )}
      <div className="component-footer">
        <div>
          <AiOutlinePrinter/>
          <AiOutlineDiff/>
          <SiMicrosoftexcel/>
        </div>
        <Link to="Graphic"><Button>GERAR DASHBOARD</Button></Link>
       </div>
    </>
  )
}

export default ComponenteTable;