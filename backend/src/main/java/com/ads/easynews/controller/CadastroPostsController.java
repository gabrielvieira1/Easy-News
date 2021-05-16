package com.ads.easynews.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ads.easynews.model.entities.Posts;
import com.ads.easynews.service.ICadastroPostsService;

@RestController
@RequestMapping("home/posts")
public class CadastroPostsController {
	
	private ICadastroPostsService _cadastroPostsService;
	
	public CadastroPostsController(ICadastroPostsService cadastroPostsService)
	{
		this._cadastroPostsService = cadastroPostsService;
	}	
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> createNew(@RequestBody Posts posts){
		
		if (posts == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		Posts postsResponse = _cadastroPostsService.createNew(posts);
		
		return new ResponseEntity<>(postsResponse, HttpStatus.CREATED);
	}


}
