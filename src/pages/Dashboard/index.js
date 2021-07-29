import React, {useState} from 'react'
import ComponenteCheckbox from '../../componentes/Checkbox';
import ComponenteSelect from '../../componentes/Pesquisa';
import ComponenteTable from '../../componentes/Tabela';
import './style.css'


function PageDashboard() {
  const dataSource = [
    {
      assunto: "NOTA FISCAL - SELAGEM",
      num_processo: 620148,
      min_duracao_processo: 0.00,
      med_duracao_processo: 53.17,
      max_duracao_processo: 1158.92,
      ano:  2021,
      num_eventos: 4029140,
      min_num_eventos:1,
      med_num_eventos:6.50,
      max_num_eventos:1280,
      responsavel:
        "Governo",
    },
    {
      assunto: "NOTA FISCAL - CORREÇÃO",
      num_processo: 230047,
      min_duracao_processo: 0.00,
      med_duracao_processo: 161.89,
      max_duracao_processo: 1492.00,
      ano:  2021,
      num_eventos: 1584757,
      min_num_eventos:1,
      med_num_eventos:6.89,
      max_num_eventos:347,
      responsavel:
        "Governo",
    },
    {
      assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
      num_processo: 20793,
      min_duracao_processo: 0.00,
      med_duracao_processo: 35.59,
      max_duracao_processo: 498.59,
      ano:  2021,
      num_eventos: 160689,
      min_num_eventos:3,
      med_num_eventos:7.75,
      max_num_eventos:34,
      responsavel:
        "Governo",
    },
    {
        assunto: "NOTA FISCAL - SELAGEM",
        num_processo: 620148,
        min_duracao_processo: 0.00,
        med_duracao_processo: 53.17,
        max_duracao_processo: 1158.92,
        ano:  2021,
        num_eventos: 4029140,
        min_num_eventos:1,
        med_num_eventos:6.50,
        max_num_eventos:1280,
        responsavel:
          "Governo",
      },
      {
        assunto: "NOTA FISCAL - CORREÇÃO",
        num_processo: 230047,
        min_duracao_processo: 0.00,
        med_duracao_processo: 161.89,
        max_duracao_processo: 1492.00,
        ano:  2021,
        num_eventos: 1584757,
        min_num_eventos:1,
        med_num_eventos:6.89,
        max_num_eventos:347,
        responsavel:
          "Governo",
      },
      {
        assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
        num_processo: 20793,
        min_duracao_processo: 0.00,
        med_duracao_processo: 35.59,
        max_duracao_processo: 498.59,
        ano:  2021,
        num_eventos: 160689,
        min_num_eventos:3,
        med_num_eventos:7.75,
        max_num_eventos:34,
        responsavel:
          "Governo",
      },
  ];
  return(
        <>
          <div className="content">
            <h1>Indicadores de Processos</h1>
            <div className = "content-componentes">
              <div className = "content-componentes-cb">
                <ComponenteCheckbox />
              </div>
                <div className = "content-componentes-table" >
                  <ComponenteSelect/>
                  <div  className = "content-componentes-titulos" >
                  <ComponenteTable dataSource = {dataSource}/>
                  </div>
                </div>
            </div>
          </div>
        </>
        )
      }
  
      export default PageDashboard;