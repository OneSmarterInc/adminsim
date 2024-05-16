import React, { useContext, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Input,
  Flex,
} from "@chakra-ui/react";
import StepFunctionChart from "./Graph";

const GraphTable = ({
  products,
  channels,
  regions,
  graphData,
  graphData1,
  graphData2,
  graphData3,
  gdpValues,
  adValues,
  alphaValue,
}) => {
  const [input, setInput] = useState(2);
  const [input2, setInput2] = useState(0.5);
  const [input3, setInput3] = useState(200);
  const [input4, setInput4] = useState(-200);

  return (
    <>
      <Box m={1} fontSize={15} w={"70%"}>
        <Flex gap={5} mb={10}>
          GDP(%)
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>{" "}
          Drift:
          <Input
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          ></Input>
        </Flex>
        <Flex gap={5}>
          AD-range:
          <Input
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          ></Input>
          to:
          <Input
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
          ></Input>
        </Flex>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Products</Th>
            <Th>Channels</Th>
            {regions.map((region, index) => (
              <Th key={index}>{region}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, productIndex) => (
            <React.Fragment key={productIndex}>
              {channels.map((channel, channelIndex) => (
                <Tr key={channelIndex}>
                  {channelIndex === 0 && (
                    <Td rowSpan={channels.length}>{product}</Td>
                  )}
                  <Td>{channel}</Td>

                  {regions.map((region, regionIndex) => (
                    <Td key={regionIndex}>
                      <StepFunctionChart
                        initial={graphData[product][channel][regionIndex]}
                        initial1={graphData1[product][channel][regionIndex]}
                        initial2={graphData2[product][channel][regionIndex]}
                        initial3={graphData3[product][channel][regionIndex]}
                        graphData3={graphData}
                        key1={product}
                        key2={channel}
                        key3={region}
                        key4={regionIndex}
                        input={input}
                        input2={input2}
                        input3={input3}
                        input4={input4}
                      />
                    </Td>
                  ))}
                </Tr>
              ))}
            </React.Fragment>
          ))}
        </Tbody>
      </Table>

      {/* <button onClick={handleButtonClick}>Submit</button> */}
    </>
  );
};

export default GraphTable;