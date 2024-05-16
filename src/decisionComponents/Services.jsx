import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Text, Textarea, Input } from '@chakra-ui/react';
import axios from 'axios';

const Services = () => {
  const [formData, setFormData] = useState({
    region1: "",
    region2: "",
    region3: "",
  });

  const handleInputChange = (region, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [region]: value,
    }));
  };

  // const postData = async () =>{
  //   try {
  //     const response = await axios.post('http://54.242.48.178/api/services/', formData);

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
          <Text display={"inline"} fontSize={"1.5rem"}>
            Services Decision form |{" "}
          </Text>
          <Text display={"inline"}>Firm: onesmarter inc | </Text>
          <Text display={"inline"}>Qtr 1</Text>
        </Box>

        <Textarea></Textarea>
      </Box>

      <Box w='1300px' h='100vh'>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Region 1</Th>
              <Th>Region 2</Th>
              <Th>Region 3</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Service Outsourcing</Td>
              <Td>
                <Input
                  type="number"
                  value={formData.region1}
                  onChange={(e) => handleInputChange('region1', e.target.value)}
                  border='1px solid black'
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={formData.region2}
                  onChange={(e) => handleInputChange('region2', e.target.value)}
                  border='1px solid black'
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={formData.region3}
                  onChange={(e) => handleInputChange('region3', e.target.value)}
                  border='1px solid black'
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Services;
