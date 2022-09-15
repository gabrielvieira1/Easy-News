package com.ads.easynews.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "User")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	@NotNull
	@Column(name = "Name")
	@Size(max = 50)
	private String name;
	
	@NotNull
	@Column(name = "UserName")
	@Size(max = 50)
	private String userName;
	
	@NotNull
	@Column(name = "Email")
	@Size(max = 150)
	private String email;
	
	@NotNull
	@Column(name = "Password")
	@Size(max = 50)
	private String password;
	
	@ManyToOne
	@JoinColumn(name = "Adress_id")
	private Address address;
	
	public User() {
		
	}

	public User(String name, String userName, String email, String password, Address address) {
		this.name = name;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.address = address;
	}

	public Long getId() {
		return Id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
}
