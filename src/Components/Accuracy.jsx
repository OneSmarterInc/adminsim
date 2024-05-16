import React from 'react';
import MyContext from "./Components/ContextApi/MyContext";


const Accuracy = () => {
    const { globalRules } = useContext(MyContext);

    const firms = 2;
    const region = 3;
    const product = 2;
    const channel = 2;
  
    const percent = {};

    const Percentage = () => {
        for (let i = 0; i < firms; i++) {
          const fir = "firm_" + (i + 1);
          percent[fir] = {};
          final[fir] = {};
    
          for (let j = 0; j < region; j++) {
            const joe = "region" + (j + 1);
            percent[fir][joe] = {};
            final[fir][joe] = {};
    
            for (let k = 0; k < product; k++) {
              const pr = "product" + (k + 1);
              const percentage = [];
              const finalData = [];
              const ampa = response[fir][joe][pr];
    
              for (let l = 0; l < channel; l++) {
                const actDemandValue = Math.floor(
                  Math.random() * (globalRules.demandEndValue * 2 + 1) -
                    globalRules.demandEndValue
                );
    
                const randomValue =
                  globalRules.gdpEndValue +
                  Math.random(0) * globalRules.gdpStartValue;
                const percentageAmount = Math.floor((randomValue / 100) * ampa[l]);
    
                const GDPvalue = percentageAmount + ampa[l];
                const actualDemand = actDemandValue + GDPvalue;
                const value = Math.ceil(actualDemand) / 1000;
                const alphaValue = Math.ceil(value) * 1000; //Math.round(0.6*actualDemand +(1-0.6)*temp,-3)
    
                const absoluteValue = alphaValue - actualDemand;
                const percentageValue = (absoluteValue / actualDemand) * 100;
                const finalvalue =
                  1 - Math.abs(alphaValue - actualDemand) / actualDemand;
                const finalResult = Math.floor(finalvalue * 100);
    
                percentage.push(percentageValue);
                finalData.push(finalResult);
              }
              percent[fir][joe][pr] = percentage;
              final[fir][joe][pr] = finalData;
            }
          }
        }
      };
    
      Percentage();

  return (
    <div className="table-container">
    <h2>Forecast Accuracy</h2>
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Firm</Th>
          <Th>Region</Th>
          <Th>Product</Th>
          {renderChannelHeaders()}
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(final).map((firm) =>
          Object.keys(final[firm]).map((region) =>
            Object.keys(final[firm][region]).map(
              (product, productIndex) => {
                const rowspan = Object.keys(final[firm][region]).length;
                return (
                  <Tr key={`${firm}-${region}-${product}`}>
                    {productIndex === 0 && (
                      <Td className="firm-cell" rowSpan={rowspan}>
                        {firm}
                      </Td>
                    )}
                    {productIndex === 0 && (
                      <Td className="region-cell" rowSpan={rowspan}>
                        {region}
                      </Td>
                    )}
                    <Td className="product-cell">{product}</Td>
                    {renderChannelData2(final[firm][region][product])}
                  </Tr>
                );
              }
            )
          )
        )}
      </Tbody>
    </Table>
  </div>
  )
}

export default Accuracy