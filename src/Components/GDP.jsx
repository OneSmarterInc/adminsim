 import React, { useContext, useEffect, useState } from "react";
// import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
 import MyContext from './ContextApi/MyContext';


// const GDP = () => {

//    const { globalRules } = useContext(MyContext);


//   const firms = 2;
//   const region = 3;
//   const products = 2;
//   const channels = 2;

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

//   const [result, setResult] = useState({});

//   useEffect(() => {
//     const calculateGDP = () => {
//       for (const productKey in response) {
//         const pr = productKey;
//         setResult((prevResult) => ({ ...prevResult, [pr]: {} }));

//         for (let l = 0; l < channels; l++) {
//           const ans = [];
//           // const actDemand = [];

//           for (let i = 0; i < firms; i++) {
//             const fir = "firm_" + (i + 1);

//             for (let j = 0; j < region; j++) {
//               const joe = "region" + (j + 1);

              

//               const ampa = response[productKey][Object.keys(response[productKey])[l]];
//               const randomValue = globalRules.gdpEndValue + Math.random() * (globalRules.gdpStartValue);
//               const percentageAmount = Math.floor((randomValue / 100) * ampa[j]);
//               const GDPvalue = percentageAmount + ampa[j];
//               // const actualDemand = actDemandValue + GDPvalue;

//               if (ans.length < 3) {
//                 ans.push(GDPvalue);
//                 //actDemand.push(actualDemand);
//               }
//             }
//           }

//           setResult((prevResult) => ({
//             ...prevResult,
//             [pr]: { ...prevResult[pr], [Object.keys(response[productKey])[l]]: ans },
//           }));
//         }
//       }
//     };

//     calculateGDP();
//   }, []); // Empty dependency array to run the effect only once

//   //console.log(result);

//   const renderChannelHeaders = () => {
//     let headers = [];
//     for (let i = 0; i < channels; i++) {
//       headers.push(<Th key={`channel-header-${i}`}>{Object.keys(response['Hyperware'])[i]}</Th>);
//     }
//     return headers;
//   };

//   const renderChannelData = (data) => {
//     if (!Array.isArray(data)) {
//       //console.error("Data is not an array:", data);
//       return null; // or return an empty array if appropriate
//     }

//     return data.map((value, index) => (
//       <Td className="channel-cell" key={`value_${index}`}>
//         {value}
//       </Td>
//     ));
//   };

//   return (
//     <>
    

    
//     </>
//   );
// };

function calculateGDP(response,region) {
  const { globalRules } = useContext(MyContext);
  

  const updatedResult = {};

  for (const productKey in response) {
    const pr = productKey;
    const channelValues = response[productKey];

    const updatedChannels = {};
    
    for (const channelKey in channelValues) {
      const ans = [];

      for (let i = 0; i < 1; i++) {
        

        for (let j = 0; j < region; j++) {
    

          const ampa = channelValues[channelKey];
          const randomValue = globalRules.gdpEndValue + Math.random() * (globalRules.gdpStartValue);
          const percentageAmount = Math.floor((randomValue / 100) * ampa[j]);
          let GDPvalue = percentageAmount + ampa[j];


          //GDPvalue += 100

          if (ans.length < 3) {
            ans.push(GDPvalue);
          }
        }
      }

      updatedChannels[channelKey] = ans;
    }

    updatedResult[pr] = updatedChannels;
  }

  return updatedResult;
}

//calculateGDP();

 export default calculateGDP