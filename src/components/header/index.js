import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'; 
import {Link, Redirect} from 'react-router-dom';

function Header(){

 return(   
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">Controle Bau</Navbar.Brand> 
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/cad">Novo Produto</Nav.Link>
        </Navbar.Collapse>   
    </Navbar>
   )
}

export default Header;