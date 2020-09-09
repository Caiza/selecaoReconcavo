package com.reconcavo.teste.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.reconcavo.teste.VO.FiltroDrugstoresVO;
import com.reconcavo.teste.model.Drugstores;
import com.reconcavo.teste.service.DrugstoresService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/drugstores", produces = MediaType.APPLICATION_JSON_VALUE)
public class DrugstoresController {

	@Autowired
	DrugstoresService drugstoresService;

	/**
	 * Busca todas as farmacias
	 * 
	 * @return Drugstores
	 */
	public List<Drugstores> buscaTodasFarmacia() {
		return drugstoresService.buscarTodasFarmacias();
	}

	/**
	 * Buscar todos os bairros de Salvador por nome O serviço deve retornar os
	 * bairros com nomes similares (like clause) para o [name] inserido como
	 * parâmetro
	 * 
	 * @return Neighborhoods
	 */
	@ResponseStatus(value = HttpStatus.OK)
	@GetMapping("/{nome}")
	public List<Drugstores> buscarFarmaciaPorNome(@PathVariable String nome) {
		return drugstoresService.buscarFarmaciaPorNome(nome);
	}
	
	
	/**
	 * Busca uma lista de farmacia por bairro
	 * 
	 * @return farmacia
	 */
	@ResponseStatus(value = HttpStatus.OK)
	@GetMapping
	public List<Drugstores> buscarFarmaciaPorBairro(@RequestBody FiltroDrugstoresVO filtroDrugstoresVO) {
		return drugstoresService.buscarFarmaciaPorBairro(filtroDrugstoresVO);
	}
	

	/**
	 * Cadastra uma nova farmacia
	 * 
	 * @return
	 */
	@PostMapping
	@Transactional
	public ResponseEntity<Drugstores> cadastrarFarmacia(@RequestBody @Valid Drugstores drugstores,
			UriComponentsBuilder uriBuilder) {
		drugstoresService.cadastrarNovaFarmacia(drugstores);
		URI uri = uriBuilder.path("/drugstores/{id}").buildAndExpand(drugstores.getId()).toUri();
		return ResponseEntity.created(uri).body(drugstores);
	}

	/**
	 * Atualiza uma farmacia
	 * 
	 * @return
	 */
	@PutMapping
	@Transactional
	public ResponseEntity<Drugstores> atualizaFarmacia(@RequestBody Drugstores drugstores) {
		Optional<Drugstores> retorno = drugstoresService.buscarPorId(drugstores.getId());
		if (retorno.isPresent()) {
			drugstoresService.atualizaFarmacia(drugstores);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}

	/**
	 * Deleta uma farmacia passando o id
	 * 
	 * @return
	 */
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> remover(@PathVariable Long id) {
		Optional<Drugstores> retorno = drugstoresService.buscarPorId(id);
		if (retorno.isPresent()) {
			drugstoresService.removerFarmacia(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();

	}

}
