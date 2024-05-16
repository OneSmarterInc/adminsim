import React, { useState, useEffect } from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";

import SupplierGraph from "./SupplierGraph";
import sumAcrossRegion from "./SumData";
import SumAcrossFirm from "./SumAcrossFirmforecast";
import SubAssembly from "./SubAssembly";

const qtrList = [
  "qtr0",
  "qtr1",
  "qtr2",
  "qtr3",
  "qtr4",
  "qtr5",
  "qtr6",
  "qtr7",
];

const SupplierTable = ( channels,
  products,
  regions,
  graphData,
  graphData1,
  graphData2,
  graphData3,
  ) => {
  let qtr0 = graphData;
  qtr0 = sumAcrossRegion(qtr0);
  qtr0 = SumAcrossFirm(qtr0);


  let qtr1 = JSON.parse(localStorage.getItem("sumOfAcrossFirm"));

  useEffect(() =>{
  })
  return (
    <>
      <Text textAlign={"center"}>
        current QTR : <strong>{qtr1[1]}</strong> units{" "}
      </Text>

      <Flex>
       

         
        <Box style={{ margin: "auto", marginTop: "50px" }}>
          <h2>Raw Material</h2>

          <SupplierGraph sumOfForecast={qtr1[0]} whichQTR={qtrList[1]} />
          {/* <SupplierGraph sumOfForecast={sumOfForecastMain['Metaware']} /> */}
        </Box>
        

      </Flex>
      <Box style={{ margin: "auto", marginTop: "50px" }}>
          {/* <h2>Supplier selection : {qtrList[1]}</h2> */}
          

          
          {/* <SupplierGraph sumOfForecast={sumOfForecastMain['Metaware']} /> */}
        </Box>
      <br />
      <hr />
      <br />
    </>
  );
};

export default SupplierTable;
