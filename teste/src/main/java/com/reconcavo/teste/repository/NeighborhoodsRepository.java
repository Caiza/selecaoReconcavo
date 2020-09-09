package com.reconcavo.teste.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.reconcavo.teste.model.Neighborhoods;

@Repository
public interface NeighborhoodsRepository extends JpaRepository<Neighborhoods, Long>{
	
	@Query("SELECT n FROM Neighborhoods n WHERE n.name LIKE %:nome% LIMIT 10")
	List<Neighborhoods> buscarPorNome(String nome);

}
