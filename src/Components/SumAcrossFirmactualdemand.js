function SumAcrossFirmActualdemand(data){

    const sumObject = {};
    let totalSum = 0;  // New variable to store the total sum
    
    for (const product in data) {
        const direct = data[product].Direct || 0;
        const retail = data[product].Retail || 0;
    
        sumObject[product] = direct + retail;
    
        // Accumulate the sum across all products
        totalSum += sumObject[product];
    }
    return [sumObject,totalSum]
  }
  

export default SumAcrossFirmActualdemand