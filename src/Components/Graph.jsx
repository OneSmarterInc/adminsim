import { Box, Input, Flex, Button } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import MyContext from "./ContextApi/MyContext";
import GraphTable from "./GraphTable";
import sumAcrossRegion from "./SumData";
import EndInventory from "./EndInventory";
import SumAcrossFirm from "./SumAcrossFirmforecast";
import SumAcrossFirmActualdemand from "./SumAcrossFirmactualdemand";
import UserEdit from "../uiComponents/userEdit";

const StepFunctionChart = ({
  initial,
  initial1,
  initial2,
  initial3,
  graphData3,
  key1,
  key2,
  key3,
  key4,
  input,
  input2,
  input3,
  input4,
}) => {
  

  let gdpValues = initial1;
  let adValue = initial2;
  let alphaValue = initial3;

  const { globalRules, setGlobalRules } = useContext(MyContext);


  const rules_default = {

    "rule_default_id": 1,
    "admin": 1,
    "simulation": 1,
    "gdp": globalRules.gdpEndValue,
    "gdp_drift": globalRules.gdpStartValue,
    "ad_start": globalRules.demandStartValue,
    "ad_end": globalRules.demandEndValue
}

localStorage.setItem("rules_default",JSON.stringify(rules_default));


  let start = globalRules.gdpEndValue;
  
  let end = globalRules.gdpStartValue;

  let start2 = globalRules.demandEndValue;

  let end2 = globalRules.demandStartValue;

  const GDPcalc = () => {
    start += Math.random() * end;
    const randomValue = start;
    const percentageAmount = Math.floor((randomValue / 100) * initial);
    gdpValues = percentageAmount + initial;
  };

  //GDPcalc();

  const ADcalc = () => {
    const actDemandValue = Math.floor(Math.random() * (end2 * 2 + 1) - end2);

    adValue = actDemandValue + gdpValues;

    const actualDemand = actDemandValue + gdpValues;

    const value = Math.ceil(actualDemand) / 1000;
    alphaValue = Math.ceil(value) * 1000;
  };

  if (input || input2) {
    start = +input;
    end = +input2;
    GDPcalc();
    ADcalc();
  }

  if (input3 || input4) {
    start2 = +input3;
    end2 = +input4;
    ADcalc();
  }

  const rules_updated = {

    "rule_default_id": 1,
    "admin": 1,
    "simulation": 1,
    "gdp": input,
    "gdp_drift": input2,
    "ad_start": input4,
    "ad_end": input3
}

localStorage.setItem("rules_updated",JSON.stringify(rules_updated));

  const data = [
    {
      name: "",
      pv: 0,
    },
    {
      name: "QTR-0",
      pv: initial,
    },
    {
      name: "GDP",
      pv: gdpValues,
    },
    {
      name: "Actual Demand",
      pv: adValue,
    },
    {
      name: "Forcast",
      pv: alphaValue,
    },
  ];
  // Check if 'forecast_inaccuracy' exists in localStorage
  let array = JSON.parse(localStorage.getItem("forecast_inaccuracy"));

  // If it doesn't exist, initialize it as an empty array
  if (array === null) {
    array = [];
  }
  const forecast_Inaccuracy = () => {
    // Assuming alphaValue and adValue are defined somewhere in your code
    let inaccuracy = Math.abs((alphaValue - adValue) / adValue) * 100;
    array.push(Math.round(200000 * (inaccuracy / 100)));

    // Update the 'forecast_inaccuracy' item in localStorage
    localStorage.setItem("forecast_inaccuracy", JSON.stringify(array));
  };

  // Call the forecast_Inaccuracy function
  forecast_Inaccuracy();

 

  let gdpData = JSON.parse(localStorage.getItem("gdpData"));
  gdpData[key1][key2][key4] = gdpValues; //   updated value assign
  localStorage.setItem("gdpData", JSON.stringify(gdpData)); //   updated value set

  let actualData = JSON.parse(localStorage.getItem("actualData"));
  actualData[key1][key2][key4] = adValue; //   updated value assign
  localStorage.setItem("actualData", JSON.stringify(actualData)); //   updated value set

  let updatedActualDemand = JSON.parse(localStorage.getItem("actualData")); //   updated value get

  let alphaData = JSON.parse(localStorage.getItem("alphaData"));
  alphaData[key1][key2][key4] = alphaValue; //   updated value assign
  localStorage.setItem("alphaData", JSON.stringify(alphaData)); //   updated value set

  let updatedAlpha = JSON.parse(localStorage.getItem("alphaData")); //   updated value get

  ///// Sum of forecast across region
  let sumAcross = sumAcrossRegion(updatedAlpha);
  //console.log("across", sumAcross);

  //// Sum of actualDemand
  let sumActual = sumAcrossRegion(updatedActualDemand);
  //console.log("actual", sumActual);

  //// EndInventory difference
  let EndInventoryDiff = EndInventory(sumAcross, sumActual);

  //// Sum of forecast across firm
  let sumOfAcrossFirm = SumAcrossFirm(sumAcross);
  //console.log(sumOfAcrossFirm[0]);

  localStorage.setItem("sumOfAcrossFirm", JSON.stringify(sumOfAcrossFirm));

  //// Sum of actual demand across firm
  let sumOfActualFirm = SumAcrossFirmActualdemand(sumActual);
  //console.log(sumOfActualFirm[0]);
  let directMeta = 0;
  directMeta = JSON.parse(localStorage.getItem("directMeta"));

  let directHyper = 0;
  directHyper = JSON.parse(localStorage.getItem("directHyper"));

  if (key2 == "Direct" && key1 == "Hyperware") {
    directHyper = alphaData[key1][key2].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    localStorage.setItem("directHyper", JSON.stringify(directHyper));
  }

  if (key2 == "Direct" && key1 == "Metaware") {
    directMeta = alphaData[key1][key2].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    localStorage.setItem("directMeta", JSON.stringify(directMeta));
  }
  return (
    <>
      <div style={{ fontSize: "0.7rem" }}>
        <LineChart
          width={450}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 28,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            height={40}
            textAnchor="end"
          />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          {/* <Brush /> */}
        </LineChart>
        {/* <GraphTable  gdpValues={gdpValues} adValues={adValue} alphaValue={alphaValue}/> */}
      </div>

      {/* <button >Submit</button> */}
      {/*<UserEdit initialRules={initialRules}/> */}
    </>
  );
};

export default StepFunctionChart;