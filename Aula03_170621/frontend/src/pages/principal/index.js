import React from 'react';
import Produto from '../../model/Produto';
import api from '../../service/api';
import './index.css';

import { Link } from 'react-router-dom';

export default class Principal extends React.Component {

    //Quando esse componente for carregado
    // que ir na api e pedir todo os produtos.
    //Assim que receber vou adicionar dentro da nossa lista de produtos.

    //Estado do componente.
    //Aqui podemos ter muitas propriedades.
    state = {
        produtos: [],
        pessoa: {
            cliente: {}
        }
    }

    //Essa função é executada quando a pagina é carregada.
    //Versão 01.
    // componentDidMount(){
    //     api.get("/api/produtos")
    //     .then(resposta => {
    //         this.setState({produtos: resposta.data.map(obj => new Produto(obj)) });
    //     })
    //     .catch(error => console.log(error))
    // }

    componentDidMount() {
        this.obterProdutos();
    }

    // Vamos criar funções assim
    // Versão 02
    // obterProdutos = () => {
    //     api.get("/api/produtos")
    //         .then(resposta => {
    //          this.setState({produtos: resposta.data.map(obj => new Produto(obj)) });
    //     })
    //      .catch(error => console.log(error))
    // }

    //Versão 03
    obterProdutos = async () => {
        const resposta = await api.get("/api/produtos");
        this.setState({ produtos: resposta.data.map(obj => new Produto(obj)) });
    }

    render() {

        // Isso aqui é um destructor
        // Ele pega o atributo que deseja do objeto final.
        const { produtos } = this.state;
        // const { cliente } = this.state.pessoa;

        return (
            <div className="container-produtos">
                {produtos.map(produto => (
                    <div className="produtos" key={ produto.id }>
                        <Link to={`/detalhes/${produto.id}`}>
                            <p><strong>Id:</strong> { produto.id } </p>
                            <p><strong>Nome:</strong> { produto.nome } </p>
                            <p><strong>Valor</strong> { produto.valor } </p>
                        </Link>
                    </div>
                ))}
            </div>           
        );
    }
}
