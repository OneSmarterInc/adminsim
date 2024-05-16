function EndInventory(forecast,actual) {
    const difference = {};

    for (const product in forecast) {
      difference[product] = {};
      for (const channel in forecast[product]) {
        difference[product][channel] =
          forecast[product][channel] - actual[product][channel];
      }
    }
    return difference;
  }


export default EndInventory