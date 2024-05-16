import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Text, Box } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const DataTable = ({ alpha, beta, gamma, delta, epsilon }) => {
  const data = [
    {
      name: "",
      pv: 0,
    },
    {
      name: "alpha $",
      pv: alpha,
    },
    {
      name: "beta $",
      pv: beta,
    },
    {
      name: "gamma $",
      pv: gamma,
    },
    {
      name: "delta $",
      pv: delta,
    },
    {
      name: "epsilon $",
      pv: epsilon,
    },
  ];
  function formatNumber(number) {
    // Convert the number to a string
    let numberString = number.toString();
  
    // Split the string into whole and decimal parts
    let parts = numberString.split('.');
  
    // Format the whole part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Join the whole and decimal parts back together
    return parts.join('.');
  }
  
  return (
    <>
      <LineChart
        width={600}
        height={450}
        data={data}
        syncId="anyId"
        margin={{
          top: 90,
          right: 30,
          left: 20,
          bottom: 28,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={0}
          angle={0}
          height={40}
          textAnchor="end"
        />
        <YAxis />
        <Tooltip/>
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        {/* <Brush /> */}
      </LineChart>
      <Box textAlign={"center"} > 
      Total : {formatNumber(Math.round(alpha + beta + gamma + delta + epsilon))} $
      </Box>

    </>
  );
};

export default DataTable;
