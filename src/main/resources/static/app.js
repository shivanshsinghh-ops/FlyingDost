// ==========================================
// 1. AIRPORT DATABASE (FULL LIST)
// ==========================================
const airports = [
    // --- INDIA ---
    { city: "Delhi", country: "India", code: "DEL" }, { city: "Mumbai", country: "India", code: "BOM" },
    { city: "Bengaluru", country: "India", code: "BLR" }, { city: "Hyderabad", country: "India", code: "HYD" },
    { city: "Chennai", country: "India", code: "MAA" }, { city: "Kolkata", country: "India", code: "CCU" },
    { city: "Ahmedabad", country: "India", code: "AMD" }, { city: "Kochi", country: "India", code: "COK" },
    { city: "Pune", country: "India", code: "PNQ" }, { city: "Goa (Mopa)", country: "India", code: "GOX" },
    { city: "Guwahati", country: "India", code: "GAU" }, { city: "Lucknow", country: "India", code: "LKO" },
    { city: "Jaipur", country: "India", code: "JAI" }, { city: "Bhubaneswar", country: "India", code: "BBI" },
    { city: "Patna", country: "India", code: "PAT" }, { city: "Indore", country: "India", code: "IDR" },
    { city: "Chandigarh", country: "India", code: "IXC" }, { city: "Srinagar", country: "India", code: "SXR" },
    { city: "Ranchi", country: "India", code: "IXR" }, { city: "Raipur", country: "India", code: "RPR" },
    { city: "Dehradun", country: "India", code: "DED" }, { city: "Port Blair", country: "India", code: "IXZ" },
    { city: "Agartala", country: "India", code: "IXA" }, { city: "Imphal", country: "India", code: "IMF" },
    { city: "Shillong", country: "India", code: "SHL" }, { city: "Aizawl", country: "India", code: "AJL" },
    { city: "Dimapur", country: "India", code: "DMU" }, { city: "Itanagar", country: "India", code: "HGI" },
    { city: "Leh", country: "India", code: "IXL" }, { city: "Puducherry", country: "India", code: "PNY" },
    { city: "Agatti", country: "India", code: "AGX" }, { city: "Daman", country: "India", code: "NMB" },
    { city: "Shimla", country: "India", code: "SLV" }, { city: "Gangtok (Pakyong)", country: "India", code: "PYG" },
    // --- GLOBAL ---
    { city: "Atlanta", country: "USA", code: "ATL" }, { city: "Dubai", country: "UAE", code: "DXB" },
    { city: "Tokyo", country: "Japan", code: "HND" }, { city: "Dallas", country: "USA", code: "DFW" },
    { city: "Shanghai", country: "China", code: "PVG" }, { city: "London", country: "UK", code: "LHR" },
    { city: "Chicago", country: "USA", code: "ORD" }, { city: "Istanbul", country: "Turkey", code: "IST" },
    { city: "Guangzhou", country: "China", code: "CAN" }, { city: "Denver", country: "USA", code: "DEN" },
    { city: "Seoul", country: "South Korea", code: "ICN" }, { city: "Los Angeles", country: "USA", code: "LAX" },
    { city: "Paris", country: "France", code: "CDG" }, { city: "Beijing", country: "China", code: "PEK" },
    { city: "Singapore", country: "Singapore", code: "SIN" }, { city: "Amsterdam", country: "Netherlands", code: "AMS" },
    { city: "Madrid", country: "Spain", code: "MAD" }, { city: "Shenzhen", country: "China", code: "SZX" },
    { city: "Kuala Lumpur", country: "Malaysia", code: "KUL" }, { city: "Frankfurt", country: "Germany", code: "FRA" },
    { city: "Bangkok", country: "Thailand", code: "BKK" }, { city: "New York", country: "USA", code: "JFK" },
    { city: "Hong Kong", country: "Hong Kong", code: "HKG" }, { city: "Orlando", country: "USA", code: "MCO" },
    { city: "Barcelona", country: "Spain", code: "BCN" }, { city: "Chengdu", country: "China", code: "TFU" },
    { city: "Miami", country: "USA", code: "MIA" }, { city: "Las Vegas", country: "USA", code: "LAS" },
    { city: "Jakarta", country: "Indonesia", code: "CGK" }, { city: "San Francisco", country: "USA", code: "SFO" },
    { city: "Doha", country: "Qatar", code: "DOH" }, { city: "Charlotte", country: "USA", code: "CLT" },
    { city: "Jeddah", country: "Saudi Arabia", code: "JED" }, { city: "Seattle", country: "USA", code: "SEA" },
    { city: "Manila", country: "Philippines", code: "MNL" }, { city: "Phoenix", country: "USA", code: "PHX" },
    { city: "Rome", country: "Italy", code: "FCO" }, { city: "Hangzhou", country: "China", code: "HGH" },
    { city: "Chongqing", country: "China", code: "CKG" }, { city: "Kunming", country: "China", code: "KMG" },
    { city: "Xi'an", country: "China", code: "XIY" }, { city: "Houston", country: "USA", code: "IAH" },
    { city: "Toronto", country: "Canada", code: "YYZ" }, { city: "Munich", country: "Germany", code: "MUC" },
    { city: "Sydney", country: "Australia", code: "SYD" }, { city: "Mexico City", country: "Mexico", code: "MEX" },
    { city: "Boston", country: "USA", code: "BOS" }, { city: "Ho Chi Minh City", country: "Vietnam", code: "SGN" },
    { city: "Minneapolis", country: "USA", code: "MSP" }, { city: "Detroit", country: "USA", code: "DTW" },
    { city: "Melbourne", country: "Australia", code: "MEL" }, { city: "Cairo", country: "Egypt", code: "CAI" },
    { city: "Lisbon", country: "Portugal", code: "LIS" }, { city: "Dublin", country: "Ireland", code: "DUB" },
    { city: "Zurich", country: "Switzerland", code: "ZRH" }, { city: "Vienna", country: "Austria", code: "VIE" },
    { city: "Manchester", country: "UK", code: "MAN" }, { city: "Copenhagen", country: "Denmark", code: "CPH" },
    { city: "Stockholm", country: "Sweden", code: "ARN" }, { city: "Brussels", country: "Belgium", code: "BRU" },
    { city: "Oslo", country: "Norway", code: "OSL" }, { city: "Helsinki", country: "Finland", code: "HEL" },
    { city: "Athens", country: "Greece", code: "ATH" }, { city: "Prague", country: "Czech Republic", code: "PRG" },
    { city: "Warsaw", country: "Poland", code: "WAW" }, { city: "Budapest", country: "Hungary", code: "BUD" },
    { city: "Tel Aviv", country: "Israel", code: "TLV" }, { city: "Johannesburg", country: "South Africa", code: "JNB" },
    { city: "Casablanca", country: "Morocco", code: "CMN" }, { city: "Addis Ababa", country: "Ethiopia", code: "ADD" },
    { city: "Nairobi", country: "Kenya", code: "NBO" }, { city: "Cape Town", country: "South Africa", code: "CPT" },
    { city: "Sao Paulo", country: "Brazil", code: "GRU" }, { city: "Bogota", country: "Colombia", code: "BOG" },
    { city: "Lima", country: "Peru", code: "LIM" }, { city: "Santiago", country: "Chile", code: "SCL" },
    { city: "Buenos Aires", country: "Argentina", code: "EZE" }, { city: "Auckland", country: "New Zealand", code: "AKL" },
    { city: "Brisbane", country: "Australia", code: "BNE" }, { city: "Perth", country: "Australia", code: "PER" },
    { city: "Vancouver", country: "Canada", code: "YVR" }, { city: "Montreal", country: "Canada", code: "YUL" },
    { city: "Calgary", country: "Canada", code: "YYC" }, { city: "Riyadh", country: "Saudi Arabia", code: "RUH" },
    { city: "Abu Dhabi", country: "UAE", code: "AUH" }, { city: "Muscat", country: "Oman", code: "MCT" },
    { city: "Kuwait City", country: "Kuwait", code: "KWI" }, { city: "Manama", country: "Bahrain", code: "BAH" },
    { city: "Taipei", country: "Taiwan", code: "TPE" }, { city: "Fukuoka", country: "Japan", code: "FUK" },
    { city: "Osaka", country: "Japan", code: "KIX" }, { city: "Sapporo", country: "Japan", code: "CTS" },
    { city: "Jeju", country: "South Korea", code: "CJU" }, { city: "Busan", country: "South Korea", code: "PUS" },
    { city: "Hanoi", country: "Vietnam", code: "HAN" }, { city: "Bali", country: "Indonesia", code: "DPS" },
    { city: "Phuket", country: "Thailand", code: "HKT" }, { city: "Male", country: "Maldives", code: "MLE" },
    { city: "Colombo", country: "Sri Lanka", code: "CMB" }
];

// ==========================================
// 2. USER STATE & GLOBAL VARIABLES
// ==========================================
const userWallet = {
    "AI": 15000, "EK": 8500, "BA": 12000, "UK": 5000, "6E": 3000
};
const pointValueINR = 0.50; 
let currentSearchFlights = []; 
let pax = { adult: 1, child: 0, infant: 0 };

// ==========================================
// 3. AUTOCOMPLETE & UI TOGGLES
// ==========================================
function showSuggestions(type) {
    const input = document.getElementById(`${type}Input`);
    let box = document.getElementById(`${type}Suggestions`);
    const query = input.value.toLowerCase();

    if (!box) {
        box = document.createElement('div');
        box.id = `${type}Suggestions`;
        box.className = 'suggestions-box';
        input.parentNode.appendChild(box);
    }

    box.innerHTML = ''; 
    if (query.length < 1) { box.style.display = 'none'; return; }

    const filtered = airports.filter(a => a.city.toLowerCase().includes(query) || a.code.toLowerCase().includes(query));

    if (filtered.length > 0) {
        box.style.display = 'block';
        filtered.forEach(airport => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<span class="city-code">${airport.code}</span><span class="city-name">${airport.city}, ${airport.country}</span>`;
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

// Global Click Away Listener
document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-unit.from') && !e.target.closest('.search-unit.to')) {
        document.querySelectorAll('.suggestions-box').forEach(box => box.style.display = 'none');
    }
    if (!e.target.closest('.search-unit.pax')) {
        const paxBox = document.getElementById('paxDropdown');
        if (paxBox) paxBox.style.display = 'none';
    }
    if (e.target.classList.contains('modal-overlay')) {
        closeModal(e.target.id);
    }
});

// ==========================================
// 4. SWAP LOCATIONS & CALENDAR & PAX
// ==========================================
function swapLocations() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    const tempValue = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = tempValue;

    const swapIcon = document.querySelector('.ai-swap-btn i');
    if (swapIcon) {
        swapIcon.style.transition = 'transform 0.3s ease-in-out';
        swapIcon.style.transform = 'rotate(180deg)';
        setTimeout(() => { swapIcon.style.transition = 'none'; swapIcon.style.transform = 'rotate(0deg)'; }, 300);
    }
}

function openWideCalendar() { document.getElementById('calendarOverlay').style.display = 'flex'; renderDummyDays(); }
function closeCalendar() { document.getElementById('calendarOverlay').style.display = 'none'; }

function renderDummyDays() {
    ['month1Grid', 'month2Grid'].forEach(id => {
        const grid = document.getElementById(id);
        if (!grid) return; 
        grid.innerHTML = ''; 
        for(let i=0; i<3; i++) grid.innerHTML += `<div></div>`;
        for(let i=1; i<=31; i++) grid.innerHTML += `<div class="day-cell" onclick="selectDay(this)">${i}</div>`;
    });
}

function selectDay(element) {
    document.querySelectorAll('.day-cell').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    const departVal = document.getElementById('departVal');
    if (departVal) {
        departVal.innerText = `${element.innerText.padStart(2, '0')} May 2026`;
        departVal.style.color = '#111';
    }
}

function togglePax() {
    const dropdown = document.getElementById('paxDropdown');
    if(dropdown) dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function updatePax(type, change) {
    const newCount = pax[type] + change;
    if (newCount < 0 || (type === 'adult' && newCount < 1) || (type === 'infant' && newCount > pax.adult)) return; 
    pax[type] = newCount;
    document.getElementById(`${type}Count`).innerText = pax[type];
    
    let parts = [];
    if (pax.adult > 0) parts.push(`${pax.adult} Adult${pax.adult > 1 ? 's' : ''}`);
    if (pax.child > 0) parts.push(`${pax.child} Child${pax.child > 1 ? 'ren' : ''}`);
    if (pax.infant > 0) parts.push(`${pax.infant} Infant${pax.infant > 1 ? 's' : ''}`);
    document.getElementById('paxVal').innerText = parts.join(', ');
}

// ==========================================
// 5. MODALS & NAVIGATION
// ==========================================
function scrollToForm() {
    document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        const greeting = document.querySelector('.greeting-container');
        if(greeting) greeting.classList.add('visible');
    }, 600);
}
function openModal(id) { const m = document.getElementById(id); if(m) m.classList.add('active'); }
function closeModal(id) { const m = document.getElementById(id); if(m) m.classList.remove('active'); }

// ==========================================
// 6. MASTER SEARCH & LOYALTY ENGINE
// ==========================================
const airlinesDomestic = [
    { name: "IndiGo", code: "6E" }, { name: "Air India", code: "AI" }, { name: "Vistara", code: "UK" }, 
    { name: "SpiceJet", code: "SG" }, { name: "Air India Express", code: "IX" }, { name: "Akasa Air", code: "QP" }
];
const airlinesInternational = [
    { name: "Emirates", code: "EK" }, { name: "Etihad Airways", code: "EY" }, { name: "Qatar Airways", code: "QR" }, 
    { name: "British Airways", code: "BA" }, { name: "Lufthansa", code: "LH" }, { name: "Singapore Airlines", code: "SQ" },
    { name: "Air India", code: "AI" }, { name: "Vistara", code: "UK" }, { name: "Delta Air Lines", code: "DL" }
];

function performFlightSearch() {
    const rawOrigin = document.getElementById('fromInput').value;
    const rawDest = document.getElementById('toInput').value;
    const dateVal = document.getElementById('departVal').innerText;
    
    if (!rawOrigin || !rawDest || dateVal === "Select Date") {
        alert("Please select Origin, Destination, and Date from the dropdowns."); return;
    }

    const container = document.getElementById('flight-results-container');
    if (!container) { console.error("Missing flight-results-container in HTML!"); return; }

    const originMatch = rawOrigin.match(/\((.*?)\)/);
    const destMatch = rawDest.match(/\((.*?)\)/);
    const originCode = originMatch ? originMatch[1] : rawOrigin.substring(0, 3).toUpperCase();
    const destCode = destMatch ? destMatch[1] : rawDest.substring(0, 3).toUpperCase();
    
    const originData = airports.find(a => a.code === originCode) || { city: rawOrigin.split(' (')[0], country: "India", code: originCode };
    const destData = airports.find(a => a.code === destCode) || { city: rawDest.split(' (')[0], country: "India", code: destCode };
    const isDomestic = (originData.country === "India" && destData.country === "India");
    
    container.style.display = 'flex';
    container.innerHTML = `<div style="text-align: center; color: white; padding: 40px;"><i class="fa-solid fa-plane fa-bounce" style="font-size: 30px; color: #ed1c24; margin-bottom: 15px;"></i><h3>Searching routes across ${isDomestic ? 'India' : 'the Globe'}...</h3></div>`;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
        const totalToGenerate = Math.floor(Math.random() * ((isDomestic ? 11 : 22) - (isDomestic ? 7 : 15) + 1)) + (isDomestic ? 7 : 15);
        const mockFlights = [];
        const pool = isDomestic ? airlinesDomestic : airlinesInternational;

        for (let i = 0; i < totalToGenerate; i++) {
            const airline = pool[Math.floor(Math.random() * pool.length)];
            const avgMinutes = isDomestic ? (Math.random() * 120 + 60) : (Math.random() * 480 + 300); 
            const hours = Math.floor(avgMinutes / 60);
            const minutes = Math.floor(avgMinutes % 60);
            const depHour = Math.floor(Math.random() * 24);
            const depMin = Math.floor(Math.random() * 60);
            const arrHour = Math.floor((depHour + hours + (depMin + minutes >= 60 ? 1 : 0)) % 24);
            const arrMin = (depMin + minutes) % 60;
            const basePrice = isDomestic ? 3500 : 35000;
            const variation = isDomestic ? (Math.random() * 5000) : (Math.random() * 40000);
            
            mockFlights.push({
                airline: airline.name, code: airline.code,
                flightNo: `${airline.code}-${Math.floor(Math.random() * 900) + 100}`,
                dep: `${String(depHour).padStart(2,'0')}:${String(depMin).padStart(2,'0')}`,
                arr: `${String(arrHour).padStart(2,'0')}:${String(arrMin).padStart(2,'0')}`,
                duration: `${hours}h ${minutes}m`,
                price: Math.round(basePrice + variation)
            });
        }

        mockFlights.sort((a,b) => a.price - b.price);
        currentSearchFlights = mockFlights;

        // Render Results UI
        container.innerHTML = `
            <h2 style="color: white; font-weight: 400; margin-bottom: 10px; font-family: 'Playfair Display', serif;">
                Flights from <strong style="color: #ed1c24;">${originData.city}, ${originData.country}</strong> to <strong style="color: #ed1c24;">${destData.city}, ${destData.country}</strong>
            </h2>
            <p style="color: #ccc; margin-bottom: 30px;">
                Departure: ${dateVal} • ${document.getElementById('paxVal').innerText} • ${document.getElementById('classSelect').value}
                <span style="float: right; color: #ed1c24; font-weight: bold;">${mockFlights.length} options found</span>
            </p>
        `;

        mockFlights.forEach(flight => {
            container.innerHTML += `
                <div class="flight-card">
                    <div class="airline-info">
                        <div class="airline-logo">${flight.code}</div>
                        <div><div style="font-weight: 700; font-size: 14px; color: #111;">${flight.airline}</div><div style="font-size: 12px; color: #666;">${flight.flightNo}</div></div>
                    </div>
                    <div class="flight-time">
                        <div class="time-large">${flight.dep}</div><div class="city-small" style="font-weight:700;">${originData.city} (${originData.code})</div>
                    </div>
                    <div class="flight-time" style="flex: 0.5;">
                        <div class="duration-line">${flight.duration}</div><div style="font-size: 10px; color: #ed1c24; font-weight: 700;">NON-STOP</div>
                    </div>
                    <div class="flight-time">
                        <div class="time-large">${flight.arr}</div><div class="city-small" style="font-weight:700;">${destData.city} (${destData.code})</div>
                    </div>
                    <div class="flight-price">
                        <div class="price-large">₹${flight.price.toLocaleString('en-IN')}</div>
                        <button class="book-btn" onclick="alert('Checking live availability for ${flight.airline} flight ${flight.flightNo}...')">Book Now</button>
                    </div>
                </div>
            `;
        });

        // Trigger Loyalty Deals Generation
        calculateLoyaltyDeals();

    }, 1200); 
}

function calculateLoyaltyDeals() {
    const container = document.getElementById('loyalty-deals-container');
    if(!container) return;
    container.innerHTML = ''; 

    let dealsAvailable = [];
    currentSearchFlights.forEach(flight => {
        if (userWallet[flight.code] && userWallet[flight.code] > 0) {
            const pointsAvailable = userWallet[flight.code];
            const maxDiscount = pointsAvailable * pointValueINR;
            const actualDiscount = Math.min(maxDiscount, flight.price * 0.40);
            const pointsUsed = actualDiscount / pointValueINR;
            
            dealsAvailable.push({
                ...flight, originalPrice: flight.price, finalPrice: flight.price - actualDiscount,
                pointsUsed: pointsUsed, discountValue: actualDiscount
            });
        }
    });

    dealsAvailable.sort((a, b) => a.finalPrice - b.finalPrice);

    if (dealsAvailable.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #666; padding: 20px;">No point redemption options available for these routes. Earn miles by booking standard fares!</p>`;
        return;
    }

    dealsAvailable.slice(0, 3).forEach(deal => {
        container.innerHTML += `
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; gap: 15px; align-items: center; width: 40%;">
                    <div class="airline-logo" style="width: 35px; height: 35px; font-size: 14px;">${deal.code}</div>
                    <div>
                        <p style="font-weight: 700; font-size: 14px; margin: 0; color: #111;">${deal.airline} <span style="font-weight: 500; color: #666; font-size: 12px;">(${deal.flightNo})</span></p>
                        <p style="font-size: 12px; color: #0071c2; margin: 3px 0 0 0; font-weight: 600;"><i class="fa-solid fa-coins"></i> Applying ${deal.pointsUsed.toLocaleString()} Points</p>
                    </div>
                </div>
                <div style="text-align: center; width: 30%;">
                    <p style="font-size: 12px; color: #666; text-decoration: line-through; margin: 0;">₹${deal.originalPrice.toLocaleString('en-IN')}</p>
                    <p style="font-size: 11px; color: #16a34a; font-weight: 700; margin: 2px 0 0 0;">You save ₹${deal.discountValue.toLocaleString('en-IN')}</p>
                </div>
                <div style="text-align: right; width: 30%;">
                    <p style="font-size: 22px; font-weight: 700; color: #111; font-family: 'Rajdhani', sans-serif; margin: 0 0 5px 0;">₹${deal.finalPrice.toLocaleString('en-IN')}</p>
                    <button class="book-btn" style="padding: 8px 20px; font-size: 12px;" onclick="alert('Redeeming ${deal.pointsUsed} points for flight ${deal.flightNo}...')">Redeem & Book</button>
                </div>
            </div>
        `;
    });
}