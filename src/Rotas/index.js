import React from 'react'
import dsgovce from 'cegov-antd'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import PagesDashboard from '../pages/Dashboard';
import PagesGraphic from '../pages/Graphic';
import HeaderComponente from  '../componentes/Header';
const {  Footer } = dsgovce();

function Rotas({dataSource}){
  return(
    <>
      <BrowserRouter>
      <HeaderComponente/>
      <Switch>
        <Route exact path="/Dashboard" component={PagesDashboard}/>
        <Route path="/Graphic" component={PagesGraphic} />
      </Switch>,
      <Footer/>
      </BrowserRouter>,
   </>
  );
}
export default Rotas;