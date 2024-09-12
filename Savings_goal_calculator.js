function calculateSavings() {
  const goalAmount = document.getElementById('Goalamount').value;
  const monthlySavings = document.getElementById('savings').value;
  const months = document.getElementById('month').value;

  // Ensure inputs are filled out
  if (!goalAmount || !monthlySavings || !months) {
    return;
  }

  const totalSavings = monthlySavings * months;
  const remainingAmount = goalAmount - totalSavings;
  const progress = (totalSavings / goalAmount) * 100;

  document.getElementById('totalSavings').innerText = `Total Savings: ₹${totalSavings}`;
  document.getElementById('remainingAmount').innerText = `Remaining Amount: ₹${remainingAmount > 0 ? remainingAmount : 0}`;
  document.getElementById('progress').innerText = `Progress: ${progress > 100 ? 100 : progress.toFixed(2)}%`;

  // Show the result section
  document.getElementById('result').style.display = 'block';
}