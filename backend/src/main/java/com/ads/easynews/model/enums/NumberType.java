package com.ads.easynews.model.enums;

public enum NumberType {
	
	ZERO(0),
	ONE(1), 
	TWO(2);
	
	private int prop;
	
	NumberType(int prop) {
		this.prop = prop;
	}
	
	public int getProp() {
		return this.prop;
	}

}
