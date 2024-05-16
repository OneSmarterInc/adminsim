function calculateBandwidthCost(terahertz) {
    const baseCost = 10;
    const additionalCostPerTerahertz = 0.5;
    const cost = baseCost + additionalCostPerTerahertz * Math.pow(terahertz, 3);
    return cost;
}


function calculateWarrantyCost(warrantyLength) {
    if (warrantyLength === 0) {
        return 0;  // No warranty cost if there is no warranty
    } else {
        const baseCost = 8;
        const additionalCostPerMonth = 3;
        const cost = baseCost + additionalCostPerMonth * Math.pow(warrantyLength, 2);
        return cost;
    }
}


function calculatePackagingCost(packagingType) {
    if (packagingType === 1) {
        return 10;  // Standard packaging cost
    } else if (packagingType === 2) {
        return 14;  // Premium packaging cost
    } else if (packagingType === 3) {
        return 28;  // Environmentally sensitive premium packaging cost
    } else {
        return 0;   // Invalid packaging type
    }
}

// Example usage:

function main(alpha,beta,terahertzRating,warrantyLength,packagingType){
const rawMaterialCost = (3*alpha) + (4*beta);
const bandwidthCost = calculateBandwidthCost(terahertzRating);


const warrantyCost = calculateWarrantyCost(warrantyLength);


const packagingCost = calculatePackagingCost(packagingType);
return rawMaterialCost+bandwidthCost+warrantyCost+packagingCost;

}

export default main;