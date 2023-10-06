function calculateRewardPoints(sustainabilityScore, carbonEmissions, manufacturingProcess) {
    // Calculate base reward points based on sustainability score
    let rewardPoints;
  
    if (sustainabilityScore >= 90) {
      rewardPoints = 5;
    } else if (sustainabilityScore >= 70) {
      rewardPoints = 3;
    } else {
      rewardPoints = 1;
    }
  
    // Adjust reward points if carbon emissions are "High"
    if (carbonEmissions === "High") {
      rewardPoints = Math.max(1, rewardPoints - 2); // Reduce points for "High" emissions
    }
  
    // Check if manufacturing process is suitable
    if (manufacturingProcess === "High-energy consumption" || manufacturingProcess === "Low-energy consumption") {
      return rewardPoints;
    } else {
      // If manufacturing process is not suitable, return 0 reward points
      return 0;
    }
  }
  
  // Example usage:
  const sustainabilityScore1 = 80;
  const carbonEmissions1 = "Low";
  const manufacturingProcess1 = "High-energy consumption";
  
  const rewardPoints1 = calculateRewardPoints(sustainabilityScore1, carbonEmissions1, manufacturingProcess1);
  console.log(`Reward Points 1: ${rewardPoints1}`); // Output: Reward Points 1: 3
  
  const sustainabilityScore2 = 60;
  const carbonEmissions2 = "High";
  const manufacturingProcess2 = "High-energy consumption";
  
  const rewardPoints2 = calculateRewardPoints(sustainabilityScore2, carbonEmissions2, manufacturingProcess2);
  console.log(`Reward Points 2: ${rewardPoints2}`); // Output: Reward Points 2: 1
  