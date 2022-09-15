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
public class Posts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "Title")
	private String title;
	
	@Column(name = "Description")
	private String description;
	
	@Column(name = "Date")
	@Temporal(TemporalType.DATE)
	private Date date;
	
	@Column(name = "Active")
	private boolean active;
	
	@Column(name = "Tags")
	private String tags;
	
	@OneToOne
	@JoinColumn(name = "Address_id")
	private Address address;
	
	@OneToOne
	@JoinColumn(name = "TipoPosts_id")
	private TipoPosts tipoPosts;

	public Posts() {
		
	}

	public Posts(String title, String description, Date date, boolean active, String tags, Address address, TipoPosts tipoPosts) {
		super();
		this.title = title;
		this.description = description;
		this.date = date;
		this.active = active;
		this.tags = tags;
		this.address = address;
		this.tipoPosts = tipoPosts;
	}

	public Long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public TipoPosts getTipoPosts() {
		return tipoPosts;
	}

	public void setTipoPosts(TipoPosts tipoPosts) {
		this.tipoPosts = tipoPosts;
	}
	
	

}
