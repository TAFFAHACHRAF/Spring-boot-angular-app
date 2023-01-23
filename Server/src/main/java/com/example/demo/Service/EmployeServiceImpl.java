package com.example.demo.Service;

import com.example.demo.modele.Employe;
import com.example.demo.repository.EmployeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class EmployeServiceImpl implements EmployeService{
    private final EmployeRepository employeRepository;
    @Override
    public Employe addEmploye(Employe employe) {
        employe.setEmployeeCode(UUID.randomUUID().toString());
        return employeRepository.save(employe);
    }
    @Override
    public List<Employe> getEmployes() {
        return employeRepository.findAll();
    }

    @Override
    public Employe updateEmploye(Employe employe){
        return employeRepository.save(employe);
    }

    @Override
    public Employe findEmployeById(Long id) throws UserPrincipalNotFoundException {
        return employeRepository.findById(id).orElseThrow(() -> new UserPrincipalNotFoundException("User by id "+id+" was not found"));
    }

    @Override
    public String deleteEmploye(Long id) throws UserPrincipalNotFoundException {
        if(findEmployeById(id).getId()!=null){
            Employe employe=new Employe();
            employe.setId(id);
            employeRepository.delete(employe);
            return "Deleted with succesfully";
        }
        return "This employe was not found";
    }

}
//https://www.youtube.com/watch?v=Gx4iBLKLVHk