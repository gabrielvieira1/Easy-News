package com.ads.easynews.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ads.easynews.model.entities.Address;

public interface ICadastroAddressRepository extends JpaRepository<Address, Long>{
	
}
