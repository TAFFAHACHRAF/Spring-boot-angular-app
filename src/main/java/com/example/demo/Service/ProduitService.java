package com.example.demo.Service;

import com.example.demo.modele.Produit;

import java.util.List;

public interface ProduitService {
    Produit create(Produit produit);
    List<Produit> get();
    Produit update(Long id,Produit produit);
    String delete(long id);
}
