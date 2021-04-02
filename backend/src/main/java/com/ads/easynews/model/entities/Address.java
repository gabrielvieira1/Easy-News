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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Address")
@NoArgsConstructor
@AllArgsConstructor
public class Address {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter private Long id;
	
	@Column(name = "Country")
	@Size(max = 50)
	@Getter @Setter private String country;
	
	@Column(name = "State")
	@Size(max = 50)
	@Getter @Setter private String state;
	
	@Column(name = "City")
	@Size(max = 50)
	@Getter @Setter private String city;
	
	@Column(name = "Street")
	@Size(max = 50)
	@Getter @Setter private String street;
	
	@Column(name = "Latitude")
	@Size(max = 50)
	@Getter @Setter private Double latitude;
	
	@Column(name = "Longitude")
	@Size(max = 50)
	@Getter @Setter private Double longitude;
	
	@OneToMany(targetEntity = Posts.class)
	@Getter @Setter private List<Posts> posts = new ArrayList<Posts>();

}
