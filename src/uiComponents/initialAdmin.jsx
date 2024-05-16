import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Flex,
  Input,
  Text,
  Box,
  useDisclosure,
  Heading,
  Select,
} from "@chakra-ui/react";
import GraphTable from "../Components/GraphTable";
import Rules from "../Components/Rules";
import calculateGDP from "../Components/GDP";
import calculateActualDemand from "../Components/ActualDemand";
import calculateAlpha from "../Components/Alpha";
import MyContext from "../Components/ContextApi/MyContext";
import SupplierTable from "../Components/SupplierTable";
import UserEdit from "./userEdit";
import DropDown from "../Components/DropDown";

import AdminSupplier from "../Components/AdminSupplier";
import calculateTotalUnitsByProduct from "../Components/productAll";
import Sheets from "./Sheets";
import BalanceSheetTable from "../Components/BalanceSheetTable";
import SubAssembly from "../Components/SubAssembly";
import { useLocation } from 'react-router-dom';

const InitialAdmin = () => {
  const { globalRules } = useContext(MyContext);

  const products = ["Hyperware", "Metaware"];
  const channels = ["Direct", "Retail"];
  const regions = ["Region 1", "Region 2", "Region 3"];

  //inintial
  const response = JSON.parse(localStorage.getItem("response"));
  const gdpData = calculateGDP(response, 3);
  const actualData = calculateActualDemand(response, 3);
  const alphaData = calculateAlpha(response, 3);
  const allProductUnits = calculateTotalUnitsByProduct(alphaData);

  localStorage.setItem("allProductUnits", JSON.stringify(allProductUnits));
  localStorage.setItem("response", JSON.stringify(response));
  localStorage.setItem("gdpData", JSON.stringify(gdpData));
  localStorage.setItem("actualData", JSON.stringify(actualData));
  localStorage.setItem("alphaData", JSON.stringify(alphaData));

  const data0 = JSON.parse(localStorage.getItem("supplierData0")) || {
    none: "none",
  };
  const data1 = JSON.parse(localStorage.getItem("supplierData1")) || {
    none: "none",
  };
// let address = useParams();
// Extract the address parameter from the URL query string
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const address = queryParams.get('address');
// localStorage.setItem("address",address.toString());
  
  return (
    <>
      <Text fontSize={"1.5rem"} textAlign={"Left"} paddingLeft={"25px"}>
        Initial values and Rules configuration :{" "}
      </Text>

      <UserEdit />

      {/* <Box mb={"20px"}>
        <GraphTable
          channels={channels}
          products={products}
          regions={regions}
          graphData={response}
          graphData1={gdpData}
          graphData2={actualData}
          graphData3={alphaData}
        />
      </Box> */}

      <Rules />

      <hr />
      {/* <Text fontSize={"1.5rem"} textAlign={"Left"} paddingLeft={"25px"}>
        <Heading> Raw Material and Sub-assembley components </Heading>
      </Text>
      <hr />

  
      <SubAssembly /> */}
    </>
  );
};

export default InitialAdmin;
