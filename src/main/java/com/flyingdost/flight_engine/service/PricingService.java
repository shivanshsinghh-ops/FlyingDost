package com.flyingdost.flight_engine.service;

import com.flyingdost.flight_engine.model.BankOffer;
import org.springframework.stereotype.Service;

@Service
public class PricingService {

    public double calculateFinalPrice(double basePrice, BankOffer offer) {
        // Calculate the raw discount
        double rawDiscount = basePrice * offer.getDiscountRate();

        // Apply the maximum cap so the discount doesn't exceed the limit
        double finalDiscount = Math.min(rawDiscount, offer.getMaxCap());

        // Subtract discount from base price and add the convenience fee
        return (basePrice - finalDiscount) + offer.getConvenienceFee();
    }
}
