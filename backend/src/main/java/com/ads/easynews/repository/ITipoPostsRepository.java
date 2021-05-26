package com.ads.easynews.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ads.easynews.model.TipoPosts;

public interface ITipoPostsRepository extends JpaRepository<TipoPosts, Long>{

	@Modifying
	@Query(value = "UPDATE TipoPosts tp set Cod =: cod, Description =: tipoPostsDescription where id =?1")
	void updateById(long id, int cod, String tipoPostsDescription);
	
}
