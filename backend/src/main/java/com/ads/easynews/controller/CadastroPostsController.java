package com.ads.easynews.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ads.easynews.model.entities.Posts;
import com.ads.easynews.model.enums.NumberType;
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
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<?> findNews() {
		
		List<Posts> news = _cadastroPostsService.findNews();
		
		if(news.size() == 0) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<>(news, HttpStatus.FOUND);
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/updateNew/{id}")
	public ResponseEntity<?> updateNew(@PathVariable("id") long id, @RequestBody Posts news) {
		
		if(id <= NumberType.ZERO.getProp() || news == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		
		
		return null;
	}

	@RequestMapping(method = RequestMethod.DELETE, path = "/deleteNew/{id}")
	public ResponseEntity<?> deleteNew(@PathVariable("id") long id) {
		
		if(id <= NumberType.ZERO.getProp()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		_cadastroPostsService.deleteNewById(id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
