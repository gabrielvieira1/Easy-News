package com.ads.easynews.model.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Address")
public class Address {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "Country")
	@Size(max = 50)
	private String country;
	
	@Column(name = "State")
	@Size(max = 50)
	private String state;
	
	@Column(name = "City")
	@Size(max = 50)
	private String city;
	
	@Column(name = "Street")
	@Size(max = 50)
	private String street;
	
	@Column(name = "Latitude")
	private Double latitude;
	
	@Column(name = "Longitude")
	private Double longitude;
	
	@OneToMany(targetEntity = Posts.class)
	private List<Posts> posts = new ArrayList<Posts>();
	
	public Address() {
		
	}
	
	public Address(String country, String state, String city, String street, Double latitude, Double longitude) {
		this.country = country;
		this.state = state;
		this.city = city;
		this.street = street;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public List<Posts> getPosts() {
		return posts;
	}

	public void setPosts(List<Posts> posts) {
		this.posts = posts;
	}

	public Long getId() {
		return id;
	}

}
