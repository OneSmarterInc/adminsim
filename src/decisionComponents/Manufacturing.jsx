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
import React, { useEffect, useState } from "react";

function Manufacturing() {
  const [formData, setFormData] = useState({
    production: {
      product0: "",
      product1: "",
      product2: "",
    },
    emergencyProduction: {
      product0: "",
      product1: "",
      product2: "",
    },
    productionVolumeFlexibility: {
      product0: "",
      product1: "",
      product2: "",
    },
  });

  const handleInputChange = (category, product, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [product]: value,
      },
    }));
  };

  console.log(formData);

  // const postData = async () =>{
  //   try {
  //     const response = await axios.post('http://54.242.48.178/api/manufacturing/', formData);

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
            Manufacturing Decision form |{" "}
          </Text>
          <Text display={"inline"}>Firm: onesmarter inc | </Text>
          <Text display={"inline"}>Qtr 1</Text>
        </Box>

        <Textarea></Textarea>
      </Box>
      <Flex>
        <Box w={"1400px"} h={"1000px"}>
          <Table variant="striped" colorScheme="teal" size="md">
            <Thead>
              <Tr>
                <Th>Manufacturing Decisions</Th>
                <Th>Product 0</Th>
                <Th>Product 1</Th>
                <Th>Product 2</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Production</Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.production.product0}
                    onChange={(e) =>
                      handleInputChange(
                        "production",
                        "product0",
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.production.product1}
                    onChange={(e) =>
                      handleInputChange(
                        "production",
                        "product1",
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.production.product2}
                    onChange={(e) =>
                      handleInputChange(
                        "production",
                        "product2",
                        e.target.value
                      )
                    }
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Emergency Production Limit</Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.emergencyProduction.product0}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyProduction",
                        "product0",
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.emergencyProduction.product1}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyProduction",
                        "product1",
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.emergencyProduction.product2}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyProduction",
                        "product2",
                        e.target.value
                      )
                    }
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Production Volume Flexibility</Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.productionVolumeFlexibility.product0}
                    onChange={(e) =>
                      handleInputChange(
                        "productionVolumeFlexibility",
                        "product0",
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.productionVolumeFlexibility.product1}
                    onChange={(e) =>
                      handleInputChange(
                        "productionVolumeFlexibility",
                        "product1",
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <Input
                    border={"1px solid gray"}
                    value={formData.productionVolumeFlexibility.product2}
                    onChange={(e) =>
                      handleInputChange(
                        "productionVolumeFlexibility",
                        "product2",
                        e.target.value
                      )
                    }
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
      {/* <Button onClick={postData}>Submit</Button> */}
    </>
  );
}

export default Manufacturing;
