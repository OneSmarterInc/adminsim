import { Box, Select } from "@chakra-ui/react";
import React, { useState } from "react";

const DropDown = () => {
    const [selectedSupplier, setSelectedSupplier] = useState(null); // State to hold the selected supplier
  const [supplierData, setSupplierData] = useState(null); // State to hold the selected supplier's data

  const supplierA = {
    gamma: {
      cost: "12",
      delivery: "80",
      deliveryVariation: "2",
      failure: "2.0",
    },
    delta: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
    epsilon: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
  };

  const supplierB = {
    gamma: {
      cost: "14",
      delivery: "85",
      deliveryVariation: "4",
      failure: "1.9",
    },
    delta: {
      cost: "15",
      delivery: "75",
      deliveryVariation: "4",
      failure: "2.6",
    },
    epsilon: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
  };
  const supplierC = {
    gamma: {
      cost: "13",
      delivery: "85",
      deliveryVariation: "6",
      failure: "2.0",
    },
    delta: {
      cost: "16",
      delivery: "78",
      deliveryVariation: "6",
      failure: "2.5",
    },
    epsilon: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
  };
  const supplierD = {
    gamma: {
      cost: "22",
      delivery: "90",
      deliveryVariation: "8",
      failure: "1.2",
    },
    delta: {
      cost: "24",
      delivery: "80",
      deliveryVariation: "8",
      failure: "1.8",
    },
    epsilon: {
      cost: "29",
      delivery: "80",
      deliveryVariation: "1",
      failure: "1.1",
    },
  };
  const supplierE = {
    gamma: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
    delta: {
      cost: "14",
      delivery: "70",
      deliveryVariation: "10",
      failure: "2.7",
    },
    epsilon: {
      cost: "20",
      delivery: "75",
      deliveryVariation: "10",
      failure: "1.7",
    },
  };
  const supplierF = {
    gamma: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
    delta: {
      cost: "13",
      delivery: "70",
      deliveryVariation: "12",
      failure: "2.8",
    },
    epsilon: {
      cost: "19",
      delivery: "77",
      deliveryVariation: "12",
      failure: "1.8",
    },
  };
  const supplierG = {
    gamma: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
    delta: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
    epsilon: {
      cost: "21",
      delivery: "78",
      deliveryVariation: "14",
      failure: "1",
    },
  };

  const handleSupplierChange = (event) => {
    const selected = event.target.value;
    setSelectedSupplier(selected); // Update selected supplier state

    // Set supplier data based on selection
    switch (selected) {
      case "supplierA":
        setSupplierData(supplierA);
        break;
      case "supplierB":
        setSupplierData(supplierB);
        break;
        case "supplierC":
        setSupplierData(supplierB);
        break;
        case "supplierD":
        setSupplierData(supplierB);
        break;
        case "supplierE":
        setSupplierData(supplierB);
        break;
        case "supplierF":
        setSupplierData(supplierB);
        break;
        case "supplierG":
        setSupplierData(supplierB);
        break;
      // Add other cases for different suppliers
      default:
        setSupplierData(null);
    }
  };

  return (
    <Box w={"10%"}>
    <Select onChange={handleSupplierChange}>
      <option value="">Select Supplier</option>
      <option value="supplierA">Supplier A</option>
      <option value="supplierB">Supplier B</option>
      <option value="supplierC">Supplier C</option>
      <option value="supplierD">Supplier D</option>
      <option value="supplierE">Supplier E</option>
      <option value="supplierF">Supplier F</option>
      <option value="supplierG">Supplier G</option>
    </Select>

    {/* Display selected supplier's data */}
    {supplierData && (
      <div>
        <h2>Selected Supplier: {selectedSupplier}</h2>
        <pre>{JSON.stringify(supplierData, null, 2)}</pre>
      </div>
    )}
  </Box>
  );
};

export default DropDown;


// import { Box, Select } from "@chakra-ui/react";
// import React, { useState } from "react";

// const DropDown = () => {
//   const [selectedSupplier, setSelectedSupplier] = useState(null); // State to hold the selected supplier
//   const [supplierData, setSupplierData] = useState(null); // State to hold the selected supplier's data

//   const supplierA = {
//     gamma: {
//       cost: "12",
//       delivery: "80",
//       deliveryVariation: "2",
//       failure: "2.0",
//     },
//     delta: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
//     epsilon: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
//   };

//   const supplierB = {
//     gamma: {
//       cost: "14",
//       delivery: "85",
//       deliveryVariation: "4",
//       failure: "1.9",
//     },
//     delta: {
//       cost: "15",
//       delivery: "75",
//       deliveryVariation: "4",
//       failure: "2.6",
//     },
//     epsilon: { cost: "", delivery: "", deliveryVariation: "", failure: "" },
//   };

//   // Define other supplier objects similarly

//   // Function to handle supplier selection change
//   const handleSupplierChange = (event) => {
//     const selected = event.target.value;
//     setSelectedSupplier(selected); // Update selected supplier state

//     // Set supplier data based on selection
//     switch (selected) {
//       case "supplierA":
//         setSupplierData(supplierA);
//         break;
//       case "supplierB":
//         setSupplierData(supplierB);
//         break;
//       // Add other cases for different suppliers
//       default:
//         setSupplierData(null);
//     }
//   };

//   return (
//     <Box w={"10%"}>
//       <Select onChange={handleSupplierChange}>
//         <option value="">Select Supplier</option>
//         <option value="supplierA">Supplier A</option>
//         <option value="supplierB">Supplier B</option>
//         {/* Add other supplier options similarly */}
//       </Select>

//       {/* Display selected supplier's data */}
//       {supplierData && (
//         <div>
//           <h2>Selected Supplier: {selectedSupplier}</h2>
//           <pre>{JSON.stringify(supplierData, null, 2)}</pre>
//         </div>
//       )}
//     </Box>
//   );
// };

// export default DropDown;
