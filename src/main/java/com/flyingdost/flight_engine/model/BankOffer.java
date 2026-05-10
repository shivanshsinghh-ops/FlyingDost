package com.flyingdost.flight_engine.model;

public class BankOffer {
    private String bankName;
    private String cardName;
    private double discountRate;
    private double maxCap;
    private double convenienceFee;

    public BankOffer(String bankName, String cardName, double discountRate, double maxCap, double convenienceFee) {
        this.bankName = bankName;
        this.cardName = cardName;
        this.discountRate = discountRate;
        this.maxCap = maxCap;
        this.convenienceFee = convenienceFee;
    }

    public double getDiscountRate() { return discountRate; }
    public double getMaxCap() { return maxCap; }
    public double getConvenienceFee() { return convenienceFee; }
    public String getCardName() { return cardName; }
}
