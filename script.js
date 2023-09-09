document.addEventListener("DOMContentLoaded", function() {
    // Navigation Tabs
    const averageTab = document.getElementById("averageTab");
    const profitTab = document.getElementById("profitTab");
    const averageCalculator = document.getElementById("averageCalculator");
    const profitCalculator = document.getElementById("profitCalculator");

    averageTab.addEventListener("click", function() {
        showTab(averageCalculator);
        underlineTab(averageTab);
    });

    profitTab.addEventListener("click", function() {
        showTab(profitCalculator);
        underlineTab(profitTab);
    });

    function showTab(tab) {
        const tabs = document.getElementsByClassName("tab-content");
        for (const t of tabs) {
            t.style.display = "none";
        }
        tab.style.display = "block";
    }
    function underlineTab(tab) {
        const tabs = document.getElementsByClassName("tab-button");
        for (const t of tabs) {
            t.style.textDecoration = "none"; // Remove underline from all tabs
        }
        tab.style.textDecoration = "underline"; // Underline the active tab
    }

    // Average Calculator
    const purchaseCountInput = document.getElementById("purchaseCount");
    const purchaseInputs = document.getElementById("purchaseInputs");
    const calculateAverageButton = document.getElementById("calculateAverage");
    const clearAverageButton = document.getElementById("clearAverage");
    const totalStocks = document.getElementById("totalStocks");
    const averagePrice = document.getElementById("averagePrice");
    const totalAmountSpent = document.getElementById("totalAmountSpent");

    calculateAverageButton.addEventListener("click", function() {
        const purchaseCount = parseInt(purchaseCountInput.value);

        if (!isNaN(purchaseCount)) {
            let total = 0;
            let totalQuantity = 0;

            for (let i = 1; i <= purchaseCount; i++) {
                const purchasePrice = parseFloat(document.getElementById(`purchasePrice${i}`).value);
                const purchaseQuantity = parseInt(document.getElementById(`purchaseQuantity${i}`).value);

                if (!isNaN(purchasePrice) && !isNaN(purchaseQuantity)) {
                    total += purchasePrice * purchaseQuantity;
                    totalQuantity += purchaseQuantity;
                }
            }

            const average = total / totalQuantity;
            totalStocks.textContent = totalQuantity;
            averagePrice.textContent = average.toFixed(2);
            totalAmountSpent.textContent = total.toFixed(2);
        }
    });

    clearAverageButton.addEventListener("click", function() {
        purchaseCountInput.value = "";
        purchaseInputs.innerHTML = "";
        totalStocks.textContent = "";
        averagePrice.textContent = "";
        totalAmountSpent.textContent = "";
    });

    purchaseCountInput.addEventListener("input", function() {
        const purchaseCount = parseInt(purchaseCountInput.value);

        if (!isNaN(purchaseCount)) {
            purchaseInputs.innerHTML = "";
            for (let i = 1; i <= purchaseCount; i++) {
                const inputDiv = document.createElement("div");
                inputDiv.innerHTML = `
                    <label for="purchasePrice${i}">Purchase ${i} Price:</label>
                    <input type="number" id="purchasePrice${i}" class="calculator-input">
                    <label for="purchaseQuantity${i}">Quantity:</label>
                    <input type="number" id="purchaseQuantity${i}" class="calculator-input">
                `;
                purchaseInputs.appendChild(inputDiv);
            }
        } else {
            purchaseInputs.innerHTML = "";
        }
    });

    // Profit Calculator
    const costPriceInput = document.getElementById("costPrice");
    const sellingPriceInput = document.getElementById("sellingPrice");
    const calculateProfitButton = document.getElementById("calculateProfit");
    const clearProfitButton = document.getElementById("clearProfit");
    const profitResult = document.getElementById("profitResult");
    const profitPercentageInput = document.getElementById("profitPercentage");

    calculateProfitButton.addEventListener("click", function() {
        const costPrice = parseFloat(costPriceInput.value);
        const sellingPrice = parseFloat(sellingPriceInput.value);

        if (!isNaN(costPrice) && !isNaN(sellingPrice)) {
            const profit = sellingPrice - costPrice;
            const profitPercentage = (profit / costPrice) * 100;

            profitResult.textContent = `Profit: ${profit.toFixed(2)}`;
            profitPercentageInput.value = `${profitPercentage.toFixed(2)}%`;
        }
    });

    clearProfitButton.addEventListener("click", function() {
        costPriceInput.value = "";
        sellingPriceInput.value = "";
        profitResult.textContent = "";
        profitPercentageInput.value = "";
    });

    // ... (rest of the code)
});
