import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import CadastroProdutos from '../../views/cadastro/cadastrar-produtos';



function ListarProdutos({ id, barras, type, nome, descripition, quantidade }){  
     const [codBarra, setCodBarra] = useState();

  return(
      <Card 
      style={{ minWidth: '20%', maxWidth: 500, margin:'10px', float:'left' }}>
            <Card.Body className="text-center">
                <Card.Title style={{ height: '40px'}}>
                   Produto: {nome}        
                </Card.Title>  
                <Card.Text>
                    Codigo: {barras}
                </Card.Text> 
                <Card.Text>
                    Descrição: {descripition}
                </Card.Text>
                <Card.Text>
                Quantidade: {quantidade}
                </Card.Text>
            </Card.Body>
            <Button variant="success" href={`/cad/${id}`}>Editar</Button>
      </Card>
  )
 
}

export default ListarProdutos;