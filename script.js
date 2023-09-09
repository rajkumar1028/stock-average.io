document.addEventListener("DOMContentLoaded", function() {
    // Navigation Tabs
    const averageTab = document.getElementById("averageTab");
    const profitTab = document.getElementById("profitTab");
    const usStocksTab = document.getElementById("usStocksTab");
    const averageCalculator = document.getElementById("averageCalculator");
    const profitCalculator = document.getElementById("profitCalculator");
    const usStocksCalculator = document.getElementById("usStocksCalculator");

    averageTab.addEventListener("click", function() {
        showTab(averageCalculator);
    });

    profitTab.addEventListener("click", function() {
        showTab(profitCalculator);
    });

    usStocksTab.addEventListener("click", function() {
        showTab(usStocksCalculator);
    });

    function showTab(tab) {
        const tabs = document.getElementsByClassName("tab-content");
        for (const t of tabs) {
            t.style.display = "none";
        }
        tab.style.display = "block";
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
    

    // US Stocks Profit Calculator
    const usCostPriceInput = document.getElementById("usCostPrice");
    const usSellingPriceInput = document.getElementById("usSellingPrice");
    const exchangeRateInput = document.getElementById("exchangeRate");
    const currentExchangeRateInput = document.getElementById("currentExchangeRate");
    const calculateUSProfitButton = document.getElementById("calculateUSProfit");
    const clearUSProfitButton = document.getElementById("clearUSProfit");
    const usProfitResult = document.getElementById("usProfitResult");
    const usProfitPercentageResult = document.getElementById("usProfitPercentageResult");
    const totalPercentageResult = document.getElementById("totalPercentageResult");
    const costInRupeeResult = document.getElementById("costInRupeeResult");
    const totalINRPercentageResult = document.getElementById("totalINRPercentageResult"); // New result element

    calculateUSProfitButton.addEventListener("click", function() {
        const usCostPrice = parseFloat(usCostPriceInput.value);
        const usSellingPrice = parseFloat(usSellingPriceInput.value);
        const exchangeRate = parseFloat(exchangeRateInput.value);
        const currentExchangeRate = parseFloat(currentExchangeRateInput.value);

        if (!isNaN(usCostPrice) && !isNaN(usSellingPrice) && !isNaN(exchangeRate) && !isNaN(currentExchangeRate)) {
            const usProfit = usSellingPrice - usCostPrice;
            const usProfitPercentage = (usProfit / usCostPrice) * 100;
            const exchangeRatePercentage = ((currentExchangeRate - exchangeRate) / exchangeRate) * 100;
            const totalPercentage = usProfitPercentage + exchangeRatePercentage;
            const costInRupee = usCostPrice * exchangeRate;
            const totalINRPercentage = (totalPercentage / 100) * (usCostPrice * exchangeRate) + costInRupee;

            usProfitResult.textContent = `Profit (USD): $${usProfit.toFixed(2)}`;
            usProfitPercentageResult.textContent = `Profit Percentage: ${usProfitPercentage.toFixed(2)}%`;
            totalPercentageResult.textContent = `Total Percentage(including Rupee depreciation): ${totalPercentage.toFixed(2)}%`;
            costInRupeeResult.textContent = `cost price in Rupees : ${costInRupee.toFixed(2)}`;
            totalINRPercentageResult.textContent = `Total profit in Rupees: ${totalINRPercentage.toFixed(2)}`;


        }
    });

    clearUSProfitButton.addEventListener("click", function() {
        usCostPriceInput.value = "";
        usSellingPriceInput.value = "";
        exchangeRateInput.value = "";
        currentExchangeRateInput.value = "";
        usProfitResult.textContent = "";
        usProfitPercentageResult.textContent = "";
        totalPercentageResult.textContent = "";
        costInRupeeResult.textContent = "";
        totalINRPercentageResult.textContent = ""; // Clear the new result element
    });
});
