package com.reconcavo.teste.service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.reconcavo.teste.VO.FiltroDrugstoresVO;
import com.reconcavo.teste.model.Drugstores;
import com.reconcavo.teste.repository.DrugstoresRepository;

@Service
public class DrugstoresService {
	
	@Autowired
	DrugstoresRepository drugstoresRepository;

	public List<Drugstores> buscarTodasFarmacias() {
		return drugstoresRepository.findAll();
	}

	public List<Drugstores> buscarFarmaciaPorNome(String nome) {
		return drugstoresRepository.buscarPorNome(nome);

	}

	public void cadastrarNovaFarmacia(Drugstores drugstores) {
		drugstores.setFoundatioDate(LocalDateTime.now());
		drugstoresRepository.save(drugstores);
	}

	public void removerFarmacia(Long id) {
		drugstoresRepository.deleteById(id);		
	}

	public void atualizaFarmacia(Drugstores drugstores) {
		drugstoresRepository.save(drugstores);
		
	}

	public Optional<Drugstores> buscarPorId(Long id) {
		return drugstoresRepository.findById(id);
	}

	public List<Drugstores> buscarFarmaciaPorBairro(FiltroDrugstoresVO filtroDrugstoresVO) {
		long id = filtroDrugstoresVO.getId();
		int isOpen = filtroDrugstoresVO.getIsOpen();
		return drugstoresRepository.buscarFarmaciaPorBairro(id, isOpen);
	}

}
