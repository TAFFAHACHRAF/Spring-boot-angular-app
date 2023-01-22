package com.example.demo.Service;

import com.example.demo.modele.Produit;
import com.example.demo.repository.ProduitRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProduitServiceImpl implements ProduitService{
    private final ProduitRepository produitRepository;

    @Override
    public Produit create(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public List<Produit> get() {
        return produitRepository.findAll();
    }

    @Override
    public Produit update(Long id, Produit produit) {
        return produitRepository.findById(id).map(p->{
            p.setPrix(produit.getPrix());
            p.setNom(produit.getNom());
            p.setDescription(produit.getDescription());
            return produitRepository.save(produit);
        }).orElseThrow(() -> new RuntimeException("Produit nom treouvé"));
    }

    @Override
    public String delete(long id) {
        produitRepository.deleteById(id);
        return "Produit supprimé!";
    }
}
