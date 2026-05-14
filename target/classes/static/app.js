// ==========================================
// 1. GLOBAL DATA (Airports & Settings)
// ==========================================
// ==========================================
// 1. GLOBAL DATA (Airports & Settings)
// ==========================================
const airports = [
    // --- INDIA: EVERY STATE & UT INCLUDED ---
    { city: "Delhi", country: "India", code: "DEL" }, // Delhi
    { city: "Mumbai", country: "India", code: "BOM" }, // Maharashtra
    { city: "Bengaluru", country: "India", code: "BLR" }, // Karnataka
    { city: "Hyderabad", country: "India", code: "HYD" }, // Telangana
    { city: "Chennai", country: "India", code: "MAA" }, // Tamil Nadu
    { city: "Kolkata", country: "India", code: "CCU" }, // West Bengal
    { city: "Ahmedabad", country: "India", code: "AMD" }, // Gujarat
    { city: "Kochi", country: "India", code: "COK" }, // Kerala
    { city: "Pune", country: "India", code: "PNQ" }, // Maharashtra
    { city: "Goa (Mopa)", country: "India", code: "GOX" }, // Goa
    { city: "Guwahati", country: "India", code: "GAU" }, // Assam
    { city: "Lucknow", country: "India", code: "LKO" }, // Uttar Pradesh
    { city: "Jaipur", country: "India", code: "JAI" }, // Rajasthan
    { city: "Bhubaneswar", country: "India", code: "BBI" }, // Odisha
    { city: "Patna", country: "India", code: "PAT" }, // Bihar
    { city: "Indore", country: "India", code: "IDR" }, // Madhya Pradesh
    { city: "Chandigarh", country: "India", code: "IXC" }, // Punjab/Haryana
    { city: "Srinagar", country: "India", code: "SXR" }, // J&K
    { city: "Ranchi", country: "India", code: "IXR" }, // Jharkhand
    { city: "Raipur", country: "India", code: "RPR" }, // Chhattisgarh
    { city: "Dehradun", country: "India", code: "DED" }, // Uttarakhand
    { city: "Port Blair", country: "India", code: "IXZ" }, // Andaman & Nicobar
    { city: "Agartala", country: "India", code: "IXA" }, // Tripura
    { city: "Imphal", country: "India", code: "IMF" }, // Manipur
    { city: "Shillong", country: "India", code: "SHL" }, // Meghalaya
    { city: "Aizawl", country: "India", code: "AJL" }, // Mizoram
    { city: "Dimapur", country: "India", code: "DMU" }, // Nagaland
    { city: "Itanagar", country: "India", code: "HGI" }, // Arunachal Pradesh
    { city: "Leh", country: "India", code: "IXL" }, // Ladakh
    { city: "Puducherry", country: "India", code: "PNY" }, // Puducherry
    { city: "Agatti", country: "India", code: "AGX" }, // Lakshadweep
    { city: "Daman", country: "India", code: "NMB" }, // Dadra & Nagar Haveli and Daman & Diu
    { city: "Shimla", country: "India", code: "SLV" }, // Himachal Pradesh
    { city: "Gangtok (Pakyong)", country: "India", code: "PYG" }, // Sikkim

    // --- TOP 100 GLOBAL HUB AIRPORTS ---
    { city: "Atlanta", country: "USA", code: "ATL" },
    { city: "Dubai", country: "UAE", code: "DXB" },
    { city: "Tokyo", country: "Japan", code: "HND" },
    { city: "Dallas", country: "USA", code: "DFW" },
    { city: "Shanghai", country: "China", code: "PVG" },
    { city: "London", country: "UK", code: "LHR" },
    { city: "Chicago", country: "USA", code: "ORD" },
    { city: "Istanbul", country: "Turkey", code: "IST" },
    { city: "Guangzhou", country: "China", code: "CAN" },
    { city: "Denver", country: "USA", code: "DEN" },
    { city: "Seoul", country: "South Korea", code: "ICN" },
    { city: "Los Angeles", country: "USA", code: "LAX" },
    { city: "Paris", country: "France", code: "CDG" },
    { city: "Beijing", country: "China", code: "PEK" },
    { city: "Singapore", country: "Singapore", code: "SIN" },
    { city: "Amsterdam", country: "Netherlands", code: "AMS" },
    { city: "Madrid", country: "Spain", code: "MAD" },
    { city: "Shenzhen", country: "China", code: "SZX" },
    { city: "Kuala Lumpur", country: "Malaysia", code: "KUL" },
    { city: "Frankfurt", country: "Germany", code: "FRA" },
    { city: "Bangkok", country: "Thailand", code: "BKK" },
    { city: "New York", country: "USA", code: "JFK" },
    { city: "Hong Kong", country: "Hong Kong", code: "HKG" },
    { city: "Orlando", country: "USA", code: "MCO" },
    { city: "Barcelona", country: "Spain", code: "BCN" },
    { city: "Chengdu", country: "China", code: "TFU" },
    { city: "Miami", country: "USA", code: "MIA" },
    { city: "Las Vegas", country: "USA", code: "LAS" },
    { city: "Jakarta", country: "Indonesia", code: "CGK" },
    { city: "San Francisco", country: "USA", code: "SFO" },
    { city: "Doha", country: "Qatar", code: "DOH" },
    { city: "Charlotte", country: "USA", code: "CLT" },
    { city: "Jeddah", country: "Saudi Arabia", code: "JED" },
    { city: "Seattle", country: "USA", code: "SEA" },
    { city: "Manila", country: "Philippines", code: "MNL" },
    { city: "Phoenix", country: "USA", code: "PHX" },
    { city: "Rome", country: "Italy", code: "FCO" },
    { city: "Hangzhou", country: "China", code: "HGH" },
    { city: "Chongqing", country: "China", code: "CKG" },
    { city: "Kunming", country: "China", code: "KMG" },
    { city: "Xi'an", country: "China", code: "XIY" },
    { city: "Houston", country: "USA", code: "IAH" },
    { city: "Toronto", country: "Canada", code: "YYZ" },
    { city: "Munich", country: "Germany", code: "MUC" },
    { city: "Sydney", country: "Australia", code: "SYD" },
    { city: "Mexico City", country: "Mexico", code: "MEX" },
    { city: "Boston", country: "USA", code: "BOS" },
    { city: "Ho Chi Minh City", country: "Vietnam", code: "SGN" },
    { city: "Minneapolis", country: "USA", code: "MSP" },
    { city: "Detroit", country: "USA", code: "DTW" },
    { city: "Melbourne", country: "Australia", code: "MEL" },
    { city: "Cairo", country: "Egypt", code: "CAI" },
    { city: "Lisbon", country: "Portugal", code: "LIS" },
    { city: "Dublin", country: "Ireland", code: "DUB" },
    { city: "Zurich", country: "Switzerland", code: "ZRH" },
    { city: "Vienna", country: "Austria", code: "VIE" },
    { city: "Manchester", country: "UK", code: "MAN" },
    { city: "Copenhagen", country: "Denmark", code: "CPH" },
    { city: "Stockholm", country: "Sweden", code: "ARN" },
    { city: "Brussels", country: "Belgium", code: "BRU" },
    { city: "Oslo", country: "Norway", code: "OSL" },
    { city: "Helsinki", country: "Finland", code: "HEL" },
    { city: "Athens", country: "Greece", code: "ATH" },
    { city: "Prague", country: "Czech Republic", code: "PRG" },
    { city: "Warsaw", country: "Poland", code: "WAW" },
    { city: "Budapest", country: "Hungary", code: "BUD" },
    { city: "Tel Aviv", country: "Israel", code: "TLV" },
    { city: "Johannesburg", country: "South Africa", code: "JNB" },
    { city: "Casablanca", country: "Morocco", code: "CMN" },
    { city: "Addis Ababa", country: "Ethiopia", code: "ADD" },
    { city: "Nairobi", country: "Kenya", code: "NBO" },
    { city: "Cape Town", country: "South Africa", code: "CPT" },
    { city: "Sao Paulo", country: "Brazil", code: "GRU" },
    { city: "Bogota", country: "Colombia", code: "BOG" },
    { city: "Lima", country: "Peru", code: "LIM" },
    { city: "Santiago", country: "Chile", code: "SCL" },
    { city: "Buenos Aires", country: "Argentina", code: "EZE" },
    { city: "Auckland", country: "New Zealand", code: "AKL" },
    { city: "Brisbane", country: "Australia", code: "BNE" },
    { city: "Perth", country: "Australia", code: "PER" },
    { city: "Vancouver", country: "Canada", code: "YVR" },
    { city: "Montreal", country: "Canada", code: "YUL" },
    { city: "Calgary", country: "Canada", code: "YYC" },
    { city: "Riyadh", country: "Saudi Arabia", code: "RUH" },
    { city: "Abu Dhabi", country: "UAE", code: "AUH" },
    { city: "Muscat", country: "Oman", code: "MCT" },
    { city: "Kuwait City", country: "Kuwait", code: "KWI" },
    { city: "Manama", country: "Bahrain", code: "BAH" },
    { city: "Taipei", country: "Taiwan", code: "TPE" },
    { city: "Fukuoka", country: "Japan", code: "FUK" },
    { city: "Osaka", country: "Japan", code: "KIX" },
    { city: "Sapporo", country: "Japan", code: "CTS" },
    { city: "Jeju", country: "South Korea", code: "CJU" },
    { city: "Busan", country: "South Korea", code: "PUS" },
    { city: "Hanoi", country: "Vietnam", code: "HAN" },
    { city: "Bali", country: "Indonesia", code: "DPS" },
    { city: "Phuket", country: "Thailand", code: "HKT" },
    { city: "Male", country: "Maldives", code: "MLE" },
    { city: "Colombo", country: "Sri Lanka", code: "CMB" }
];


const globalLanguages = ["English (UK)", "English (US)", "English (India)", "Español", "Français", "Deutsch", "Italiano", "日本語", "हिन्दी", "العربية"];
const globalCountries = ["India", "United Kingdom", "United States", "United Arab Emirates", "Canada", "Germany", "France", "Japan", "Australia", "Singapore"];
const globalCurrencies = ["INR - ₹", "USD - $", "GBP - £", "EUR - €", "AED - د.إ", "JPY - ¥"];


// ==========================================
// 2. UI INTERACTIONS & ANIMATIONS
// ==========================================

// Smooth Scroll & Reveal Greeting
function scrollToForm() {
    const section = document.getElementById('booking-section');
    const greeting = document.querySelector('.greeting-container');

    section.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        if (greeting) {
            greeting.classList.add('visible');
        }
    }, 600);
}

// Wide Calendar Logic
function openWideCalendar() {
    document.getElementById('calendarOverlay').classList.add('active');
}

function closeWideCalendar() {
    const dateVal = document.getElementById('ai-date-picker').value;
    if(dateVal) {
        // Format date to look nicer (e.g., 2026-05-15 -> 15 May 2026)
        const dateObj = new Date(dateVal);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        document.getElementById('departVal').innerText = dateObj.toLocaleDateString('en-GB', options);
    }
    document.getElementById('calendarOverlay').classList.remove('active');
}

// Swap Locations (The missing function)
function swapLocations() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
}

// Autocomplete Suggestions
function showSuggestions(type) {
    const input = document.getElementById(`${type}Input`);
    let box = document.getElementById(`${type}Suggestions`);
    const query = input.value.toLowerCase();

    // Create the box dynamically if it doesn't exist in HTML yet
    if (!box) {
        box = document.createElement('div');
        box.id = `${type}Suggestions`;
        box.className = 'suggestions-box';
        input.parentNode.appendChild(box);
    }

    box.innerHTML = ''; 

    if (query.length < 1) {
        box.style.display = 'none';
        return;
    }

    const filtered = airports.filter(a => a.city.toLowerCase().includes(query) || a.code.toLowerCase().includes(query));

    if (filtered.length > 0) {
        box.style.display = 'block';
        filtered.forEach(airport => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<span class="city-name">${airport.city}, ${airport.country}</span> <span class="city-code">${airport.code}</span>`;
            div.onclick = () => {
                input.value = `${airport.city} (${airport.code})`;
                box.style.display = 'none';
            };
            box.appendChild(div);
        });
    } else {
        box.style.display = 'none';
    }
}


// ==========================================
// 3. MODAL LOGIC
// ==========================================
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

// Close modals when clicking outside the box
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
};


// ==========================================
// 4. API & CORE LOGIC
// ==========================================

// Flight Search Integration
async function performFlightSearch() {
    const fromLocation = document.getElementById('fromInput').value;
    const toLocation = document.getElementById('toInput').value;
    const travelDate = document.getElementById('departVal').innerText;
    const btn = document.querySelector('.ai-final-search');

    if (!fromLocation || !toLocation || travelDate === "Select Date") {
        alert("Please enter Origin, Destination, and Date before searching.");
        return;
    }

    // UI Loading State
    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-plane fa-spin"></i>';
    btn.style.opacity = '0.7';

    try {
        const response = await fetch(`http://localhost:8080/api/flights/search?from=${fromLocation}&to=${toLocation}&date=${travelDate}`);
        
        if (!response.ok) throw new Error("Server response not OK");
        
        const results = await response.json();
        console.log("Flights found:", results);
        alert(`Success! Found flights from ${fromLocation} to ${toLocation}. (Check console for data)`);
        
    } catch (error) {
        console.error("Backend connection failed:", error);
        alert(`Searching for flights from ${fromLocation} to ${toLocation}...\n(Backend disconnected, showing mockup)`);
    } finally {
        // Reset Button
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
    }
}

// Fare Calculator
async function calculateDeal() {
    const basePrice = document.getElementById('basePrice').value;
    const cardSelection = document.getElementById('cardSelect').value;
    const isExhausted = document.getElementById('exhaustedToggle').checked; 

    if (!basePrice || cardSelection === 'none') {
        alert("Please enter a price and select a card!");
        return;
    }

    let offerData = {};
    let statusMessage = "";

    try {
        offerData = JSON.parse(cardSelection);
    } catch (e) {
        // Fallback hardcoded values if backend didn't supply JSON
        offerData = { bankName: "Unknown", discountRate: 0.10, maxCap: 1000.0, convenienceFee: 300.0 };
    }

    if (isExhausted) {
        offerData.discountRate = 0.0;
        offerData.maxCap = 0.0;
        statusMessage = "⚠️ Offer already used! You are paying full price + convenience fee.";
    } else {
        statusMessage = "✅ Discount applied successfully!";
    }

    const requestBody = { basePrice: parseFloat(basePrice), offer: offerData };

    try {
        const response = await fetch('http://localhost:8080/api/pricing/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const finalPrice = await response.json();

        // Update UI
        document.getElementById('status-message').innerText = statusMessage;
        document.getElementById('status-message').style.color = isExhausted ? "#e74c3c" : "#27ae60";
        document.getElementById('final-price').style.color = isExhausted ? "#c0392b" : "#27ae60";
        document.getElementById('final-price').innerText = "₹" + finalPrice.toFixed(2);
        document.getElementById('result-box').style.display = "block";

    } catch (error) {
        console.error("Error:", error);
        
        // Fallback UI math if server is dead
        const discount = Math.min(parseFloat(basePrice) * offerData.discountRate, offerData.maxCap);
        const fallbackPrice = parseFloat(basePrice) - discount + offerData.convenienceFee;
        
        document.getElementById('status-message').innerText = statusMessage + " (Offline Mode)";
        document.getElementById('final-price').innerText = "₹" + fallbackPrice.toFixed(2);
        document.getElementById('result-box').style.display = "block";
    }
}

// Populate Regional Settings
function populateRegionalSettings() {
    const langSelect = document.getElementById('languageSelect');
    const countrySelect = document.getElementById('countrySelect');
    const currencySelect = document.getElementById('currencySelect');

    if(langSelect && countrySelect && currencySelect) {
        globalLanguages.forEach(item => langSelect.innerHTML += `<option value="${item}">${item}</option>`);
        globalCountries.forEach(item => countrySelect.innerHTML += `<option value="${item}">${item}</option>`);
        globalCurrencies.forEach(item => currencySelect.innerHTML += `<option value="${item}">${item}</option>`);
    }
}


// ==========================================
// 5. INITIALIZATION
// ==========================================
window.onload = async function() {
    populateRegionalSettings();

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
        console.log("Backend not running. Populating fake offers for UI testing.");
        const select = document.getElementById('cardSelect');
        if(select) {
            select.innerHTML += `<option value='{"bankName":"HDFC","cardName":"Infinia","discountRate":0.15,"maxCap":1500,"convenienceFee":350}'>HDFC Infinia (15% off)</option>`;
            select.innerHTML += `<option value='{"bankName":"SBI","cardName":"Cashback","discountRate":0.05,"maxCap":1000,"convenienceFee":300}'>SBI Cashback (5% off)</option>`;
        }
    }
};

const globalLanguages = ["English (UK)", "English (US)", "English (India)", "Español", "Français", "Deutsch", "Italiano", "日本語", "हिन्दी", "العربية"];
const globalCountries = ["India", "United Kingdom", "United States", "United Arab Emirates", "Canada", "Germany", "France", "Japan", "Australia", "Singapore"];
const globalCurrencies = ["INR - ₹", "USD - $", "GBP - £", "EUR - €", "AED - د.إ", "JPY - ¥"];


// ==========================================
// 2. UI INTERACTIONS & ANIMATIONS
// ==========================================

// Smooth Scroll & Reveal Greeting
function scrollToForm() {
    const section = document.getElementById('booking-section');
    const greeting = document.querySelector('.greeting-container');

    section.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        if (greeting) {
            greeting.classList.add('visible');
        }
    }, 600);
}

// Wide Calendar Logic
function openWideCalendar() {
    document.getElementById('calendarOverlay').classList.add('active');
}

function closeWideCalendar() {
    const dateVal = document.getElementById('ai-date-picker').value;
    if(dateVal) {
        // Format date to look nicer (e.g., 2026-05-15 -> 15 May 2026)
        const dateObj = new Date(dateVal);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        document.getElementById('departVal').innerText = dateObj.toLocaleDateString('en-GB', options);
    }
    document.getElementById('calendarOverlay').classList.remove('active');
}

// Swap Locations (The missing function)
function swapLocations() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
}

// Autocomplete Suggestions
function showSuggestions(type) {
    const input = document.getElementById(`${type}Input`);
    let box = document.getElementById(`${type}Suggestions`);
    const query = input.value.toLowerCase();

    // Create the box dynamically if it doesn't exist in HTML yet
    if (!box) {
        box = document.createElement('div');
        box.id = `${type}Suggestions`;
        box.className = 'suggestions-box';
        input.parentNode.appendChild(box);
    }

    box.innerHTML = ''; 

    if (query.length < 1) {
        box.style.display = 'none';
        return;
    }

    const filtered = airports.filter(a => a.city.toLowerCase().includes(query) || a.code.toLowerCase().includes(query));

    if (filtered.length > 0) {
        box.style.display = 'block';
        filtered.forEach(airport => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<span class="city-name">${airport.city}, ${airport.country}</span> <span class="city-code">${airport.code}</span>`;
            div.onclick = () => {
                input.value = `${airport.city} (${airport.code})`;
                box.style.display = 'none';
            };
            box.appendChild(div);
        });
    } else {
        box.style.display = 'none';
    }
}


// ==========================================
// 3. MODAL LOGIC
// ==========================================
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

// Close modals when clicking outside the box
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
};


// ==========================================
// 4. API & CORE LOGIC
// ==========================================

// Flight Search Integration
async function performFlightSearch() {
    const fromLocation = document.getElementById('fromInput').value;
    const toLocation = document.getElementById('toInput').value;
    const travelDate = document.getElementById('departVal').innerText;
    const btn = document.querySelector('.ai-final-search');

    if (!fromLocation || !toLocation || travelDate === "Select Date") {
        alert("Please enter Origin, Destination, and Date before searching.");
        return;
    }

    // UI Loading State
    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-plane fa-spin"></i>';
    btn.style.opacity = '0.7';

    try {
        const response = await fetch(`http://localhost:8080/api/flights/search?from=${fromLocation}&to=${toLocation}&date=${travelDate}`);
        
        if (!response.ok) throw new Error("Server response not OK");
        
        const results = await response.json();
        console.log("Flights found:", results);
        alert(`Success! Found flights from ${fromLocation} to ${toLocation}. (Check console for data)`);
        
    } catch (error) {
        console.error("Backend connection failed:", error);
        alert(`Searching for flights from ${fromLocation} to ${toLocation}...\n(Backend disconnected, showing mockup)`);
    } finally {
        // Reset Button
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
    }
}

// Fare Calculator
async function calculateDeal() {
    const basePrice = document.getElementById('basePrice').value;
    const cardSelection = document.getElementById('cardSelect').value;
    const isExhausted = document.getElementById('exhaustedToggle').checked; 

    if (!basePrice || cardSelection === 'none') {
        alert("Please enter a price and select a card!");
        return;
    }

    let offerData = {};
    let statusMessage = "";

    try {
        offerData = JSON.parse(cardSelection);
    } catch (e) {
        // Fallback hardcoded values if backend didn't supply JSON
        offerData = { bankName: "Unknown", discountRate: 0.10, maxCap: 1000.0, convenienceFee: 300.0 };
    }

    if (isExhausted) {
        offerData.discountRate = 0.0;
        offerData.maxCap = 0.0;
        statusMessage = "⚠️ Offer already used! You are paying full price + convenience fee.";
    } else {
        statusMessage = "✅ Discount applied successfully!";
    }

    const requestBody = { basePrice: parseFloat(basePrice), offer: offerData };

    try {
        const response = await fetch('http://localhost:8080/api/pricing/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const finalPrice = await response.json();

        // Update UI
        document.getElementById('status-message').innerText = statusMessage;
        document.getElementById('status-message').style.color = isExhausted ? "#e74c3c" : "#27ae60";
        document.getElementById('final-price').style.color = isExhausted ? "#c0392b" : "#27ae60";
        document.getElementById('final-price').innerText = "₹" + finalPrice.toFixed(2);
        document.getElementById('result-box').style.display = "block";

    } catch (error) {
        console.error("Error:", error);
        
        // Fallback UI math if server is dead
        const discount = Math.min(parseFloat(basePrice) * offerData.discountRate, offerData.maxCap);
        const fallbackPrice = parseFloat(basePrice) - discount + offerData.convenienceFee;
        
        document.getElementById('status-message').innerText = statusMessage + " (Offline Mode)";
        document.getElementById('final-price').innerText = "₹" + fallbackPrice.toFixed(2);
        document.getElementById('result-box').style.display = "block";
    }
}

// Populate Regional Settings
function populateRegionalSettings() {
    const langSelect = document.getElementById('languageSelect');
    const countrySelect = document.getElementById('countrySelect');
    const currencySelect = document.getElementById('currencySelect');

    if(langSelect && countrySelect && currencySelect) {
        globalLanguages.forEach(item => langSelect.innerHTML += `<option value="${item}">${item}</option>`);
        globalCountries.forEach(item => countrySelect.innerHTML += `<option value="${item}">${item}</option>`);
        globalCurrencies.forEach(item => currencySelect.innerHTML += `<option value="${item}">${item}</option>`);
    }
}


// ==========================================
// 5. INITIALIZATION
// ==========================================
window.onload = async function() {
    populateRegionalSettings();

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
        console.log("Backend not running. Populating fake offers for UI testing.");
        const select = document.getElementById('cardSelect');
        if(select) {
            select.innerHTML += `<option value='{"bankName":"HDFC","cardName":"Infinia","discountRate":0.15,"maxCap":1500,"convenienceFee":350}'>HDFC Infinia (15% off)</option>`;
            select.innerHTML += `<option value='{"bankName":"SBI","cardName":"Cashback","discountRate":0.05,"maxCap":1000,"convenienceFee":300}'>SBI Cashback (5% off)</option>`;
        }
    }
};