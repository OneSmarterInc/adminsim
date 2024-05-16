


function sumAcrossRegion(data) {
    const sumObject = {};

    // Iterate through each product (Hyperware and Metaware)
    for (const product in data) {
      if (data.hasOwnProperty(product)) {
        sumObject[product] = {};

        // Iterate through each category (Direct and Retail)
        for (const category in data[product]) {
          if (data[product].hasOwnProperty(category)) {
            // Check if the value is an array
            if (Array.isArray(data[product][category])) {
              // Calculate the sum for the current category
              const sum = data[product][category].reduce(
                (acc, value) => acc + value,
                0
              );

              // Store the sum in the new object
              sumObject[product][category] = sum;
            } else {
              // If it's not an array, set the sum to the value itself
              sumObject[product][category] = data[product][category];
            }
          }
        }
      }
    }
    return sumObject;
  }

export default sumAcrossRegion