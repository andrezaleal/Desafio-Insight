import React from 'react'
import {Select, Button} from 'antd'
import './style.css'
const { Option } = Select;

function ComponenteSelect() {
  return(
    <>
    <div className= "gp-select">
      <Select
        mode = "tags"
        tokenSeparators={['=']}
        showSearch
        placeholder="Selecione uma opção"
        optionFilterProp="children"
      >
        <Option value="assunto">Assunto</Option>
        <Option value="numProcesso">Número do Processo</Option>
        <Option value="numEvento">Número do Evento</Option>
      </Select>
      <Button>FILTRAR</Button>
  </div>
     </>
  )
}

export default ComponenteSelect;