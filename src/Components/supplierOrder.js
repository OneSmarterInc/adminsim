function supplierOrder(data,delivery,delivery_variation,failure){
    const flag = Math.random() < 0.5;
    let ans = generateResult(data,flag,delivery,delivery_variation,failure);
    return ans;

}


function generateResult(data,flag,delivery,delivery_variation,failure) {
    const varValue = Math.floor(Math.random() * delivery_variation);

    let main;
    if (flag) {
        main = delivery - varValue;
    } else {
        main = delivery + varValue;
    }

    // Deduct the failure rate
    const temp = data * (main / 100);
    const result = temp + temp * (failure / 1000);
    // console.log("data >>",data);
    // console.log("flag >>", flag);
    // console.log("deliverry >>", delivery);
    // console.log("deliverry_varation >>", delivery_variation);
    // console.log("deliverry_failuare >>", failure);
    
    
    
    // console.log("final >>",result);

    // Return the result
    return result;
}

export default supplierOrder