package com.ads.easynews.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ads.easynews.model.entities.User;

public interface IUserRepository extends JpaRepository<User, Long>{

}
