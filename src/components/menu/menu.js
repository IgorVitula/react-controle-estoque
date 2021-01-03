import React, {useState, useEffect} from 'react';
import ListarProdutos from '../../components/produtos/listar-produtos';
import api from '../../services/api';
import Header from '../header';


function Menu (){
    const [produtos, setProdutos] = useState([]);


async function LoadProdutos(){
    await api.get('/filter/listar').then(response =>{
        setProdutos(response.data);
        console.log(response.data)
    })
}

useEffect(() => {
    LoadProdutos();
}, [])

    return(
    <>
        <Header/>
     {
         produtos.map(p =>(
         
         <ListarProdutos barras={p.barras} type={p.type} nome={p.nome} descripition={p.descripition} quantidade={p.quantidade} />
         
         ))
        
     }
    </>
    
    )
}

export default Menu;