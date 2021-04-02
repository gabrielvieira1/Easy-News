package com.ads.easynews.model.enums;

public enum TipoPosts {
	
	NOTICE(1), 
	EVENT(2);
	
	private int prop;
	
	TipoPosts(int prop) {
		this.prop = prop;
	}
	
	public int getProp() {
		return this.prop;
	}

}
