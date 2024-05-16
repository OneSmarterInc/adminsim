import React, { useContext, useEffect, useState } from 'react';
import MyContext from './ContextApi/MyContext';





function calculateAlpha(response, region) {

  const { globalRules } = useContext(MyContext);

  const updatedAlpha = {};

  for (const productKey in response) {
    const pr = productKey;
    const channelValues = response[productKey];

    const updatedChannels = {};

    for (const channelKey in channelValues) {
      const alphaData = [];

      for (let i = 0; i < 1; i++) {
        for (let j = 0; j < region; j++) {
          const actDemandValue = Math.floor(
            Math.random() * (globalRules.demandEndValue * 2 + 1) -
              globalRules.demandEndValue
          );

          const ampa = channelValues[channelKey];
          const randomValue = globalRules.gdpEndValue + Math.random() * (globalRules.gdpStartValue);
          const percentageAmount = Math.floor((randomValue / 100) * ampa[j]);
          const GDPvalue = percentageAmount + ampa[j];
          const actualDemand = actDemandValue + GDPvalue;

                 const value = Math.ceil(actualDemand) / 1000;
                const alphaValue = Math.ceil(value) * 1000;


          if (alphaData.length < 3) {
            alphaData.push(alphaValue);
          }
        }
      }

      updatedChannels[channelKey] = alphaData;
    }

    updatedAlpha[pr] = updatedChannels;
  }

  return updatedAlpha;
}



export default calculateAlpha;
