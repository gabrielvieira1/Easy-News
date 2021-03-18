package br.com.easynews.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TesteController {
	
	@RequestMapping(method = RequestMethod.GET, path = "")
	public String teste() {
		return "Hello World!";
	}

}
