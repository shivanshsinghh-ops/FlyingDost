package com.flyingdost.flight_engine.controller;

import com.flyingdost.flight_engine.model.BankOffer;

public class PricingRequest {
    private double basePrice;
    private BankOffer offer;

    // Getters and Setters so Spring Boot can read the data
    public double getBasePrice() { return basePrice; }
    public void setBasePrice(double basePrice) { this.basePrice = basePrice; }
    
    public BankOffer getOffer() { return offer; }
    public void setOffer(BankOffer offer) { this.offer = offer; }
}
