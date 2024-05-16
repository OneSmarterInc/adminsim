 import React, { useState, useEffect, useContext } from 'react';
 import MyContext from './ContextApi/MyContext';


//  const ActualDemand = () => {
//      const { globalRules } = useContext(MyContext);


    const response = {
      'Hyperware': {
        'Direct': [20000, 20000, 35000],
        'Retail': [10000, 20000, 25000],
      },
      'Metaware': {
        'Direct': [16000, 11000, 10000],
        'Retail': [11000, 7000, 6000],
      },
    };

//     const firms = 2;
//     const region = 3;
//     const products = 2;
//     const channels = 2;
  
//     const [actual , setActual] = useState({});

//     useEffect(() => {
//       const calculateActualDemand = () => {
//         for (const productKey in response) {
//           const pr = productKey;
//           setActual((prevActual) => ({ ...prevActual, [pr]: {} }));
  
//           for (let l = 0; l < channels; l++) {
            
//              const actDemand = [];
//              // const alphaData = [];
  
//             for (let i = 0; i < firms; i++) {
//               const fir = "firm_" + (i + 1);
  
//               for (let j = 0; j < region; j++) {
//                 const joe = "region" + (j + 1);
  
//                 const actDemandValue = Math.floor(
//                   Math.random() * ((globalRules.demandEndValue) * 2 + 1) -
//                   globalRules.demandEndValue
//                 );
  
//                 const ampa = response[productKey][Object.keys(response[productKey])[l]];
//                 const randomValue = globalRules.gdpEndValue + Math.random() * (globalRules.gdpStartValue);
//                 const percentageAmount = Math.floor((randomValue / 100) * ampa[j]);
//                 const GDPvalue = percentageAmount + ampa[j];
//                  const actualDemand = actDemandValue + GDPvalue;

                
  
//                 if (actDemand.length < 3) {
//                   actDemand.push(actualDemand);
//                 }
//               }
//             }
  
//             setActual((prevActual) => ({
//               ...prevActual,
//               [pr]: { ...prevActual[pr], [Object.keys(response[productKey])[l]]: actDemand },
//             }));
//           }
//         }
//       };
      
//       calculateActualDemand();
      
//     }, []); 

    
function calculateActualDemand(response,region) {
  const { globalRules } = useContext(MyContext);
  
  const updatedActual = {};

  for (const productKey in response) {
    const pr = productKey;
    const channelValues = response[productKey];

    const updatedChannels = {};
    
    for (const channelKey in channelValues) {
      const actDemand = [];

      for (let i = 0; i < 1; i++) {
        

        for (let j = 0; j < region; j++) {
    
          const actDemandValue = Math.floor(
            Math.random() * ((globalRules.demandEndValue) * 2 + 1) -
            globalRules.demandEndValue
          );

          const ampa = channelValues[channelKey];
          const randomValue = globalRules.gdpEndValue + Math.random() * globalRules.gdpStartValue;
          const percentageAmount = Math.floor((randomValue / 100) * ampa[j]);
          const GDPvalue = percentageAmount + ampa[j];
          const actualDemand = actDemandValue + GDPvalue;


          if (actDemand.length < 3) {
            actDemand.push(actualDemand);
          }
        }
      }

      updatedChannels[channelKey] = actDemand;
    }

    updatedActual[pr] = updatedChannels;
  }

  return updatedActual;
}

   

//   return (
    
//     <></>
//   )
 //}

 export default calculateActualDemand;












// function calculateActualDemand(response,region) {

  
//   const updatedActual = {};

//   for (const productKey in response) {
//     const pr = productKey;
//     const channelValues = response[productKey];

//     const updatedChannels = {};
    
//     for (const channelKey in channelValues) {
//       const actDemand = [];

//       for (let i = 0; i < 1; i++) {
        

//         for (let j = 0; j < region; j++) {
    
//           const actDemandValue = Math.floor(
//             Math.random() * ((globalRules.demandEndValue) * 2 + 1) -
//             globalRules.demandEndValue
//           );

//           const ampa = channelValues[channelKey];
//           const randomValue = globalRules.gdpEndValue + Math.random() * globalRules.gdpStartValue;
//           const percentageAmount = Math.floor((randomValue / 100) * ampa[j]);
//           const GDPvalue = percentageAmount + ampa[j];
//           const actualDemand = actDemandValue + GDPvalue;


//           if (actDemand.length < 3) {
//             actDemand.push(actualDemand);
//           }
//         }
//       }

//       updatedChannels[channelKey] = actDemand;
//     }

//     updatedActual[pr] = updatedChannels;
//   }

//   return updatedActual;
// }

// const actualData = calculateActualDemand(response,3)
// console.log(actualData);



// export default calculateActualDemand;