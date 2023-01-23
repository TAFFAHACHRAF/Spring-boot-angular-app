package com.example.demo.Service;

import com.example.demo.modele.Employe;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

public interface EmployeService {
    Employe addEmploye(Employe employe);
    List<Employe> getEmployes();
    Employe updateEmploye(Employe employe);
    Employe findEmployeById(Long id) throws UserPrincipalNotFoundException;
    String deleteEmploye(Long id) throws UserPrincipalNotFoundException;
}
