package com.ads.easynews.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ads.easynews.model.entities.User;

public interface IUserRepository extends JpaRepository<User, Long>{

	@Query("FROM User u WHERE u.email = ?1 and u.password = ?2")
	User buscarUsuarioPorLogin(String email, String password);
	
}
