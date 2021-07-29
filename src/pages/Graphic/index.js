import React from 'react'
import './style.css'
import ComponenteGraphicTempo from '../../componentes/GraphicTempo';
import ComponenteGraphicEvento from '../../componentes/GraphicEvento';
import {Link} from "react-router-dom"
import {TiChevronLeft } from 'react-icons/ti';

function PageGraphic() {
  return(
        <>
          <div className="content">
            <div className = "titulo">
            <Link to="/"><TiChevronLeft/></Link>
              <h1>Dashboard de Indicadores de Processos</h1>
              </div>
              <div className = "graph">
                <div className = "graph-tempo">
                  <h3>Duração do Processo</h3>
                <ComponenteGraphicTempo/>
                </div>
                <div className = "graph-evento">
                <h3>Número de Eventos</h3>
                <ComponenteGraphicEvento/>
                </div>
                </div>
          </div>
        </>
        )
      }
  
      export default PageGraphic;