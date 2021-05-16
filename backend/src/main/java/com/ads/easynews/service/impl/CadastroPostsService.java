package com.ads.easynews.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ads.easynews.exception.CampoDataException;
import com.ads.easynews.exception.CamposCadastroVaziosException;
import com.ads.easynews.exception.EasyNewsMessages;
import com.ads.easynews.model.entities.Posts;
import com.ads.easynews.model.enums.TipoPosts;
import com.ads.easynews.repository.IPostsRepository;
import com.ads.easynews.service.ICadastroPostsService;
import com.ads.easynews.utils.ValidarData;

@Service
public class CadastroPostsService implements ICadastroPostsService {
	
	@Autowired
	private IPostsRepository _postsRepository;
	ValidarData validarDate = new ValidarData();

	public Posts createNew(Posts posts) {
		validarCampos(posts);
		
		return _postsRepository.save(posts);
	}
	
	private void validarCampos(Posts posts) {
		
		if(StringUtils.isEmpty(posts.getTitle())) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS002, "titulo"));
		}
		
		if(StringUtils.isEmpty(posts.getDescription())) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS003, "descrição"));
		}
		
//		if(validarDate.validarData(posts.getDate())) {
//			throw new CampoDataException(String.format(EasyNewsMessages.MS004, "data"));
//		}
		
		if(posts.getTipoPosts().getCod() != TipoPosts.NOTICE.getProp() && posts.getTipoPosts().getCod() != TipoPosts.EVENT.getProp()) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS001, "tipo"));
		}
		
		if(posts.getAddress().getLatitude() == null || posts.getAddress().getLongitude() == null) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS004, "endereço"));
		}
	}

}
