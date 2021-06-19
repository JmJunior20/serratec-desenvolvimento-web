package com.serratec.padariaseuze.repository;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;

import com.serratec.padariaseuze.model.Produto;

import org.springframework.stereotype.Repository;

@Repository
public class ProdutoRepository  {
    
    private ArrayList<Produto> produtos = new ArrayList<Produto>();
    private Long ultimoId = 0l;

    public List<Produto> obterTodos(){
        return this.produtos;
    }

    public Optional<Produto> obterPorId(Long id){
        return this.produtos
                    .stream()
                    .filter(produto -> produto.getId() == id)
                    .findFirst();
    }

    public void deletar(Long id){
        this.produtos.removeIf(produto -> produto.getId() == id);
    }
    
    public Produto adicionar(Produto produto){
        this.ultimoId++;
        produto.setId(ultimoId);

        this.produtos.add(produto);
        return produto;
    }

    public Produto atualizar(Produto produto){

        var encontrado = this.obterPorId(produto.getId());

        if(encontrado.isEmpty()){
            throw new InputMismatchException("Produto não encontrato para atualização");
        }

        this.deletar(produto.getId());
        this.produtos.add(produto);

        return produto;
    }

}
