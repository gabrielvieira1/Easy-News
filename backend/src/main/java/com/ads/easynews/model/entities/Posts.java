package com.ads.easynews.model.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ads.easynews.model.TipoPosts;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Posts")
@NoArgsConstructor
@AllArgsConstructor
public class Posts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter private Long id;
	
	@Column(name = "Title")
	@Getter @Setter private String title;
	
	@Column(name = "Description")
	@Getter @Setter private String description;
	
	@Column(name = "Date")
	@Temporal(TemporalType.DATE)
	@Getter @Setter private Date date;
	
	@Column(name = "Active")
	@Getter @Setter private boolean active;
	
	@Column(name = "Tags")
	@Getter @Setter private String tags;
	
	@OneToOne
	@JoinColumn(name = "Address_id")
	@Getter @Setter private Address address;
	
	@OneToOne
	@JoinColumn(name = "TipoPosts_id")
	@Getter @Setter private TipoPosts tipoPosts;

}
