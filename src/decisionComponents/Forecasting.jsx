import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Textarea,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Forecasting() {
  const channels = ["Channel 1", "Channel 2"];
  const regions = ["Region 1", "Region 2", "Region 3"];

  const initialResponse = {
    Product1_Channel1_Region1: null,
    Product1_Channel1_Region2: null,
    Product1_Channel1_Region3: null,
    Product1_Channel2_Region1: null,
    Product1_Channel2_Region2: null,
    Product1_Channel2_Region3: null,
    Product2_Channel1_Region1: null,
    Product2_Channel1_Region2: null,
    Product2_Channel1_Region3: null,
    Product2_Channel2_Region1: null,
    Product2_Channel2_Region2: null,
    Product2_Channel2_Region3: null,
    
  };

  const [inputValues, setInputValues] = useState(initialResponse);

  const handleInputChange = (product, channel, region, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [`${product}_${channel}_${region}`]: value,
    }));
  };


  console.log("Input Values:", inputValues);

  // const postData = async () =>{
  //   try {
  //     const response = await axios.post('http://54.242.48.178/api/forecasting/', inputValues);

  //     alert('Request successful!');
      
  //   } catch (error) {
  //     console.error("Error:", error)
  //   }
  // }
  

  return (
    <>
      <Box>
        <Box>
          <Text display={"inline"} fontSize={"1.5rem"}>
            Forecasting Decision form |{" "}
          </Text>
          <Text display={"inline"}>Firm: onesmarter inc | </Text>
          <Text display={"inline"}>Qtr 1</Text>
        </Box>

        <Textarea></Textarea>
      </Box>
      <Flex>
        <Box w={"1400px"}>
          <Table variant="striped" colorScheme="teal" size="md">
            <Thead>
              <Tr>
                <Th>Short-Term Sales Volume Forecast, Product 1</Th>
                {regions.map((region, index) => (
                  <Th key={index}>{region}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {channels.map((channel, channelIndex) => (
                <Tr key={channelIndex}>
                  <Td>{`Product 1, ${channel}`}</Td>
                  {regions.map((region, regionIndex) => (
                    <Td key={regionIndex}>
                      <Input
                        type="number"
                        border={"1px solid gray"}
                        onChange={(e) =>
                          handleInputChange("Product1", channel, region, e.target.value)
                        }
                      />
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Table variant="striped" colorScheme="teal" size="md" mt={100}>
            <Thead>
              <Tr>
                <Th>Short-Term Sales Volume Forecast, Product 2</Th>
                {regions.map((region, index) => (
                  <Th key={index}>{region}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {channels.map((channel, channelIndex) => (
                <Tr key={channelIndex}>
                  <Td>{`Product 2, ${channel}`}</Td>
                  {regions.map((region, regionIndex) => (
                    <Td key={regionIndex}>
                      <Input
                        type="number"
                        border={"1px solid gray"}
                        onChange={(e) =>
                          handleInputChange("Product2", channel, region, e.target.value)
                        }
                      />
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>

      {/* <Button onClick={postData}>Submit</Button> */}
    </>
  );
}

export default Forecasting;
