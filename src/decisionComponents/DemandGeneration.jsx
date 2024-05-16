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
    Button
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  
  function DemandGeneration() {
    

    const regions = ["Region 1", "Region 2", "Region 3"];

    const [formData, setFormData] = useState({
      regions: {
        "Region 1": {
          product1Channel1: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product1Channel2: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product2Channel1: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product2Channel2: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
        },
        "Region 2": {
          product1Channel1: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product1Channel2: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product2Channel1: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product2Channel2: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
        },
        "Region 3": {
          product1Channel1: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product1Channel2: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product2Channel1: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
          product2Channel2: {
            activeProduct: "",
            price: "",
            marketingSpending: "",
          },
        },
      },
    });
    
  
    const handleSelectChange = (product, channel, region, value) => {
      setFormData((prevData) => ({
        ...prevData,
        regions: {
          ...prevData.regions,
          [region]: {
            ...prevData.regions[region],
            [`${product}${channel}`]: {
              ...prevData.regions[region][`${product}${channel}`],
              activeProduct: value,
            },
          },
        },
      }));
    };
    
    const handleInputChange = (product, channel, region, fieldName, value) => {
      setFormData((prevData) => ({
        ...prevData,
        regions: {
          ...prevData.regions,
          [region]: {
            ...prevData.regions[region],
            [`${product}${channel}`]: {
              ...prevData.regions[region][`${product}${channel}`],
              [fieldName]: value,
            },
          },
        },
      }));
    };
    
    
    
    // const postData = async () =>{
  //   try {
  //     const response = await axios.post('http://54.242.48.178/api/forecasting/', formData);

  //     alert('Request successful!');
      
  //   } catch (error) {
  //     console.error("Error:", error)
  //   }
  // }
    
    
    

    //console.log(formData);
   
    
    return (
      <>
        <Box>
          <Box>
          <Text display={"inline"} fontSize={'1.5rem'}>Demand Genaration Decision form | </Text>
          <Text display={"inline"}>Firm: onesmarter inc | </Text><Text display={"inline"}>Qtr 1</Text>
          </Box>
          
          <Textarea 
          
          ></Textarea>
  
        </Box>
        <Flex>
        <Box w={'1400px'}>
  
        <Table variant="striped" colorScheme="teal" size="md">
        <Thead>
          <Tr>
            <Th>Product 1, Channel 1</Th>
            {regions.map((region, index) => (
              <Th key={index}>{region}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Active Product?</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Select onChange={(e) =>
              handleSelectChange("product1", "Channel1", region, e.target.value)
            }>
                  <option>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Price</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product1", "Channel1", region, "price", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Marketing Spending</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product1", "Channel1", region, "marketingSpending", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>

      <Table variant="striped" colorScheme="teal" size="md" mt={100}>
        <Thead>
          <Tr>
            <Th>Product 1, Channel 2</Th>
            {regions.map((region, index) => (
              <Th key={index}>{region}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Active Product?</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Select onChange={(e) =>
              handleSelectChange("product1", "Channel2", region, e.target.value)
            }>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Price</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product1", "Channel2", region, "price", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Marketing Spending</Td>
            {regions.map((region, index) => (
              <Td key={index}>
               <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product1", "Channel2", region, "marketingSpending", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>

      <Table variant="striped" colorScheme="teal" size="md" mt={100}>
        <Thead>
          <Tr>
            <Th>Product 2, Channel 1</Th>
            {regions.map((region, index) => (
              <Th key={index}>{region}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Active Product?</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Select onChange={(e) =>
              handleSelectChange("product2", "Channel1", region, e.target.value)
            }>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Price</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product2", "Channel1", region, "price", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Marketing Spending</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product2", "Channel1", region, "marketingSpending", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>


      <Table variant="striped" colorScheme="teal" size="md" mt={100}>
        <Thead>
          <Tr>
            <Th>Product 2, Channel 2</Th>
            {regions.map((region, index) => (
              <Th key={index}>{region}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Active Product?</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Select onChange={(e) =>
              handleSelectChange("product2", "Channel2", region, e.target.value)
            }>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Price</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product2", "Channel2", region, "price", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Marketing Spending</Td>
            {regions.map((region, index) => (
              <Td key={index}>
                <Input
            type="number"
            onChange={(e) =>
              handleInputChange("product2", "Channel2", region, "marketingSpending", e.target.value)
            }
          />
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
        </Box>
       
        </Flex>
        {/* <Button onClick={postData}>Submit</Button> */}
      </>
    );
  }
  
  export default DemandGeneration;
  