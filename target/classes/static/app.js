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
// 6. BUTTON PLACEHOLDERS (Prevents Console Errors)
// ==========================================
function performFlightSearch() { console.log("Searching for flights..."); }
function calculateDeal() { console.log("Calculating fare..."); }
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