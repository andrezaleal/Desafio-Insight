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
            <Link to="/Dashboard"><TiChevronLeft/></Link>
              <h1>Dashboard de Indicadores de Processos</h1>
              </div>
              <div className = "graph">
                <div className = "graph-tempo">
                <ComponenteGraphicTempo/>
                </div>
                <div className = "graph-evento">
                <ComponenteGraphicEvento/>
                </div>
                </div>
          </div>
        </>
        )
      }
  
      export default PageGraphic;