package com.serratec.padariaseuze.service;

import java.util.List;
import java.util.Optional;

import com.serratec.padariaseuze.model.Produto;
import com.serratec.padariaseuze.repository.ProdutoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
    
    @Autowired
    ProdutoRepository repositorioProduto;

    public List<Produto> obterTodos(){
        return this.repositorioProduto.obterTodos();
    }

    public Optional<Produto> obterPorId(Long id){
        return this.repositorioProduto.obterPorId(id);
    }

    public Produto adicionar(Produto produto){
        return this.repositorioProduto.adicionar(produto);
    }

    public void deletar(Long id){
        this.repositorioProduto.deletar(id);
    }

    public Produto atualizar(Long id, Produto produto){
        produto.setId(id);
        return this.repositorioProduto.atualizar(produto);
    }
}
