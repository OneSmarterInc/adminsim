import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import cookies from "js-cookie";
import InitialData from "./InitialData";

function Cards() {
  
  const [showTbale, setShowTable] = useState(false);
  // Step 2: Create a state to store form data

  const [formData, setFormData] = useState({
    industryName: "Onesmarter inc.",
    numOfFirms: 2,
    numOfRegions: 3,
    numOfProducts: 2,
    numOfChannels: 2,
  });

  // Step 3: Update the state as the user enters data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Handle form submission and save data to cookies
  const handleSubmit = () => {
    setShowTable(true);
    // Convert the form data to a JSON string
    const formDataJson = JSON.stringify(formData);
    // Save the data to cookies
    cookies.set(formDataJson);
    document.cookie = `formData=${formDataJson}`;
    // You can also add more cookie settings like expiration, path, etc.

    // Display a success message or perform any other action
    //console.log(formData);
    alert("Data submitted and saved to cookies");
  };

  return (
    <>
      <Box mt={"20px"} border={"1px solid black"} p={10}>
        <Heading size={""} mb={"20px"}>
          Enter data
        </Heading>
        <FormControl>
          <Text textAlign={"left"}>Enter Industry Name</Text>
          <Input
            mb={"15px"}
            name="industryName" // Match the name to the state key
            value={formData.industryName} // Bind the input value to the state
            onChange={handleInputChange} // Call the update function on change
          ></Input>
          <Text textAlign={"left"}>Enter Number of firms</Text>
          <Input
            mb={"15px"}
            name="numOfFirms"
            value={formData.numOfFirms}
            onChange={handleInputChange}
          ></Input>
          <Text textAlign={"left"}>Enter Number of Regions</Text>
          <Input
            mb={"15px"}
            name="numOfRegions"
            value={formData.numOfRegions}
            onChange={handleInputChange}
          ></Input>
          <Text textAlign={"left"}>Enter Number of Products</Text>
          <Input
            mb={"15px"}
            name="numOfProducts"
            value={formData.numOfProducts}
            onChange={handleInputChange}
          ></Input>
          <Text textAlign={"left"}>Enter Number of Channels on Product</Text>
          <Input
            mb={"15px"}
            name="numOfChannels"
            value={formData.numOfChannels}
            onChange={handleInputChange}
          ></Input>
          <Button onClick={handleSubmit}> Submit </Button>{" "}
          {/* Step 4: Handle form submission */}
        </FormControl>
      </Box>
      {showTbale && (
        <Box mt={"50px"}>
         
          <InitialData />
        </Box>
      )}
    </>
  );
}

export default Cards;
