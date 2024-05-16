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
  Button
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Procurement() {
  const data = [
    ["Gamma", "Surface", "A1", "B1", "C1", "D1", "", "", ""],
    ["Gamma", "Air", "A2", "B2", "C2", "D2", "", "", ""],
    ["Delta", "Surface", "", "B3", "C3", "D3", "E3", "F3", ""],
    ["Delta", "Air", "", "B4", "C4", "D4", "E4", "F4", ""],
    ["Epsilon", "Surface", "", "", "", "D5", "E5", "F5", "G5"],
    ["Epsilon", "Air", "", "", "", "D5", "E5", "F5", "G5"],
  ];
  const [productData, setProductData] = useState(null);
  let headers;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://54.242.48.178/api/product_data/");
        

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProductData(data);
        
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  headers = JSON.stringify(productData)


  const [inputValues, setInputValues] = useState(
    Array(data[0].length)
      .fill("")
      .map(() => Array(data.length).fill(""))
  );

  const mapInputsToObject = () => {
    const resultObject = {
      procurement_id: 1,
      simulation: 2,
      admin: 2,
      firm: 2,
      user: 1,
      current_qtr: 2,
    };

    data.forEach((row, rowIndex) => {
      const componentName = row[0].toLowerCase();
      const medium = row[1].toLowerCase();

      row.slice(2).forEach((cell, colIndex) => {
        const supplierKey = `${componentName}_${medium}_supplier${String.fromCharCode(
          colIndex + 65
        )}`;
        const numericValue = parseFloat(inputValues[colIndex][rowIndex]);
        if (!isNaN(numericValue)) {
          resultObject[supplierKey] = numericValue;
        }
      });
    });

    return resultObject;
  };

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newInputValues = [...inputValues];
    newInputValues[colIndex][rowIndex] = value;
    setInputValues(newInputValues);
  };

  const result = mapInputsToObject();
  console.log(result);

  
  const postData = async () =>{
    try {
      const response = await axios.post('http://54.242.48.178/api/procurement/', result);

      alert('Request successful!');
      
    } catch (error) {
      console.error("Error:", error)
    }
  }
  
  return (
    <>
      <Box>
        <Box>
        <Text display={"inline"} fontSize={'1.5rem'}>Procurement Decision form | </Text>
        <Text display={"inline"}>Firm: onesmarter inc | </Text><Text display={"inline"}>Qtr 1</Text>
        </Box>
        <Box>
        <Text display={'inline'}> | Alpha : <Input w={'10%'}p={'0 0 0'} m={'0 0 0'}></Input> |</Text><Text display={'inline'}> | Beta : <Input w={'10%'}p={'0 0 0'} m={'0 0 0'}></Input> |</Text>
        </Box>

        <Textarea 
        value={headers}
        ></Textarea>

      </Box>
      <Flex>
      <Box w={'80%'}>

        <Table variant="striped">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Components</Th>
              <Th>Medium</Th>
              <Th>Supplier A</Th>
              <Th>Supplier B</Th>
              <Th>Supplier C</Th>
              <Th>Supplier D</Th>
              <Th>Supplier E</Th>
              <Th>Supplier F</Th>
              <Th>Supplier G</Th>
            </Tr>
          </Thead>
          <Tbody>
              {data.map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td>{row[0]}</Td>
                  <Td>{row[1]}</Td>
                  {row.slice(2).map((cell, colIndex) => (
                    <Td key={colIndex}>
                      {cell}
                      <Input
                        type="number"
                        value={inputValues[colIndex][rowIndex]}
                        onChange={(e) =>
                          handleInputChange(rowIndex, colIndex, e.target.value)
                        }
                      />
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
        </Table>
      </Box>
      <Box>
        <Text textAlign={'right'} marginLeft={'25px'} w={'100%'}> Remaining SAC  : </Text>
        <Text display={'inline'} textAlign={'left'} marginLeft={'10px'} w={'100%'}>Hyperware </Text><Text display={'inline'} textAlign={'right'} marginLeft={'0px'} w={'100%'}> : value </Text>
      </Box>
      </Flex>
      <Button onClick={postData}>Submit</Button>
    </>
  );
}

export default Procurement;
