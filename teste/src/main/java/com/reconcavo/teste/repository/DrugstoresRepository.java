package com.reconcavo.teste.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.reconcavo.teste.model.Drugstores;

@Repository
public interface DrugstoresRepository extends JpaRepository<Drugstores, Long> {
	
	@Query("SELECT d FROM Drugstores d WHERE d.name LIKE %:nome% LIMIT 10")
	List<Drugstores> buscarPorNome(String nome);

	@Query("SELECT d FROM Drugstores d  WHERE d.id_neighborhood :id AND d.isOpen :isOpen ")
	List<Drugstores> buscarFarmaciaPorBairro(Long id, int isOpen);


}
