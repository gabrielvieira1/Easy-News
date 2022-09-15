package com.ads.easynews.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ads.easynews.model.entities.Posts;

public interface IPostsRepository extends JpaRepository<Posts, Long> {
	
}
