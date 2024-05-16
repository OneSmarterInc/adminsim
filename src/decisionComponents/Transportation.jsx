import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Transportation() {
  const products = ["Product 0", "Product 1", "Product 2"];
  const shipmentTypes = ["Surface", "Air"];
  const carriers = [
    "Carrier I",
    "Carrier J",
    "Carrier K",
    "Carrier L",
    "Carrier M",
    "Carrier N",
  ];

  const createInitialFormData = () => {
    const initialFormData = {};
    products.forEach((product) => {
      shipmentTypes.forEach((shipmentType) => {
        carriers.forEach((carrier) => {
          const key = `${product}_${shipmentType}_${carrier}`;
          initialFormData[key] = "";
        });
      });
    });
    return initialFormData;
  };

  const [formDataDC2, setFormDataDC2] = useState(createInitialFormData());
  const [formDataDC3, setFormDataDC3] = useState(createInitialFormData());

  const handleInputChange = (key, value, destination) => {
    if (destination === "DC2") {
      setFormDataDC2((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    } else if (destination === "DC3") {
      setFormDataDC3((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  };

  const carrierData = {...formDataDC2, ...formDataDC3};

  // const postData = async () =>{
  //   try {
  //     const response = await axios.post('http://54.242.48.178/api/forecasting/', carrierData);

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
            Transportation Decision form |{" "}
          </Text>
          <Text display={"inline"}>Firm: onesmarter inc | </Text>
          <Text display={"inline"}>Qtr 1</Text>
        </Box>
        <Box></Box>

        <Textarea></Textarea>
      </Box>

      <Box w={"1400px"}>
        <Table variant="striped" colorScheme="teal" size="md">
          <Thead>
            <Tr>
              <Th>Plant Shipments To DC2</Th>
              {carriers.map((carrier, carrierIndex) => (
                <Th key={carrierIndex}>{carrier}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, productIndex) =>
              shipmentTypes.map((shipmentType, shipmentIndex) => (
                <Tr key={`${product}_${shipmentType}`}>
                  <Td>{`${product}, ${shipmentType}`}</Td>
                  {carriers.map((carrier, carrierIndex) => (
                    <Td key={carrierIndex}>
                      <Input
                        border={'1px solid gray'}
                        value={formDataDC2[`${product}_${shipmentType}_${carrier}`]}
                        onChange={(e) =>
                          handleInputChange(
                            `${product}_${shipmentType}_${carrier}`,
                            e.target.value,
                            "DC2"
                          )
                        }
                      />
                    </Td>
                  ))}
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>

      <Box w={"1400px"} mt={100}>
        <Table variant="striped" colorScheme="teal" size="md">
          <Thead>
            <Tr>
              <Th>Plant Shipments To DC3</Th>
              {carriers.map((carrier, carrierIndex) => (
                <Th key={carrierIndex}>{carrier}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, productIndex) =>
              shipmentTypes.map((shipmentType, shipmentIndex) => (
                <Tr key={`${product}_${shipmentType}`}>
                  <Td>{`${product}, ${shipmentType}`}</Td>
                  {carriers.map((carrier, carrierIndex) => (
                    <Td key={carrierIndex}>
                      <Input
                        border={'1px solid gray'}
                        value={formDataDC3[`${product}_${shipmentType}_${carrier}`]}
                        onChange={(e) =>
                          handleInputChange(
                            `${product}_${shipmentType}_${carrier}`,
                            e.target.value,
                            "DC3"
                          )
                        }
                      />
                    </Td>
                  ))}
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
      {/* <Button onClick={postData}>Submit</Button> */}
    </>
  );
}

export default Transportation;
