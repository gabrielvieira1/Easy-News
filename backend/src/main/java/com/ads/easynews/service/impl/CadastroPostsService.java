package com.ads.easynews.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ads.easynews.exception.CampoDataException;
import com.ads.easynews.exception.CamposCadastroVaziosException;
import com.ads.easynews.exception.EasyNewsMessages;
import com.ads.easynews.model.entities.Posts;
import com.ads.easynews.model.enums.TipoPosts;
import com.ads.easynews.repository.IPostsRepository;
import com.ads.easynews.repository.ITipoPostsRepository;
import com.ads.easynews.service.ICadastroAddressService;
import com.ads.easynews.service.ICadastroPostsService;
import com.ads.easynews.service.ICadastroTipoPostsService;
import com.ads.easynews.utils.ValidarData;

@Service
public class CadastroPostsService implements ICadastroPostsService {
	
	@Autowired
	private IPostsRepository _postsRepository;
	
	@Autowired
	private ITipoPostsRepository _tipoPostsRepository;
	
	@Autowired
	private ICadastroAddressService _cadastroAddressService;
	
	@Autowired
	private ICadastroTipoPostsService _cadastroTipoPostsService;
	
	ValidarData validarDate = new ValidarData();

	public Posts createNew(Posts posts) {
		validarCampos(posts);
		
//		cadastrarDependencias(posts);
		return _postsRepository.save(posts);
	}
	
	public List<Posts> findNews(){
		return _postsRepository.findAll();
	}
	
	public Posts updateNew(long id, Posts news) {
		validarCampos(news);
		updateNewsDependencies(news);
		
		return null;
	}
	
	public void deleteNewById(long id) {
		_postsRepository.deleteById(id);
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
//		
//		if(posts.getTipoPosts().getCod() != TipoPosts.NOTICE.getProp() && posts.getTipoPosts().getCod() != TipoPosts.EVENT.getProp()) {
//			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS001, "tipo"));
//		}
//		
//		if(posts.getAddress().getLatitude() == null || posts.getAddress().getLongitude() == null) {
//			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS004, "endereço"));
//		}
	}
	
	private void cadastrarDependencias(Posts posts) {
		_tipoPostsRepository.save(posts.getTipoPosts());
		_cadastroAddressService.cadastrarEnderecoPosts(posts.getAddress());
	}
	
	private void updateNewsDependencies(Posts news) {
		
		if(news.getTipoPosts() != null) {
			_cadastroTipoPostsService.updateTipoPosts(news.getTipoPosts());
		}
		
		if(news.getAddress() != null) {
						
		}
		
	}

}
