package com.ads.easynews.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "User")
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter private Long Id;
	
	@NotNull
	@Column(name = "Name")
	@Size(max = 50)
	@Getter @Setter private String name;
	
	@NotNull
	@Column(name = "UserName")
	@Size(max = 50)
	@Getter @Setter private String userName;
	
	@NotNull
	@Column(name = "Email")
	@Size(max = 150)
	@Getter @Setter private String email;
	
	@NotNull
	@Column(name = "Password")
	@Size(max = 50)
	@Getter @Setter private String password;
	

}
