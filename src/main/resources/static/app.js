async function calculateDeal() {
    const basePrice = document.getElementById('basePrice').value;
    const cardSelection = document.getElementById('cardSelect').value;

    if (!basePrice || cardSelection === 'none') {
        alert("Please enter a price and select a card!");
        return;
    }

    // Map the dropdown selection to the actual bank offer data
    let offerData = {};
    if (cardSelection === 'infinia') {
        offerData = { bankName: "HDFC", cardName: "Infinia", discountRate: 0.15, maxCap: 1500.0, convenienceFee: 350.0 };
    } else if (cardSelection === 'sbi') {
        offerData = { bankName: "SBI", cardName: "Cashback", discountRate: 0.05, maxCap: 1000.0, convenienceFee: 300.0 };
    }

    // Build the package to send to Java
    const requestBody = {
        basePrice: parseFloat(basePrice),
        offer: offerData
    };

    try {
        // Send the data to your Spring Boot API
        const response = await fetch('http://localhost:8080/api/pricing/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const finalPrice = await response.json();

        // Display the result on the screen!
        document.getElementById('final-price').innerText = "₹" + finalPrice.toFixed(2);
        document.getElementById('result-box').style.display = "block";

    } catch (error) {
        console.error("Error communicating with backend:", error);
        alert("Oops! Make sure your Spring Boot server is running.");
    }
}