import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
 import cookies from 'js-cookie';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Initial({numOfProducts,numOfChannels}) {
  
    const [demandData, setDemandData] = useState({
        demand: [],
        forecast: [],
        emergency: [],
        inventory: [],
      });

      const column = ["Demand","Forecast","Emergency","EndInventory"];

  function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function calculateProductDemand(product, channels, temp) {
    const all_dic = { demand: [], Forecast: [] };

    function calculateDemandForProduct(product, channels, temp) {
      const demandByProduct = {};
      for (let i = 0; i < product; i++) {
        const channelValues = [];

        for (let j = 0; j < channels; j++) {
          const so = generateRandomNumber(0.5, 2);
          const var22 = temp * 0.5;
          const flag = Math.random() < 0.5;
          const percentageAmount = Math.floor((so / 100) * var22);

          if (flag) {
            channelValues.push(var22 - percentageAmount);
          } else {
            channelValues.push(var22 + percentageAmount);
          }
        }
        demandByProduct[i] = channelValues;
      }
      return demandByProduct;
    }

    const demand = calculateDemandForProduct(product, channels, temp);
    const forecast = calculateDemandForProduct(product, channels, temp);

    for (let i = 0; i < product; i++) {
      const forecastValues = forecast[i];
      for (let j = 0; j < channels; j++) {
        forecastValues[j] = Math.floor(forecastValues[j] / 1000) * 1000;
      }
    }

    all_dic.demand = demand;
    all_dic.Forecast = forecast;

    const emergency = [];

    for (let i = 0; i < product; i++) {
      const demandValues = all_dic.demand[i];
      const forecastValues = all_dic.Forecast[i];

      for (let j = 0; j < channels; j++) {
        if (demandValues[j] > forecastValues[j]) {
          emergency.push(demandValues[j] - forecastValues[j]);
        } else {
          emergency.push(0);
        }
      }
    }

    const endInventory = [];
    //console.log(emergency);

    let ko = 0;
    for (let i = 0; i < product; i++) {
      const forecastValues = all_dic.Forecast[i];
      const emerCut = emergency.slice(ko, ko + channels);
      //console.log(emerCut, "emerCut", ko, i + 3);
      //ko = i + 2;

      for (let j = 0; j < channels; j++) {
        const diff = forecastValues[j] + emerCut[j];
        endInventory.push(diff);
      }
      ko += channels;
    }

    // Now, endInventory contains the values after adding emergency to forecastValues
    

    

    const demandArray = all_dic.demand[0].concat(all_dic.demand[1]);
    const forecastArray = all_dic.Forecast[0].concat(all_dic.Forecast[1]);

    setDemandData({
        demand: demandArray,
        forecast: forecastArray,
        emergency,
        inventory: endInventory,
      });

    
  
  }

  console.log(demandData);
  

  //const form = cookies.get(formDataJson) ;

  useEffect(() => {
    const temp = 300000;
    calculateProductDemand(numOfProducts, numOfChannels, temp);
  }, []);

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
                <Th></Th>
              <Th>Demand</Th>
              <Th>Forecast</Th>
              <Th>Emergency</Th>
              <Th>EndInventory</Th>
            
          </Thead>
          <Tbody>
          {column.map((name, index) => (
              <Tr key={index}>
                <Td></Td>
                <Td>{demandData.demand[index]}</Td>
                <Td>{demandData.forecast[index]}</Td>
                <Td>{demandData.emergency[index]}</Td>
                <Td>{demandData.inventory[index]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Initial;
