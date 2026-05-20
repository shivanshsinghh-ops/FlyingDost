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

// ==========================================
// 2. AUTOCOMPLETE SUGGESTIONS LOGIC
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
            div.innerHTML = `
                <span class="city-code">${airport.code}</span>
                <span class="city-name">${airport.city}, ${airport.country}</span>
            `;
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

// THE TWEAK IS ALREADY APPLIED RIGHT HERE:
document.addEventListener('click', function(e) {
    // Close Airport Suggestions
    if (!e.target.closest('.search-unit.from') && !e.target.closest('.search-unit.to')) {
        const boxes = document.querySelectorAll('.suggestions-box');
        boxes.forEach(box => box.style.display = 'none');
    }
    // Close Pax Dropdown
    if (!e.target.closest('.search-unit.pax')) {
        const paxBox = document.getElementById('paxDropdown');
        if (paxBox) paxBox.style.display = 'none';
    }
});

// ==========================================
// 3. SWAP LOCATIONS LOGIC
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
        setTimeout(() => {
            swapIcon.style.transition = 'none';
            swapIcon.style.transform = 'rotate(0deg)';
        }, 300);
    }
}

// ==========================================
// 4. WIDE LUXURY CALENDAR LOGIC
// ==========================================
function openWideCalendar() {
    document.getElementById('calendarOverlay').style.display = 'flex';
    renderDummyDays();
}

function closeCalendar() {
    document.getElementById('calendarOverlay').style.display = 'none';
}

function renderDummyDays() {
    const grids = ['month1Grid', 'month2Grid'];
    grids.forEach(id => {
        const grid = document.getElementById(id);
        if (!grid) return; 
        grid.innerHTML = ''; 
        for(let i=0; i<3; i++) grid.innerHTML += `<div></div>`;
        for(let i=1; i<=31; i++) {
            grid.innerHTML += `<div class="day-cell" onclick="selectDay(this)">${i}</div>`;
        }
    });
}

function selectDay(element) {
    document.querySelectorAll('.day-cell').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    const departVal = document.getElementById('departVal');
    if (departVal) {
        const dayNumber = element.innerText.padStart(2, '0');
        departVal.innerText = `${dayNumber} May 2026`;
        departVal.style.color = '#111';
    }
}

// ==========================================
// 5. PASSENGER LOGIC
// ==========================================
let pax = { adult: 1, child: 0, infant: 0 };

function togglePax() {
    const dropdown = document.getElementById('paxDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function updatePax(type, change) {
    const newCount = pax[type] + change;
    if (newCount < 0) return; 
    if (type === 'adult' && newCount < 1) return; 
    if (type === 'infant' && newCount > pax.adult) return; 

    pax[type] = newCount;
    document.getElementById(`${type}Count`).innerText = pax[type];
    updatePaxDisplay();
}

function updatePaxDisplay() {
    let parts = [];
    if (pax.adult > 0) parts.push(`${pax.adult} Adult${pax.adult > 1 ? 's' : ''}`);
    if (pax.child > 0) parts.push(`${pax.child} Child${pax.child > 1 ? 'ren' : ''}`);
    if (pax.infant > 0) parts.push(`${pax.infant} Infant${pax.infant > 1 ? 's' : ''}`);
    document.getElementById('paxVal').innerText = parts.join(', ');
}

// ==========================================
// 8. DYNAMIC FLIGHT SEARCH ENGINE (MOCK API)
// ==========================================
function performFlightSearch() {
    const originInput = document.getElementById('fromInput').value;
    const destInput = document.getElementById('toInput').value;
    const dateVal = document.getElementById('departVal').innerText;

    // 1. Validation: Make sure they actually filled it out
    if (!originInput || !destInput || dateVal === "Select Date") {
        alert("Please select an Origin, Destination, and Departure Date to search.");
        return;
    }

    // 2. Extract just the city names (e.g., turns "Delhi (DEL)" into "Delhi")
    const originCity = originInput.split(' ')[0] || "Origin";
    const destCity = destInput.split(' ')[0] || "Destination";

    const container = document.getElementById('flight-results-container');
    container.style.display = 'flex';
    
    // Show a loading state
    container.innerHTML = `
        <div style="text-align: center; color: white; padding: 40px;">
            <i class="fa-solid fa-plane fa-bounce" style="font-size: 30px; color: #ed1c24; margin-bottom: 15px;"></i>
            <h3>Searching global database...</h3>
        </div>
    `;

    // Scroll down so the user sees the loading state
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 3. Fake a network delay of 1.2 seconds, then generate the flights!
    setTimeout(() => {
        // Our template flights. We generate random prices for realism.
        const mockFlights = [
            { airline: "Air India", flightNo: "AI-101", dep: "06:00", arr: "08:15", duration: "2h 15m", price: Math.floor(Math.random() * 4000) + 4000 },
            { airline: "Air India Express", flightNo: "IX-224", dep: "10:30", arr: "12:50", duration: "2h 20m", price: Math.floor(Math.random() * 3000) + 3500 },
            { airline: "Air India", flightNo: "AI-305", dep: "17:45", arr: "20:10", duration: "2h 25m", price: Math.floor(Math.random() * 5000) + 4500 }
        ];

        // Add the header
        container.innerHTML = `<h2 style="color: white; font-weight: 400; margin-bottom: 10px; font-family: 'Playfair Display', serif;">Showing flights from <strong style="color: #ed1c24;">${originCity}</strong> to <strong style="color: #ed1c24;">${destCity}</strong></h2><p style="color: #ccc; margin-bottom: 20px;">Departure on ${dateVal} • ${document.getElementById('paxVal').innerText}</p>`;

        // Inject the cards into the HTML
        mockFlights.forEach(flight => {
            // Format price with commas (e.g. 5000 -> 5,000)
            const formattedPrice = "₹" + flight.price.toLocaleString('en-IN');

            container.innerHTML += `
                <div class="flight-card">
                    <div class="airline-info">
                        <div class="airline-logo">AI</div>
                        <div>
                            <div style="font-weight: 700; font-size: 14px; color: #111;">${flight.airline}</div>
                            <div style="font-size: 12px; color: #666;">${flight.flightNo}</div>
                        </div>
                    </div>
                    
                    <div class="flight-time">
                        <div class="time-large">${flight.dep}</div>
                        <div class="city-small">${originCity}</div>
                    </div>
                    
                    <div class="flight-time" style="flex: 0.5;">
                        <div class="duration-line">${flight.duration}</div>
                        <div style="font-size: 10px; color: #ed1c24; font-weight: 700;">NON-STOP</div>
                    </div>
                    
                    <div class="flight-time">
                        <div class="time-large">${flight.arr}</div>
                        <div class="city-small">${destCity}</div>
                    </div>
                    
                    <div class="flight-price">
                        <div class="price-large">${formattedPrice}</div>
                        <button class="book-btn" onclick="alert('Proceeding to checkout for ${flight.flightNo}!')">Book Now</button>
                    </div>
                </div>
            `;
        });
    }, 1200); // 1200 milliseconds (1.2 seconds) wait time
}

// ==========================================
// 7. MODALS & NAVIGATION LOGIC
// ==========================================

// Smooth scroll to the booking engine from the hero button
function scrollToForm() {
    const section = document.getElementById('booking-section');
    const greeting = document.querySelector('.greeting-container');
    
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Fade in the greeting text after scrolling
    setTimeout(() => {
        if(greeting) greeting.classList.add('visible');
    }, 600);
}

// Open a specific modal
function openModal(id) { 
    const modal = document.getElementById(id);
    if(modal) modal.classList.add('active'); 
}

// Close a specific modal
function closeModal(id) { 
    const modal = document.getElementById(id);
    if(modal) modal.classList.remove('active'); 
}

// Premium UX: Close modals when clicking outside the content box (on the blurred background)
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
        // If the user clicked the dark overlay itself (not the white box inside it)
        if (e.target === this) { 
            closeModal(this.id);
        }
    });
});
// ==========================================
// 8. MASTER DYNAMIC RESULTS ENGINE (SCALABLE)
// ==========================================

const airlinesDomestic = [
    { name: "IndiGo", code: "6E" }, { name: "Air India", code: "AI" },
    { name: "Vistara", code: "UK" }, { name: "SpiceJet", code: "SG" },
    { name: "Air India Express", code: "IX" }, { name: "Akasa Air", code: "QP" },
    { name: "Alliance Air", code: "9I" }, { name: "Star Air", code: "S5" }
];

const airlinesInternational = [
    { name: "Emirates", code: "EK" }, { name: "Etihad Airways", code: "EY" },
    { name: "Qatar Airways", code: "QR" }, { name: "British Airways", code: "BA" },
    { name: "Lufthansa", code: "LH" }, { name: "Singapore Airlines", code: "SQ" },
    { name: "Air India", code: "AI" }, { name: "Vistara", code: "UK" },
    { name: "Turkish Airlines", code: "TK" }, { name: "KLM", code: "KL" },
    { name: "Cathay Pacific", code: "CX" }, { name: "Delta Air Lines", code: "DL" },
    { name: "United Airlines", code: "UA" }, { name: "Air France", code: "AF" },
    { name: "Japan Airlines", code: "JL" }, { name: "Qantas", code: "QF" },
    { name: "Oman Air", code: "WY" }, { name: "Gulf Air", code: "GF" },
    { name: "SriLankan Airlines", code: "UL" }, { name: "Malaysia Airlines", code: "MH" }
];

function performFlightSearch() {
    const rawOrigin = document.getElementById('fromInput').value;
    const rawDest = document.getElementById('toInput').value;
    const dateVal = document.getElementById('departVal').innerText;
    
    if (!rawOrigin || !rawDest || dateVal === "Select Date") {
        alert("Please select Origin, Destination, and Date."); return;
    }

    // Extract the 3-letter codes from the input box (e.g., "DEL")
    const originCode = (rawOrigin.match(/\((.*?)\)/) || [])[1];
    const destCode = (rawDest.match(/\((.*?)\)/) || [])[1];
    
    // SMART LOOKUP: Find the exact airport in your massive database
    const originData = airports.find(a => a.code === originCode) || { city: rawOrigin.split(' (')[0], country: "Unknown", code: originCode };
    const destData = airports.find(a => a.code === destCode) || { city: rawDest.split(' (')[0], country: "Unknown", code: destCode };

    // Determine Domestic vs International
    const isDomestic = (originData.country === "India" && destData.country === "India");
    
    // Show Loading UI
    const container = document.getElementById('flight-results-container');
    container.style.display = 'flex';
    container.innerHTML = `<div style="text-align: center; color: white; padding: 40px;"><i class="fa-solid fa-plane fa-bounce" style="font-size: 30px; color: #ed1c24; margin-bottom: 15px;"></i><h3>Searching routes across ${isDomestic ? 'India' : 'the Globe'}...</h3></div>`;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
        // Enforce the strict Minimums (7 for Domestic, 15 for International)
        const minFlights = isDomestic ? 7 : 15;
        const maxFlights = isDomestic ? 11 : 22; 
        const totalToGenerate = Math.floor(Math.random() * (maxFlights - minFlights + 1)) + minFlights;

        const mockFlights = [];
        const pool = isDomestic ? airlinesDomestic : airlinesInternational;

        // Generate the massive list of flights
        for (let i = 0; i < totalToGenerate; i++) {
            // Pick a random airline from the pool
            const airline = pool[Math.floor(Math.random() * pool.length)];
            
            // Realistic Math Based on Route Type
            const avgMinutes = isDomestic ? (Math.random() * 120 + 60) : (Math.random() * 480 + 300); // 1-3 hrs domestic, 5-13 hrs intl
            const hours = Math.floor(avgMinutes / 60);
            const minutes = Math.floor(avgMinutes % 60);

            const depHour = Math.floor(Math.random() * 24);
            const depMin = Math.floor(Math.random() * 60);
            const arrHour = Math.floor((depHour + hours + (depMin + minutes >= 60 ? 1 : 0)) % 24);
            const arrMin = (depMin + minutes) % 60;

            const basePrice = isDomestic ? 3500 : 35000;
            const variation = isDomestic ? (Math.random() * 5000) : (Math.random() * 40000);
            
            mockFlights.push({
                airline: airline.name,
                code: airline.code,
                flightNo: `${airline.code}-${Math.floor(Math.random() * 900) + 100}`,
                dep: `${String(depHour).padStart(2,'0')}:${String(depMin).padStart(2,'0')}`,
                arr: `${String(arrHour).padStart(2,'0')}:${String(arrMin).padStart(2,'0')}`,
                duration: `${hours}h ${minutes}m`,
                price: Math.round(basePrice + variation)
            });
        }

        // Sort cheapest first
        mockFlights.sort((a,b) => a.price - b.price);

        // Render Headers
        container.innerHTML = `
            <h2 style="color: white; font-weight: 400; margin-bottom: 10px; font-family: 'Playfair Display', serif;">
                Flights from <strong style="color: #ed1c24;">${originData.city}, ${originData.country}</strong> to <strong style="color: #ed1c24;">${destData.city}, ${destData.country}</strong>
            </h2>
            <p style="color: #ccc; margin-bottom: 30px;">
                Departure: ${dateVal} • ${document.getElementById('paxVal').innerText} • ${document.getElementById('classSelect').value}
                <span style="float: right; color: #ed1c24; font-weight: bold;">${mockFlights.length} options found</span>
            </p>
        `;

        // Render Cards
        mockFlights.forEach(flight => {
            const formattedPrice = "₹" + flight.price.toLocaleString('en-IN');
            container.innerHTML += `
                <div class="flight-card">
                    <div class="airline-info">
                        <div class="airline-logo">${flight.code}</div>
                        <div>
                            <div style="font-weight: 700; font-size: 14px; color: #111;">${flight.airline}</div>
                            <div style="font-size: 12px; color: #666;">${flight.flightNo}</div>
                        </div>
                    </div>
                    <div class="flight-time">
                        <div class="time-large">${flight.dep}</div>
                        <div class="city-small" style="font-weight:700;">${originData.city} (${originData.code})</div>
                    </div>
                    <div class="flight-time" style="flex: 0.5;">
                        <div class="duration-line">${flight.duration}</div>
                        <div style="font-size: 10px; color: #ed1c24; font-weight: 700;">NON-STOP</div>
                    </div>
                    <div class="flight-time">
                        <div class="time-large">${flight.arr}</div>
                        <div class="city-small" style="font-weight:700;">${destData.city} (${destData.code})</div>
                    </div>
                    <div class="flight-price">
                        <div class="price-large">${formattedPrice}</div>
                        <button class="book-btn" onclick="alert('Checking live availability for ${flight.airline} flight ${flight.flightNo}...')">Book Now</button>
                    </div>
                </div>
            `;
        });
    }, 1200); 
}