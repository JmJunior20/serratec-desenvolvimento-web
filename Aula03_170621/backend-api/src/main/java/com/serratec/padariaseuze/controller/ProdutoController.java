package com.serratec.padariaseuze.controller;

import java.util.List;
import java.util.Optional;

import com.serratec.padariaseuze.model.Produto;
import com.serratec.padariaseuze.service.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    
    @Autowired
    ProdutoService servicoProduto;

    @GetMapping
    public ResponseEntity<List<Produto>> obterTodos(){
        return ResponseEntity.ok(servicoProduto.obterTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Produto>> obterPorId(@PathVariable("id") Long id){
        return ResponseEntity.ok(servicoProduto.obterPorId(id));
    }

    @PostMapping
    public ResponseEntity<Produto> adicionar(@RequestBody Produto produto){
        var novoProduto = servicoProduto.adicionar(produto);
        return new ResponseEntity<>(novoProduto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable("id") Long id){
        
        try {
            servicoProduto.deletar(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizar(
                                    @PathVariable("id") Long id, 
                                    @RequestBody Produto produto){

        var  produtoAtualizado = this.servicoProduto.atualizar(id, produto);
        return ResponseEntity.ok(produtoAtualizado);
    }
    
}

