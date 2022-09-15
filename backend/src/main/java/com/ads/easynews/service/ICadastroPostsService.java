package com.ads.easynews.service;

import java.util.List;

import com.ads.easynews.model.entities.Posts;

public interface ICadastroPostsService {

	Posts createNew(Posts posts);
	
	List<Posts> findNews();
	
	void deleteNewById(long id);
}
