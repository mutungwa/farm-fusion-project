function updateRecord(cowName) {
	const milkCell = document.getElementById(cowName + "-milk");
	const foodInput = document.getElementById(cowName + "-food");

	// Update milk production based on food consumed
	const foodConsumed = Number(foodInput.value);
	const milkProduced = foodConsumed * 0.8;
	milkCell.textContent = milkProduced.toFixed(1);
}
