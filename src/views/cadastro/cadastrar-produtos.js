import React, {useState, useEffect} from 'react';
import { Form, Row, Col, Button, Jumbotron, Modal} from 'react-bootstrap';
import api from '../../services/api';
import Header from '../../components/header';
import {Redirect} from 'react-router-dom';


function Cadastrar({match}){
        const [type, setType]= useState('');
        const [nome, setNome] = useState('');
        const [descripition, setDescripition] = useState('')
        const [quantidade, setQuantidade] = useState(0);
        const [barras, setBarras] = useState('');
        const [showModal, setShowModal] = useState(false);
        const [redirect, setRedirect] = useState(false);

        const list = [
            {id: 1, name: 'Selecione um tipo'},
            {id: 2, name: 'Pequeno'},
            {id: 3, name: 'Medio'},
            {id: 4, name: 'Grande'},
          ];

          async function LoadProduto(){
            await api.get(`/${match.params.id}`)
            .then(response => {
              setType(response.data.type)
              setNome(response.data.nome)
              setDescripition(response.data.descripition)
              setQuantidade(response.data.quantidade)
              setBarras(response.data.barras)
            })  

        }

        function handleContinuar(){
            setShowModal(false);
        }

        async function Salvar(){
          if (!type)
            return alert("Você precisa preencher o Tipo do produto")
          else if(!nome)
            return alert("Você precisa definir o nome do produto")  
          else if(!descripition)
            return alert("Você precisa preencher a Descrição do produto")
          else if(!quantidade)
            return alert("Você precisa definir a quantidade do produto")
          else if(!barras)
            return alert("Você precisa definir o codigo de barras")

        if(match.params.id){
            await api.put(`/atualizar/${match.params.id}`, {
                    barras,
                    type,
                    nome,
                    descripition,
                    quantidade
                }).then(() => 
                    setShowModal(true),
                    setRedirect(true)     
                )
          
              }else{
                await api.post('/cad',{
                    barras,
                    type,
                    nome,
                    descripition,
                    quantidade
                }).then(() => 
                    setShowModal(true),
                    setRedirect(true)
                )
              }
          
        }
        useEffect(() => {
            console.log(match.params.id);
      
          LoadProduto();
        }, [])

    return (
    <>  
    { redirect && <Redirect to="/"/> }      
    <Header/>
    <Jumbotron fluid
               style={{margin: '10px'}}>
        <Form noValidate
              style={{margin: '10px'}}>

                <Form.Group as = {Row} controlId="tipo">
                <Form.Label column sm={3}>
                    Porte
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select"
                                    name="Porte"
                                    data-testid="txt-Porte"
                                    value={type}
                                    onChange={e => setType(e.target.value)}>
                            {list.map((item, index) => (
                            <option value={item.id}>{item.name}</option>
        ))}        
                        </Form.Control>
                                
                    </Col>
                </Form.Group>   

                 <Form.Group as = {Row} controlId="barras"> 
                    <Form.Label column sm={3}>
                        Codigo de Barras
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                                    type="text"
                                    placeholder="Digite o codigo de barras"
                                    name="barras"
                                    data-testid="txt-barras"
                                    onChange={e => setBarras(e.target.value)}
                                    value={barras}/>
                    </Col>
          
                </Form.Group>  

                <Form.Group as = {Row} controlId="nome"> 
                    <Form.Label column sm={3}>
                        Nome
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                                    type="text"
                                    placeholder="Digite o seu nome"
                                    name="nome"
                                    data-testid="txt-nome"
                                    onChange={e => setNome(e.target.value)}
                                    value={nome}/>
                    </Col>
          
                </Form.Group> 

                <Form.Group as = {Row} controlId="descripition"> 
                    <Form.Label column sm={3}>
                        Descrição
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                                    type="text"
                                    placeholder="Digite descrição"
                                    name="descripition"
                                    data-testid="txt-descripition"
                                    onChange={e => setDescripition(e.target.value)}
                                    value={descripition}/>
                    </Col>
          
                </Form.Group>   

                   <Form.Group as = {Row} controlId="quantidade"> 
                    <Form.Label column sm={3}>
                        Quantidade
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                                    type="number"
                                    placeholder="Digite a quantidade"
                                    name="quantidade"
                                    data-testid="txt-quantidade"
                                    onChange={e => setQuantidade(e.target.value)}
                                    value={quantidade}/>
                        <Form.Control.Feedback type="invalid"> Digite uma quantidade valido</Form.Control.Feedback>
                    </Col>
          
                </Form.Group> 

        

                   <Form.Group as={Row} ControlId="finalizarCadastro">
                    <Col className="text-center" sm={12}>
                        <Button type="submit"
                                variant="success"
                                data-testid="btn-finalizar-cadastro"
                                onClick={Salvar}>
                        Confirmar
                        </Button>
                    </Col>            
            </Form.Group> 

          
              <Modal show={showModal}
                data-testid="modal-cadastro-sucesso"
                onHide={handleContinuar}>
             <Modal.Header closeButton>
                <Modal.Title>Produto cadastrado realizada com sucesso!</Modal.Title>
             </Modal.Header>
             <Modal.Footer>
                 <Button variant="success" onClick={handleContinuar}> Continuar </Button>
             </Modal.Footer>
         </Modal>     
        </Form>
     </Jumbotron>
     </>

    )
  
}


export default Cadastrar;