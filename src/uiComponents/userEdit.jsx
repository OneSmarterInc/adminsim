import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import GraphTable from "../Components/GraphTable";
import SupplierGraph from "../Components/SupplierGraph";
import SupplierTable from "../Components/SupplierTable";
import SubAssembly from "../Components/SubAssembly";
import Procurement from "../decisionComponents/Procurement";
import axios from "axios";
import Sheets from "./Sheets";

const UserEdit = () => {
  const products = ["Hyperware", "Metaware"];
  const channels = ["Direct", "Retail"];
  const regions = ["Region 1", "Region 2", "Region 3"];
  const storedResponse = JSON.parse(localStorage.getItem("response"));
  const address = localStorage.getItem("address");
  const initialResponse = storedResponse || {
    Hyperware: {
      Direct: [20000, 20000, 35000],
      Retail: [10000, 20000, 25000],
    },
    Metaware: {
      Direct: [16000, 11000, 10000],
      Retail: [11000, 7000, 6000],
    },
  };

  const [response, setResponse] = useState({ ...initialResponse });
  const [editedProducts, setEditedProducts] = useState([...products]);
  const [editedRegions, setEditedRegions] = useState([...regions]);

  useEffect(() => {
    setResponse({ ...initialResponse });
  }, []);

  const handleProductChange = (index, value) => {
    const updatedProducts = [...editedProducts];
    updatedProducts[index] = value;
    setEditedProducts(updatedProducts);

    setResponse((prevResponse) => {
      const updatedResponse = { ...prevResponse };
      if (!updatedResponse[value]) {
        updatedResponse[value] = { ...updatedResponse[editedProducts[index]] };
        delete updatedResponse[editedProducts[index]];
      }
      return updatedResponse;
    });
  };

  const handleRegionChange = (index, value) => {
    const updatedRegions = [...editedRegions];
    updatedRegions[index] = value;
    setEditedRegions(updatedRegions);
  };

  const handleResponseChange = (product, channel, regionIndex, value) => {
    setResponse((prevResponse) => {
      const updatedResponse = { ...prevResponse };
      if (
        updatedResponse[product] &&
        updatedResponse[product][channel] &&
        updatedResponse[product][channel][regionIndex] !== undefined
      ) {
        updatedResponse[product][channel][regionIndex] = parseInt(value) || 0;
      }
      return updatedResponse;
    });
  };

  // const handleSubmit = () => {
  // localStorage.setItem("response",JSON.stringify(response));
  //   // Perform actions with the edited data (e.g., send to API)
  // };

  const generateAdditionalData = (product) => {
    if (product.toLowerCase() === "hyperware") {
      return {
        hyperware_id: 1,
        admin: 1,
        simulation_id: 1,
        current_qtr: 1,
        // Add any other hyperware-specific key-value pairs
      };
    } else if (product.toLowerCase() === "metaware") {
      return {
        metaware_id: 1,
        admin: 1,
        simulation: 1,
        current_qtr: 1,
        // Add any other metaware-specific key-value pairs
      };
    }

    // Default case (can be adjusted based on your specific needs)
    return {};
  };


  const postProductData = async (newData) =>{
    try {
      console.log(newData);
      await axios.post('http://54.242.48.178/api/product_data/', newData);

      alert('Request successful!');
      
    } catch (error) {
      console.error("Error:", error)
    }
  }

  

  const postUpdatedRules = async () =>{
    try {

      const rules_updated = JSON.parse(localStorage.getItem("rules_updated"));
      if (!rules_updated) {
        console.error("Error: rules_default not found in local storage");
        return;
      }

      await axios.post('http://54.242.48.178/api/rules_updated/', rules_updated);

      alert('Request successful!');
      
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const postRawMaterialConfig = async () =>{
    try {

      const raw_material_config = JSON.parse(localStorage.getItem("raw_materal_config"));
      if (!raw_material_config) {
        console.error("Error: rules_default not found in local storage");
        return;
      }

      await axios.post('http://54.242.48.178/api/raw_material_config/', raw_material_config);

      alert('Request successful!');
      
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const postSacMaterialConfig = async () =>{
    try {

      const sac_material_config = JSON.parse(localStorage.getItem("sac_material_config"));
      if (!sac_material_config) {
        console.error("Error: rules_default not found in local storage");
        return;
      }

      await axios.post('http://54.242.48.178/api/sac_material_config/', sac_material_config);

      alert('Request successful!');
      
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const postSacRules = async () =>{
    try {

      const sac_rules = JSON.parse(localStorage.getItem("sac_rules"));
      if (!sac_rules) {
        console.error("Error: rules_default not found in local storage");
        return;
      }

      await axios.post('http://54.242.48.178/api/sac_rules/', sac_rules);

      alert('Request successful!');
      
    } catch (error) {
      console.error("Error:", error)
    }
  }


  const handleSubmit = () => {
    alert("Rules and values Updated succesfull !")
    window.location.href = address;
    const newData = {};

    editedProducts.forEach((product) => {
      newData[product.toLowerCase()] = [];

      channels.forEach((channel) => {
        const channelData = {};

        editedRegions.forEach((region, regionIndex) => {
          const key = `${product.toLowerCase()}_${region.toLowerCase()}_${channel.toLowerCase()}`;
          channelData[key] = response[product]?.[channel]?.[regionIndex] || 0;
        });

        // Additional key-value pairs specific to each product
        const additionalData = generateAdditionalData(product);

        // Merging additionalData with channelData
        const mergedData = { ...additionalData, ...channelData };

        // Push the mergedData object to the array
        newData[product.toLowerCase()].push(mergedData);
      });
    });

    localStorage.setItem("newData", JSON.stringify(newData));
    // Perform actions with the edited data (e.g., send to API)
    
    postProductData(newData)
    //postDefaultRules();
    postUpdatedRules();
    postRawMaterialConfig();
    postSacMaterialConfig();
    postSacRules();
  };
  

  localStorage.setItem("response", JSON.stringify(response));

  
  

  return (
    <div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Products</Th>
            <Th>Channels</Th>
            {editedRegions.map((region, index) => (
              <Th key={index}>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => handleRegionChange(index, e.target.value)}
                />
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {editedProducts.map((product, productIndex) => (
            <React.Fragment key={productIndex}>
              {channels.map((channel, channelIndex) => (
                <Tr key={`${productIndex}-${channelIndex}`}>
                  {channelIndex === 0 && (
                    <Td rowSpan={channels.length}>
                      <input
                        type="text"
                        value={product}
                        onChange={(e) =>
                          handleProductChange(productIndex, e.target.value)
                        }
                      />
                    </Td>
                  )}
                  <Td>{channel}</Td>
                  {editedRegions.map((region, regionIndex) => (
                    <Td key={`${productIndex}-${channelIndex}-${regionIndex}`}>
                      <input
                        type="number"
                        value={response[product]?.[channel]?.[regionIndex] || 0}
                        onChange={(e) =>
                          handleResponseChange(
                            product,
                            channel,
                            regionIndex,
                            e.target.value
                          )
                        }
                      />
                    </Td>
                  ))}
                </Tr>
              ))}
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
      <GraphTable
        channels={channels}
        products={products}
        regions={regions}
        graphData={response}
        graphData1={response}
        graphData2={response}
        graphData3={response}
      />
      <SupplierTable
        channels={channels}
        products={products}
        regions={regions}
        graphData={response}
        graphData1={response}
        graphData2={response}
        graphData3={response}
      />
      <SubAssembly graphData={response} />
      

      <Button onClick={handleSubmit} m={"5rem"} w={"50%"} color={"white"} bg={"green"} borderRadius={"20px"}>Submit</Button>
    </div>
  );
};

export default UserEdit;
