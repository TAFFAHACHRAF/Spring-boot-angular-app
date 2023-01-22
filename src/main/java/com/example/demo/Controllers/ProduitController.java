package com.example.demo.Controllers;

import com.example.demo.Service.ProduitService;
import com.example.demo.modele.Produit;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("produit")
@AllArgsConstructor
public class ProduitController {
    public final ProduitService produitService;
    @PostMapping("/create")
    public Produit create(@RequestBody Produit produit){
        return produitService.create(produit);
    }

    @GetMapping("/get")
    public List<Produit> get(){
        return produitService.get();
    }

    @PutMapping("/update/{id}")
    public Produit update(@PathVariable Long id,@RequestBody Produit produit){
        return produitService.update(id,produit);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id){
        return produitService.delete(id);
    }

}
