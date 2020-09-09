package com.reconcavo.teste.model;

import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Drugstores {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Size(min = 10, max = 50)
	@NotBlank(message = "Please enter name")
	private String name;
	
	@Column(name= "fig_round_the_clock")
	private int isOpen;
	
	@Column(name ="foundation_date")
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
	private LocalDateTime foundatioDate;
	
	@ManyToOne
	@JoinColumn(name = "id_neighborhood")
	private Neighborhoods neighborhoods;
		
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public int getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(int isOpen) {
		this.isOpen = isOpen;
	}
	public LocalDateTime getFoundatioDate() {
		return foundatioDate;
	}
	public void setFoundatioDate(LocalDateTime foundatioDate) {
		this.foundatioDate = foundatioDate;
	}
	public Neighborhoods getNeighborhoods() {
		return neighborhoods;
	}
	public void setNeighborhoods(Neighborhoods neighborhoods) {
		this.neighborhoods = neighborhoods;
	}
	
	
	

}
