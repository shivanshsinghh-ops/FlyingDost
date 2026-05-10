package com.flyingdost.flight_engine.controller;

import com.flyingdost.flight_engine.service.PricingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pricing")
@CrossOrigin // This is a magic tag that allows our future HTML website to talk to this Java backend safely!
public class PricingController {

    private final PricingService pricingService;

    // Connects the controller to the math engine we built earlier
    public PricingController(PricingService pricingService) {
        this.pricingService = pricingService;
    }

    // The actual doorway: It catches a POST request and returns the final price
    @PostMapping("/calculate")
    public double calculatePrice(@RequestBody PricingRequest request) {
        return pricingService.calculateFinalPrice(request.getBasePrice(), request.getOffer());
    }
}

