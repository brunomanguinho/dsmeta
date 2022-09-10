package com.manguinho.dsmeta.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //Use @Entity to set up a class to a entity on database
@Table(name="tb_sales")//Use @Table to specify the name of the database table 
public class Sale {
	
	@Id //use @Id above the prop which will be the primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) //use @GeneretaedValue to increment one by one (identity has to be setted on strategy);
	private Long id;
	private String sellerName;
	private Integer visited;
	private Integer deals;
	private double amount;
	private LocalDate date;
	
	public Sale(Long _id, String _sellerName, Integer _visited, Integer _deals,
				double _amount, LocalDate _date) {
		this.id = _id;
		this.sellerName = _sellerName;
		this.visited = _visited;
		this.deals = _deals;
		this.amount = _amount;
		this.date = _date;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Integer getVisited() {
		return visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDeals() {
		return deals;
	}

	public void setDeals(Integer deals) {
		this.deals = deals;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
}
