package com.reconcavo.teste.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reconcavo.teste.model.Neighborhoods;
import com.reconcavo.teste.repository.NeighborhoodsRepository;

@Service
public class NeighborhoodsService {

	@Autowired
	NeighborhoodsRepository neighborhoodsRepository;

	public List<Neighborhoods> buscarTodosBairros() {
		return neighborhoodsRepository.findAll();
	}

	public List<Neighborhoods> buscarBairroPorNome(String nome) {
		return neighborhoodsRepository.buscarPorNome(nome);

	}

	public void cadastrarNovaFarmacia(Neighborhoods neighborhoods) {
		neighborhoodsRepository.save(neighborhoods);
	}

}
