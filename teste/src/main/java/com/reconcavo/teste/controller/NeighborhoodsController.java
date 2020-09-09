package com.reconcavo.teste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.reconcavo.teste.model.Neighborhoods;
import com.reconcavo.teste.service.NeighborhoodsService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "neighborhoods", produces = MediaType.APPLICATION_JSON_VALUE)
public class NeighborhoodsController {
	
	@Autowired
	NeighborhoodsService neighborhoodsService;
	
	
	/**
	 * Buscar todos os bairros de Salvador
	 * @return Neighborhoods
	 */
	public List<Neighborhoods> buscarTodosBairros(){
		return neighborhoodsService.buscarTodosBairros();
	}
	
	/**
	 * Buscar todos os bairros de Salvador por nome
	 * O serviço deve retornar os bairros com nomes similares (like clause) para o [name] inserido como parâmetro
	 * @return Neighborhoods
	 */
	@ResponseStatus(value = HttpStatus.OK)
	@GetMapping("/{nome}")
	public List<Neighborhoods> buscarBairroPorNome(@PathVariable String nome){
		return neighborhoodsService.buscarBairroPorNome(nome);
	}
	
	/**
	 * Cadastra um novo Bairro
	 * @return 
	 */
	@PostMapping
	public void cadastrarBairro(@RequestBody final Neighborhoods neighborhoods) {
		neighborhoodsService.cadastrarNovaFarmacia(neighborhoods);
	}

}
