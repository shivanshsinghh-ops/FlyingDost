// --- Global Data Lists ---
const globalLanguages = [
    "English (UK)", "English (US)", "English (India)", "Español", "Français", 
    "Deutsch", "Italiano", "日本語 (Japan)", "हिन्दी (India)", "العربية"
];

const globalCountries = [
    "India", "United Kingdom", "United States", "United Arab Emirates", 
    "Canada", "Germany", "France", "Japan", "Australia", "Singapore"
];

const globalCurrencies = [
    "INR - ₹", "USD - $", "GBP - £", "EUR - €", "AED - د.إ", "JPY - ¥"
];

// This function "injects" the lists into your HTML IDs
function populateRegionalSettings() {
    const langSelect = document.getElementById('languageSelect');
    const countrySelect = document.getElementById('countrySelect');
    const currencySelect = document.getElementById('currencySelect');

    // Create the options for each dropdown
    globalLanguages.forEach(item => {
        langSelect.innerHTML += `<option value="${item}">${item}</option>`;
    });

    globalCountries.forEach(item => {
        countrySelect.innerHTML += `<option value="${item}">${item}</option>`;
    });

    globalCurrencies.forEach(item => {
        currencySelect.innerHTML += `<option value="${item}">${item}</option>`;
    });
}


// This function "injects" the lists into your HTML IDs
function populateRegionalSettings() {
    const langSelect = document.getElementById('languageSelect');
    const countrySelect = document.getElementById('countrySelect');
    const currencySelect = document.getElementById('currencySelect');

    // Create the options for each dropdown
    globalLanguages.forEach(item => {
        langSelect.innerHTML += `<option value="${item}">${item}</option>`;
    });

    globalCountries.forEach(item => {
        countrySelect.innerHTML += `<option value="${item}">${item}</option>`;
    });

    globalCurrencies.forEach(item => {
        currencySelect.innerHTML += `<option value="${item}">${item}</option>`;
    });
}
// Function to handle the smooth scroll button
function scrollToForm() {
    document.getElementById('booking-form').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

async function calculateDeal() {
    const basePrice = document.getElementById('basePrice').value;
    const cardSelection = document.getElementById('cardSelect').value;
    const isExhausted = document.getElementById('exhaustedToggle').checked; // Check the toggle!

    if (!basePrice || cardSelection === 'none') {
        alert("Please enter a price and select a card!");
        return;
    }

    let offerData = {};
    let statusMessage = "";

    // Base card data
    if (cardSelection === 'infinia') {
        offerData = { bankName: "HDFC", cardName: "Infinia", discountRate: 0.15, maxCap: 1500.0, convenienceFee: 350.0 };
    } else if (cardSelection === 'sbi') {
        offerData = { bankName: "SBI", cardName: "Cashback", discountRate: 0.05, maxCap: 1000.0, convenienceFee: 300.0 };
    }

    // THE NEW LOGIC: If the offer is exhausted, wipe out the discount!
    if (isExhausted) {
        offerData.discountRate = 0.0;
        offerData.maxCap = 0.0;
        statusMessage = "⚠️ Offer already used! You are paying full price + convenience fee.";
    } else {
        statusMessage = "✅ Discount applied successfully!";
    }

    const requestBody = {
        basePrice: parseFloat(basePrice),
        offer: offerData
    };

    try {
        const response = await fetch('http://localhost:8080/api/pricing/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const finalPrice = await response.json();

        // Update the UI
        document.getElementById('status-message').innerText = statusMessage;
        
        // Change text color based on whether they got a discount
        if (isExhausted) {
            document.getElementById('status-message').style.color = "#e74c3c"; // Red
            document.getElementById('final-price').style.color = "#c0392b";
        } else {
            document.getElementById('status-message').style.color = "#27ae60"; // Green
            document.getElementById('final-price').style.color = "#27ae60";
        }

        document.getElementById('final-price').innerText = "₹" + finalPrice.toFixed(2);
        document.getElementById('result-box').style.display = "block";

    } catch (error) {
        console.error("Error:", error);
        alert("Oops! Make sure your Spring Boot server is running.");
    }
}
// --- Modal Animation Logic ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}


// This is the "Engine Starter"
window.onload = async function() {
    
    // 1. This fills the Globe icon menu with countries
    populateRegionalSettings();

    // 2. This talks to your Java backend to get bank offers
    try {
        const response = await fetch('http://localhost:8080/api/pricing/offers');
        const offers = await response.json();
        const select = document.getElementById('cardSelect');

        offers.forEach(offer => {
            const opt = document.createElement('option');
            opt.value = JSON.stringify(offer);
            opt.innerHTML = `${offer.bankName} ${offer.cardName} (${offer.discountRate * 100}% off)`;
            select.appendChild(opt);
        });
    } catch (error) {
        console.error("Backend not running yet? No problem, we will fix that later.", error);
    }
};