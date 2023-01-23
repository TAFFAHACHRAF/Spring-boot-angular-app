package com.example.demo.Controllers;

import com.example.demo.Service.EmployeService;
import com.example.demo.modele.Employe;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/employees")
@AllArgsConstructor
public class EmployeeController {
    public final EmployeService EmployeService;
    @PostMapping("/add")
    public ResponseEntity<Employe> addEmp(@RequestBody Employe employe){
        Employe employe1=EmployeService.addEmploye(employe);
        return new ResponseEntity<>(employe1,HttpStatus.CREATED);
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Employe>> getAllEmp(){
        List<Employe> employes= EmployeService.getEmployes();
        return new ResponseEntity<>(employes, HttpStatus.OK);
    }

    @GetMapping("/findone/{id}")
    public ResponseEntity<Employe> getEmp(@PathVariable Long id) throws UserPrincipalNotFoundException {
        Employe employe= EmployeService.findEmployeById(id);
        return new ResponseEntity<>(employe, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Employe> updateEmp(@RequestBody Employe employe){
        Employe employe1=EmployeService.updateEmploye(employe);
        return new ResponseEntity<>(employe1,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteEmp(@PathVariable Long id) throws UserPrincipalNotFoundException {
        return EmployeService.deleteEmploye(id);
    }
}