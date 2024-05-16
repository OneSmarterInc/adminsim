function saveRaw(data,qtr){
    localStorage.setItem(`rawData_${qtr}`,JSON.stringify(data));
  }

export default saveRaw