package com.reconcavo.teste.VO;

public class FiltroDrugstoresVO {
	

	private Long id;
	private int isOpen;
	
	public FiltroDrugstoresVO(Long id, int isOpen) {
		this.id = id;
		this.isOpen = isOpen;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getIsOpen() {
		return isOpen;
	}

	public void setIsOpen(int isOpen) {
		this.isOpen = isOpen;
	}
	
	

}
