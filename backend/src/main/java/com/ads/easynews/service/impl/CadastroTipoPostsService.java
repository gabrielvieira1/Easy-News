package com.ads.easynews.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.easynews.model.TipoPosts;
import com.ads.easynews.repository.ITipoPostsRepository;
import com.ads.easynews.service.ICadastroTipoPostsService;

@Service
public class CadastroTipoPostsService implements ICadastroTipoPostsService{

	@Autowired
	private ITipoPostsRepository _tipoPostsRepository;

	public void updateTipoPosts(TipoPosts tipoPosts) {
		_tipoPostsRepository.updateById(tipoPosts.getId(), tipoPosts.getCod(), tipoPosts.getDescription());
	}
	
}
