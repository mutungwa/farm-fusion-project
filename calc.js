function calculateProfitLoss() {
	var revenue = parseFloat(document.getElementById("revenue").value);
	var expenses = parseFloat(document.getElementById("expenses").value);
	var profitLoss = revenue - expenses;
	var result = document.getElementById("result");
	if (profitLoss > 0) {
		result.innerHTML = "<p>Your profit is $" + profitLoss.toFixed(2) + "</p>";
	} else if (profitLoss == 0) {
		result.innerHTML = "<p>Your revenue and expenses are equal.</p>";
	} else {
		result.innerHTML = "<p>Your loss is $" + Math.abs(profitLoss).toFixed(2) + "</p>";
	}
}
