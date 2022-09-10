package com.manguinho.dsmeta.controllers;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.manguinho.dsmeta.entities.Sale;
import com.manguinho.dsmeta.services.SaleService;
import com.manguinho.dsmeta.services.SmsService;

@RestController
@RequestMapping(value="/sales") // Specifies the web route 
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@Autowired
	private SmsService smsService;
	
	@GetMapping // @GetMapping links this method to a GET request
	public Page<Sale> findSales(
			@RequestParam(value="minDate", defaultValue = "") String minDate, 
			@RequestParam(value="maxDate", defaultValue = "") String maxDate,
			Pageable pageable){
		return service.findSales(minDate, maxDate, pageable);
	}
	//@RequestParam specifies that the param came from the request (GET on this case)
	//and what is the name of the param on that request
	
	@GetMapping("/{id}/notification") //full path: /sales/"id_number"/notification
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	}
}
