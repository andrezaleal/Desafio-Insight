import React from 'react'
import { Checkbox, Button} from 'antd'
import './style.css'
function ComponenteCheckbox() {
  return(
    <>
      <div className="cb-group" >
      <h2>Agregar por:</h2>
          <Checkbox>Assunto</Checkbox>
          <Checkbox>Número do Processo </Checkbox>
          <Checkbox>Número do Evento</Checkbox>
          <Button>PESQUISAR</Button>
      </div>
    </>
  )
}

export default ComponenteCheckbox;
