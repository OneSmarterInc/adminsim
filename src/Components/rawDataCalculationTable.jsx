import { Table, Thead, Tbody, Tr, Th, Td, Text, Input, Box, Flex } from "@chakra-ui/react";

function RawDataCalculationTable({
  alphaHyperValue,
  setAlphaHyperValue,
  alphaMetaValue,
  setAlphaMetaValue,
  betaHyperValue,
  setBetaHyperValue,
  betaMetaValue,
  setBetaMetaValue,
  gammaHyperValue,
  setgammaHyperValue,
  gammaMetaValue,
  setgammaMetaValue,
  deltaHyperValue,
  setDeltaHyperValue,
  deltaMetaValue,
  setDeltaMetaValue,
  epsilonHyperValue,
  setepsilonHyperValue,
  epsilonMetaValue,
  setepsilonMetaValue,
  rawData,
}) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Hyperware</Th>
          <Th>Metaware</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Alpha</Td>
          <Td>
            <label htmlFor="" style={{ fontSize: "15px" }}>
              Alpha-Hyperware:
            </label>
            <Input
              w={"18%"}
              value={alphaHyperValue}
              onChange={(e) => setAlphaHyperValue(e.target.value)}
            />
            <Text display={"inline"}> {rawData["alphaHyperware"]}</Text>
          </Td>
          <Td>
            <label htmlFor="">Alpha-Metaware: </label>
            <Input
              w={"18%"}
              value={alphaMetaValue}
              onChange={(e) => setAlphaMetaValue(e.target.value)}
            />
            <Text display={"inline"}> {rawData["alphaMetaware"]}</Text>
          </Td>
        </Tr>
        {/* Repeat similar structure for other rows */}
      </Tbody>
    </Table>
  );
}

export default RawDataCalculationTable;
