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
import axios from "axios";
function IT() {
  const carriers = ["I", "J", "K", "L", "M", "N"];

  const suppliers = ["A", "B", "C", "D", "E", "F", "G"];

  const [reports, setReports] = useState({
    'Procurement Transactions Report?': '',
    'Product Cost Report?': '',
    'Replacement Parts Demand Report?': '',
    'Retail Pipeline Report?': '',
    'Transportation Cost Report?': '',
    'Transportation Report?': ''
  });

  function generateEmptySelections(keys) {
    const emptySelections = {};
    keys.forEach((key) => {
      emptySelections[key] = "blank";
    });
    return emptySelections;
  }


  const [carrierSelections, setCarrierSelections] = useState(
    generateEmptySelections(carriers.map((carrier) => `carrier_${carrier}`))
  );

  const [supplierSelections, setSupplierSelections] = useState(
    generateEmptySelections(suppliers.map((supplier) => `supplier_${supplier}`))
  );


  const handleCarrierSelection = (carrier, value) => {
    setCarrierSelections((prevSelections) => ({
      ...prevSelections,
      [`carrier_${carrier}`]: value,
    }));
  };
  
  const handleSupplierSelection = (supplier, value) => {
    setSupplierSelections((prevSelections) => ({
      ...prevSelections,
      [`supplier_${supplier}`]: value,
    }));
  };

  const handleChange = (report, value) => {
    setReports(prevState => ({
      ...prevState,
      [report]: value
    }));
  };

  
  const itObject = {...carrierSelections, ...supplierSelections, ...reports};
  console.log(itObject);


//   let temp = {
//     "itID": 3,
//     "carrier_I": "yes",
//     "carrier_J": "yes",
//     "carrier_K": "yes",
//     "carrier_L": "yes",
//     "carrier_M": "yes",
//     "carrier_N": "yes",
//     "supplier_A": "yes",
//     "supplier_B": "yes",
//     "supplier_C": "yes",
//     "supplier_D": "yes",
//     "supplier_E": "yes",
//     "supplier_F": "1",
//     "supplier_G": "yes"
// }



  const postData = async () =>{
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/it/', itObject);

      alert('Request successful!');
      
    } catch (error) {
      console.error("Error:", error)
    }
  }


  return (
    <>
      <Box>
        <Box>
          <Text display={"inline"} fontSize={"1.5rem"}>
            Information Technology Decision form |{" "}
          </Text>
          <Text display={"inline"}>Firm: onesmarter inc | </Text>
          <Text display={"inline"}>Qtr 1</Text>
        </Box>
        
        <Textarea 
          
          ></Textarea>
      </Box>
      <Flex>
        <Box w={"1400px"}>
        <Table variant="striped" colorScheme="teal" size="md">
        <Thead>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>Carriers</Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Th></Th>
            {carriers.map((carrier, index) => (
              <Th key={index}>{carrier}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>IT Synchronization With Carriers? 0 | 1</Th>
            {/* <Td>
              <Select>
                <option value="0">0</option>
                <option value="1">1</option>
              </Select>
            </Td> */}
            {carriers.map((carrier, index) => (
                    <Td key={index}>
                      <Select
                        value={carrierSelections[carrier] || "Select"}
                        onChange={(e) =>
                          handleCarrierSelection(carrier, e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </Select>
                    </Td>
                  ))}
          </Tr>
        </Tbody>
      </Table>


      <Table variant="striped" colorScheme="teal" size="md" mt={50}>
        <Thead>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>Suppliers</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Th></Th>
            {suppliers.map((carrier, index) => (
              <Th key={index}>{carrier}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>IT Synchronization With Suppliers? 0 | 1</Th>
            {/* <Td>
              <Select>
                <option value="0">0</option>
                <option value="1">1</option>
              </Select>
            </Td> */}
            {suppliers.map((supplier, index) => (
                    <Td key={index}>
                      <Select
                        value={supplierSelections[supplier] || "Select"}
                        onChange={(e) =>
                          handleSupplierSelection(supplier, e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </Select>
                    </Td>
                  ))}
          </Tr>
        </Tbody>
      </Table>




      <Table border="1" mt={50}>
      <Thead>
        <Tr>
          <Th>Report Name</Th>
          <Th>Yes/No</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(reports).map(([report, value]) => (
          <Tr key={report}>
            <Td>{report}</Td>
            <Td>
              <Select value={value} onChange={(e) => handleChange(report, e.target.value)}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>  
              </Select>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>



        </Box>
        <pre>{JSON.stringify(itObject, null, 2)}</pre>
      </Flex>
      <Button onClick={postData}>Submit</Button>
    </>
  );
}

export default IT;
