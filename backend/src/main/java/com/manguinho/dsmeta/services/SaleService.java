package com.manguinho.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manguinho.dsmeta.entities.Sale;
import com.manguinho.dsmeta.repositories.SaleRepository;

@Service //Use @Service to register a class as a system component
public class SaleService {
	
	@Autowired
	private SaleRepository repository;

	public List<Sale> findSales(){
		return repository.findAll();
	}
}
