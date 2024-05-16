function calculateTotalUnitsByProduct(inputObject) {
    const result = {};

    // Iterate over each product
    for (const product in inputObject) {
        if (inputObject.hasOwnProperty(product)) {
            const productData = inputObject[product];

            // Calculate total units for each product
            const totalUnits = Object.values(productData).reduce((acc, units) => {
                return acc + units.reduce((sum, unit) => sum + unit, 0);
            }, 0);

            // Store the total units in the result object
            result[product] = totalUnits;
        }
    }
    return result;
}

export default calculateTotalUnitsByProduct;