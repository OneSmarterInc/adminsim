import {
  Button,
  Flex,
  Input,
  Text,
  Box,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  VStack,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import saveRaw from "./saveRaw";
import unitCostCal from "./unitCostCalc";

// import RawDataCalculationTable from "./rawDataCalculationTable";

const SupplierGraph = ({ sumOfForecast, whichQTR }) => {
  const [alphaHyperValue, setAlphaHyperValue] = useState(5);
  const [alphaMetaValue, setAlphaMetaValue] = useState(5);
  const [betaHyperValue, setBetaHyperValue] = useState(5);
  const [betaMetaValue, setBetaMetaValue] = useState(5);

  const [epsilonHyperValue, setepsilonHyperValue] = useState(1);
  const [epsilonMetaValue, setepsilonMetaValue] = useState(1);

  const [gammaHyperValue, setgammaHyperValue] = useState(1);
  const [gammaMetaValue, setgammaMetaValue] = useState(0);

  const [deltaHyperValue, setDeltaHyperValue] = useState(0);
  const [deltaMetaValue, setDeltaMetaValue] = useState(1);

  const [totalAlpha, setTotalAlpha] = useState(0);
  const [totalBeta, setTotalBeta] = useState(0);
  const [totalGamma, setTotalGamma] = useState(0);
  const [totalDelta, setTotalDelta] = useState(0);
  const [totalEpsilon, setTotalEpsilon] = useState(0);
  const [alphaVariation, setAlphaVariation] = useState(2);
  const [betaVariation, setBetaVariation] = useState(2);
  const [gammaVariation, setGammaVariation] = useState(2);
  const [deltaVariation, setDeltaVariation] = useState(15);
  const [epsilonVariation, setEpsilonVariation] = useState(5);

  const qtrList = [
    "qtr0", /////
    "qtr1",
    "qtr2",
    "qtr3",
    "qtr4",
    "qtr5",
    "qtr6",
    "qtr7",
  ];

  useEffect(() => {
    const calculateTotalValues = () => {
      const alphaHyperware = sumOfForecast["Hyperware"] * alphaHyperValue;
      const alphaMetaware = sumOfForecast["Metaware"] * alphaMetaValue;
      const betaHyperware = sumOfForecast["Hyperware"] * betaHyperValue;
      const betaMetaware = sumOfForecast["Metaware"] * betaMetaValue;

      setTotalAlpha(alphaHyperware + alphaMetaware);
      setTotalBeta(betaHyperware + betaMetaware);
    };
    const gammaHyperware = sumOfForecast["Hyperware"] * gammaHyperValue;
    const gammaMetaware = sumOfForecast["Metaware"] * gammaMetaValue;
    const deltaHyperware = sumOfForecast["Hyperware"] * deltaHyperValue;
    const deltaMetaware = sumOfForecast["Metaware"] * deltaMetaValue;
    const epsilonHyperware = sumOfForecast["Hyperware"] * epsilonHyperValue;
    const epsilonMetaware = sumOfForecast["Metaware"] * epsilonMetaValue;
    setTotalGamma(gammaHyperware + gammaMetaware);
    setTotalDelta(deltaHyperware + deltaMetaware);
    setTotalEpsilon(epsilonHyperware + epsilonMetaware);

    calculateTotalValues();
  }, [
    sumOfForecast,
    alphaHyperValue,
    alphaMetaValue,
    betaHyperValue,
    betaMetaValue,
    totalAlpha,
    totalBeta,
    gammaHyperValue,
    gammaMetaValue,
    deltaHyperValue,
    deltaMetaValue,
    epsilonHyperValue,
    epsilonMetaValue,
  ]);

  const data = [
    { name: "", pv: 0 },
    { name: "AH", pv: sumOfForecast["Hyperware"] * alphaHyperValue },
    { name: "AM", pv: sumOfForecast["Metaware"] * alphaMetaValue },
    { name: "BH", pv: sumOfForecast["Hyperware"] * betaHyperValue },
    { name: "BM", pv: sumOfForecast["Metaware"] * betaMetaValue },
    { name: "GH", pv: sumOfForecast["Hyperware"] * gammaHyperValue }, // Added entry for gammaHyperware
    { name: "GM", pv: sumOfForecast["Metaware"] * gammaMetaValue }, // Added entry for gammaMetaware
    { name: "DH", pv: sumOfForecast["Hyperware"] * deltaHyperValue }, // Added entry for deltaHyperware
    { name: "DM", pv: sumOfForecast["Metaware"] * deltaMetaValue }, // Added entry for deltaMetaware
    { name: "EH", pv: sumOfForecast["Hyperware"] * epsilonHyperValue }, // Added entry for epsilonHyperware
    { name: "EM", pv: sumOfForecast["Metaware"] * epsilonMetaValue }, // Added entry for epsilonMetaware
  ];

  const save = () => {
    saveRaw(rawData, whichQTR);
  };
  

  let alphaOrdered = totalAlpha + (totalAlpha * alphaVariation) / 100;
  let alphaInventory = alphaOrdered - totalAlpha;

  let betaOrdered = totalBeta + (totalBeta * betaVariation) / 100;
  let betaInventory = betaOrdered - totalBeta;
  //----------------
  let gammaOrdered = totalGamma + (totalGamma * gammaVariation) / 100;
  let gammaInventory = gammaOrdered - totalGamma;

  let deltaOrdered = totalDelta + (totalDelta * deltaVariation) / 100;
  let deltaInventory = deltaOrdered - totalDelta;

  let epsilonOrdered = totalEpsilon + (totalEpsilon * epsilonVariation) / 100;
  let epsilonInventory = epsilonOrdered - totalEpsilon;

  const rawData = {
    alphaHyperware: sumOfForecast["Hyperware"] * alphaHyperValue,
    alphaMetaware: sumOfForecast["Metaware"] * alphaMetaValue,
    betaHyperware: sumOfForecast["Hyperware"] * betaHyperValue,
    betaMetaware: sumOfForecast["Metaware"] * betaMetaValue,
    gammaHyperware: sumOfForecast["Hyperware"] * gammaHyperValue,
    gammaMetaware: sumOfForecast["Metaware"] * gammaMetaValue,
    deltaHyperware: sumOfForecast["Hyperware"] * deltaHyperValue,
    deltaMetaware: sumOfForecast["Metaware"] * deltaMetaValue,
    epsilonHyperware: sumOfForecast["Hyperware"] * epsilonHyperValue,
    epsilonMetaware: sumOfForecast["Metaware"] * epsilonMetaValue,
    rawHyperware:
      sumOfForecast["Hyperware"] * alphaHyperValue +
      sumOfForecast["Hyperware"] * betaHyperValue,
    supplierHyperware:
      sumOfForecast["Hyperware"] * gammaHyperValue +
      sumOfForecast["Hyperware"] * deltaHyperValue +
      sumOfForecast["Hyperware"] * epsilonHyperValue,
    rawMetaware:
      sumOfForecast["Metaware"] * alphaMetaValue +
      sumOfForecast["Metaware"] * betaMetaValue,
    supplierMetaware:
      sumOfForecast["Metaware"] * gammaMetaValue +
      sumOfForecast["Metaware"] * deltaMetaValue +
      sumOfForecast["Metaware"] * epsilonMetaValue,
    totalAlpha: totalAlpha,
    totalBeta: totalBeta,
    totalGamma: totalGamma,
    totalDelta: totalDelta,
    totalEpsilon: totalEpsilon,
    alphaOrdered: alphaOrdered,
    alphaInventory: alphaInventory,
    betaOrdered: betaOrdered,
    betaInventory: betaInventory,
    gammaOrdered: gammaOrdered,
    gammaInventory: gammaInventory,
    deltaOrdered: deltaOrdered,
    deltaInventory: deltaInventory,
    epsilonOrdered: epsilonOrdered,
    epsilonInventory: epsilonInventory,
  };
  let ans0 = unitCostCal(alphaHyperValue, betaHyperValue, 3, 2, 1);
  let ans1 = unitCostCal(alphaMetaValue, betaMetaValue, 3, 2, 1);
  localStorage.setItem("unitHyperware", JSON.stringify(ans0));
  localStorage.setItem("unitMetaware", JSON.stringify(ans1));

  
 const raw_materal_config = {

    "raw_id": 4,
    "simulation": 1,
    "admin": 1,
    "alpha_price": +alphaVariation,
    "beta_price": +betaVariation,
    "hyperware_alpha_units": +alphaHyperValue,
    "hyperware_beta_units": +betaHyperValue,
    "metaware_alpha_units": +alphaMetaValue,
    "metaware_beta_units": +betaMetaValue
}

localStorage.setItem("raw_materal_config",JSON.stringify(raw_materal_config));

  const sac_material_config =  {
    "sac_id": 1,
    "simulation": 1,
    "admin": 1,
    "gamma_price": +gammaVariation,
    "delta_price": +deltaVariation,
    "epsilon_price": +epsilonVariation,
    "hyperware_gamma_units": +gammaHyperValue,
    "hyperware_delta_units": +deltaHyperValue,
    "hyperware_epsilon_units": +epsilonHyperValue,
    "metaware_gamma_units": +gammaMetaValue,
    "metaware_delta_units": +deltaMetaValue,
    "metaware_epsilon_units": +epsilonMetaValue
}

localStorage.setItem("sac_material_config",JSON.stringify(sac_material_config));

  return (
    <>
     
      <Flex gap={2} w={"90%"} flexDirection="column">
        <Text fontSize="s">kg/unit</Text>
        <Box w="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Hyperware</Th>
                <Th>H-Total</Th>
                <Th>Metaware</Th>
                <Th>M-Total</Th>
                <Th>Required</Th>
                <Th>Total</Th>
                <Th>Inventory</Th>
                <Th>Safty Stock (%)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Alpha</Td>
                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={alphaHyperValue}
                        onChange={(e) => setAlphaHyperValue(e.target.value)}
                      />{" "}
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["alphaHyperware"]}</Td>
                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={alphaMetaValue}
                        onChange={(e) => setAlphaMetaValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["alphaMetaware"]}</Td>

                <Td>{totalAlpha}</Td>
                <Td>{alphaOrdered}</Td>
                <Td w={"15%"}>{alphaInventory}</Td>
                <Td w={"10%"}>
                  {" "}
                  <Input
                    type="number"
                    w={"100%"}
                    value={alphaVariation}
                    onChange={(e) => setAlphaVariation(e.target.value)}
                  />
                </Td>
              </Tr>

              {/* Repeat the pattern for other rows */}

              <Tr>
                <Td>Beta</Td>
                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={betaHyperValue}
                        onChange={(e) => setBetaHyperValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["betaHyperware"]}</Td>

                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={betaMetaValue}
                        onChange={(e) => setBetaMetaValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["betaMetaware"]}</Td>

                <Td>{totalBeta}</Td>
                <Td>{betaOrdered}</Td>
                <Td w={"15%"}>{betaInventory}</Td>
                <Td w={"10%"}>
                  {" "}
                  <Input
                    type="number"
                    w={"100%"}
                    value={betaVariation}
                    onChange={(e) => setBetaVariation(e.target.value)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>------</Td>
                <Td>------</Td>
                <Td>------</Td>
                <Td>------</Td>
                <Text fontSize={"1rem"}>
                  <u>Sub Assembly</u>
                </Text>
                <Td>------</Td>
                <Td>------</Td>
                <Td>------</Td>
                <Td>------</Td>
              </Tr>

              <Tr>
                <Td>Gamma</Td>
                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={gammaHyperValue}
                        onChange={(e) => setgammaHyperValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["gammaHyperware"]}</Td>

                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={gammaMetaValue}
                        onChange={(e) => setgammaMetaValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["gammaMetaware"]}</Td>

                <Td>{totalGamma}</Td>
                <Td>{gammaOrdered}</Td>
                <Td w={"15%"}>{gammaInventory}</Td>
                <Td w={"10%"}>
                  {" "}
                  <Input
                    type="number"
                    w={"100%"}
                    value={gammaVariation}
                    onChange={(e) => setGammaVariation(e.target.value)}
                  />
                </Td>
              </Tr>

              {/* Repeat the pattern for other rows */}
              <Tr>
                <Td>Delta</Td>
                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={deltaHyperValue}
                        onChange={(e) => setDeltaHyperValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["deltaHyperware"]}</Td>

                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={deltaMetaValue}
                        onChange={(e) => setDeltaMetaValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["deltaMetaware"]}</Td>

                <Td>{totalDelta}</Td>
                <Td>{deltaOrdered}</Td>
                <Td w={"15%"}>{deltaInventory}</Td>
                <Td w={"10%"}>
                  {" "}
                  <Input
                    type="number"
                    w={"100%"}
                    value={deltaVariation}
                    onChange={(e) => setDeltaVariation(e.target.value)}
                  />
                </Td>
              </Tr>

              {/* Repeat the pattern for other rows */}
              <Tr>
                <Td>Epsilon</Td>
                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        type="number"
                        w={"100%"}
                        value={epsilonHyperValue}
                        onChange={(e) => setepsilonHyperValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["epsilonHyperware"]}</Td>

                <Td>
                  <VStack align="start">
                    <Flex alignItems={"center"}>
                      <Input
                        p={"0"}
                        value={epsilonMetaValue}
                        onChange={(e) => setepsilonMetaValue(e.target.value)}
                      />
                    </Flex>
                  </VStack>
                </Td>
                <Td>{rawData["epsilonMetaware"]}</Td>

                <Td>{totalEpsilon}</Td>
                <Td>{epsilonOrdered}</Td>
                <Td w={"15%"}>{epsilonInventory}</Td>
                <Td w={"10%"}>
                  {" "}
                  <Input
                    type="number"
                    w={"100%"}
                    value={epsilonVariation}
                    onChange={(e) => setEpsilonVariation(e.target.value)}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Text>Per unit product cost Hyperware:{ans0} $ </Text>
          <Text>Per unit product cost Metaware:{ans1} $ </Text>
          <Button padding={"10px"} w={"30%"}  onClick={save}>
            Submit
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default SupplierGraph;
