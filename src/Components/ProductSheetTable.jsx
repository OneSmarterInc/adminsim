import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
} from "@chakra-ui/react";
import React from "react";

function ProductSheet() {
  const unitsByRegions = JSON.parse(localStorage.getItem("unitsByRegion"));
  const allProductUnits = JSON.parse(localStorage.getItem("allProductUnits"));
  const unitHyperware = JSON.parse(localStorage.getItem("unitHyperware"));
  const unitMetaware = JSON.parse(localStorage.getItem("unitMetaware"));
  const rawHyperware = JSON.parse(localStorage.getItem("rawData_qtr1"));
  const rawMetaware = JSON.parse(localStorage.getItem("rawData_qtr1"));
  const directHyper = JSON.parse(localStorage.getItem("directHyper"));
  const directMeta = JSON.parse(localStorage.getItem("directMeta"));
  const forecasts_inaccuracy = JSON.parse(
    localStorage.getItem("forecast_inaccuracy")
  );
  const sumHyperware = allProductUnits["Hyperware"] * unitHyperware;
  const sumMetaware = allProductUnits["Metaware"] * unitMetaware;
  const unitAll = Math.round((unitHyperware + unitMetaware) / 2);
  const sumAll = Math.round(
    (allProductUnits["Hyperware"] + allProductUnits["Metaware"]) * unitAll
  );
  const supplierCost =
    rawHyperware["supplierHyperware"] + rawMetaware["supplierMetaware"];
  const rawMaterialHyperware = rawHyperware["rawHyperware"];
  const rawMaterialMetaware = rawHyperware["rawMetaware"];
  const allProductCost = rawMaterialHyperware + rawMaterialMetaware;
  let temp = forecasts_inaccuracy.slice(-6);

  let hyperware_forcast_in = (temp.slice(0,3)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  let metaware_forecast_in = (temp.slice(-3)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);


  const firm = "onesmarter.inc";

  function formatNumber(number) {
    // Convert the number to a string
    if (number == null) {
      return "0";
    } else {
      let numberString = number.toString();

      // Split the string into whole and decimal parts
      let parts = numberString.split(".");

      // Format the whole part with commas
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // Join the whole and decimal parts back together
      return parts.join(".");
    }
  }
  
  

  return (
    <Box>
      <Table variant="unstyled">
        <TableCaption>Firm : {firm}</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>All Regions</Th>
            <Th>Region 1</Th>
            <Th>Region 2</Th>
            <Th>Region 3</Th>
            
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Active? ch#1,2</Td>
            <Td>
              
            </Td>
            <Td>yes,yes</Td>
            <Td>Yes,Yes</Td>
            <Td>Yes,Yes</Td>
          </Tr>
          <Tr>
            <Td>Sales Volume Ch-1(Direct)</Td>
            <Td></Td>
            <Td>{unitsByRegions.hyperwareUnitsRegion1ChannelDirect}</Td>
            <Td>{unitsByRegions.hyperwareUnitsRegion2ChannelDirect}</Td>
            <Td>{unitsByRegions.hyperwareUnitsRegion3ChannelDirect}</Td>
            
          </Tr>
          <Tr>
            <Td>Sales Volume Ch-2(Retail)</Td>
            <Td></Td>
            <Td>{unitsByRegions.hyperwareUnitsRegion1ChannelRetail}</Td>
            <Td>{unitsByRegions.hyperwareUnitsRegion2ChannelRetail}</Td>
            <Td>{unitsByRegions.hyperwareUnitsRegion3ChannelRetail}</Td>
            
          </Tr>
          <Tr>
            <Td>Unfilled Orders</Td>
            <Td></Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Price ch#1,2</Td>
            <Td></Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>
              
              <hr />
              Revenues{" "}
            </Td>
            <Td>
              <hr />
              0
            </Td>
            <Td>
              <hr />
              0
            </Td>
            <Td>
              <hr />
              0
            </Td>
            <Td>
              <hr />
              0
            </Td>
          </Tr>
          <Tr>
            <Td> - Product Costs</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td> - Order Processing</Td>
            <Td>
              0
            </Td>
            <Td>
              0
            </Td>
            <Td>
              0
            </Td>
            <Td>
              0
            </Td>
          </Tr>
          <Tr>
            <Td> - Replacement Parts</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td> - RFID Cost</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>

          <Tr>
            <Td> - Transportation Costs</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td> + Transportation Rebates</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
    
          <Tr>
            <Td> - Duties & Tariffs</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Gross Margin </Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />
              0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />
              0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />
              0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />
              0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
          </Tr>

          <Tr>
            <Td>
              <Heading size={"12px"}>Fixed and Other Cost : </Heading>
              Adminstrative O/H
            </Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Forecast Inaccuracy</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Marketing, Ch#1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
          <Td>Marketing, Ch#2</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Price Changes</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Service Outsourcing</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          
          <Tr>
            <Td>Total Fixed & other</Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
            <Td>
              <hr style={{ border: "1px dashed #000" }} />0
              <hr style={{ border: "1px dashed #000" }} />
            </Td>
          </Tr>
          <Tr>
            <Td>Operating Income </Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <hr />
          <hr />
          <Tr>
            <Td>Distribution Center? </Td>
            <Td></Td>
            <Td>2 Owned</Td>
            <Td>1 3rd-Party</Td>
            <Td>0 None</Td>
          </Tr>
          <Tr>
            <Td>RFID Outsourced/Insource? </Td>
            <Td></Td>
            <Td>0 Outsourced</Td>
            <Td>0 Outsourced</Td>
            <Td>0 Outsourced</Td>
          </Tr>
          <Tr>
            <Td>Emergency Carrier </Td>
            <Td></Td>
            <Td></Td>
            <Td>N</Td>
            <Td>N</Td>
          </Tr>
          <hr />
          <Tr>
            <Td>Sales Volume Forecast, Ch#1</Td>
            <Td></Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Sales Volume Forecast, Ch#2</Td>
            <Td></Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <hr />
          <Tr>
            <Td>Service Outsourcing</Td>
            <Td></Td>
            <Td>2 Standard</Td>
            <Td>1 Minimum</Td>
            <Td>3 Enhanced</Td>
          </Tr>
          <hr />
          <Tr>
            <Td>Product 5-1 Configuration:</Td>
            <Td>H55111</Td>
            
          </Tr>
          
        </Tbody>
        
      </Table>
    </Box>
  );
}

export default ProductSheet;