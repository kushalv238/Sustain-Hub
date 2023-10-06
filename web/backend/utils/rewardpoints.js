function calculateRewardPoints(sustainabilityScore, carbonEmissions, manufacturingProcess) {
    // Check if carbon emissions are "Low" and manufacturing process is suitable
    if (carbonEmissions === "Low" && (manufacturingProcess === "High-energy consumption" || manufacturingProcess === "Low-energy consumption")) {
      // Calculate reward points based on sustainability score
      let rewardPoints;
  
      if (sustainabilityScore >= 90) {
        rewardPoints = 5;
      } else if (sustainabilityScore >= 70) {
        rewardPoints = 3;
      } else {
        rewardPoints = 1;
      }
  
      return rewardPoints;
    } else {
      // If conditions are not met, return 0 reward points
      return 0;
    }
  }
  
  // Example usage:
  const sustainabilityScore = 80;
  const carbonEmissions = "Low";
  const manufacturingProcess = "High-energy consumption";
  
  const rewardPoints = calculateRewardPoints(sustainabilityScore, carbonEmissions, manufacturingProcess);
  console.log(`Reward Points: ${rewardPoints}`);
  