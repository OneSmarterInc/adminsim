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
  Select,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Distribution() {
  const distributionDecisions = [
    {
      decision: "Distribution Center? {0=none│1=outsourced│2=owned}",
      options: ["None", "Outsourced", "Owned"],
    },
    {
      decision: "RFID-Application? {0=outsourced|1=insourced} ",
      options: ["Outsourced", "Insourced"],
    },
    {
      decision: "Emergency Carrier? {I|J|K|L|M|N} ",
      options: ["I", "J", "K", "L", "M", "N"],
    },
    {
      decision: "Cross-Docking, Carrier K {0=no|1=yes}",
      options: ["No", "Yes"],
    },
    {
      decision: "Cross-Docking, Carrier L {0=no|1=yes}",
      options: ["No", "Yes"],
    },
    {
      decision: "Cross-Docking, Carrier M {0=no|1=yes}",
      options: ["No", "Yes"],
    },
    {
      decision: "Cross-Docking, Carrier N {0=no|1=yes}",
      options: ["No", "Yes"],
    },
    {
      decision: "FGI Surface Shipping {1=Economy|2=Standard|3=Expedited}",
      options: ["Economy", "Standard", "Expedited"],
    },
    {
      decision: "SAC Surface Shipping  {1=Economy|2=Standard|3=Expedited}",
      options: ["Economy", "Standard", "Expedited"],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initialState = {};
    distributionDecisions.forEach((decision) => {
      initialState[decision.decision] = {};
      ["Region 1", "Region 2", "Region 3"].forEach((region) => {
        initialState[decision.decision][region] = "";
      });
    });
    return initialState;
  });

  const handleOptionChange = (decision, region, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [decision]: {
        ...(prevOptions[decision] || {}),
        [region]: value,
      },
    }));
  };
  console.log(selectedOptions);


  // const postData = async () =>{
  //   try {
  //     const response = await axios.post('http://54.242.48.178/api/distribution/', selectedOptions);

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
            Distribution Decision form |{" "}
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
                <Th>Distribution Decisions</Th>
                <Th>Region 1</Th>
                <Th>Region 2</Th>
                <Th>Region 3</Th>
              </Tr>
            </Thead>
            <Tbody>
              {distributionDecisions.map((decision, index) => (
                <Tr key={index}>
                  <Td>{decision.decision}</Td>
                  {["Region 1", "Region 2", "Region 3"].map((region) => (
                    <Td key={region}>
                      <Select
                        onChange={(e) =>
                          handleOptionChange(
                            decision.decision,
                            region,
                            e.target.value
                          )
                        }
                      >
                        <option key="select-option" value="">
                          Select
                        </option>
                        {decision.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
      {/* <Button onClick={postData}>Submit</Button> */}
      
      <Box>
        <Text fontWeight="bold">Selected Options:</Text>
        <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
      </Box>
    </>
  );
}

export default Distribution;
