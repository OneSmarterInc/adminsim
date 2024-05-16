import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
// import DataTable from "./AdminSupplier";
import supplierOrder from "./supplierOrder";
import DataTable from "./CostGraph";
import SumAcrossFirmActualdemand from "./SumAcrossFirmactualdemand";

// mainDelivery DeliveryVariation
const SubAssembly = ({graphData}) => {
  const [supplierA, setSupplierA] = useState({
    gamma: {
      cost: 12,
      delivery: 80,
      deliveryVariation: 2,
      failure: 2,
    },

    delta: {
      cost: 0,
      delivery: 0,
      deliveryVariation: 0,
      failure: 0,
    },

    epsilon: {
      cost: 0,
      delivery: 0,
      deliveryVariation: 0,
      failure: 0,
    },
  });
  const [supplierB, setSupplierB] = useState({
    gamma: {
      cost: 14,
      delivery: 85,
      deliveryVariation: 4,
      failure: 1.9,
    },

    delta: {
      cost: 15,
      delivery: 75,
      deliveryVariation: 4,
      failure: 2.6,
    },

    epsilon: {
      cost: 0,
      delivery: 0,
      deliveryVariation: 0,
      failure: 0,
    },
  });
  const [supplierC, setSupplierC] = useState({
    gamma: {
      cost: 13,
      delivery: 85,
      deliveryVariation: 6,
      failure: 2.0,
    },

    delta: {
      cost: 16,
      delivery: 78,
      deliveryVariation: 6,
      failure: 2.5,
    },

    epsilon: {
      cost: null,
      delivery: null,
      deliveryVariation: null,
      failure: null,
    },
  });
  const [supplierD, setSupplierD] = useState({
    alpha:{
      cost:3,
    },
    beta:{
      cost:4,
    },
    gamma: {
      cost: 22,
      delivery: 90,
      deliveryVariation: 8,
      failure: 1.2,
    },

    delta: {
      cost: 24,
      delivery: 80,
      deliveryVariation: 8,
      failure: 1.8,
    },

    epsilon: {
      cost: 29,
      delivery: 80,
      deliveryVariation: 8,
      failure: 1.1,
    },
  });

  const [supplierE, setSupplierE] = useState({
    gamma: {
      cost: null,
      delivery: null,
      deliveryVariation: null,
      failure: null,
    },

    delta: {
      cost: 14,
      delivery: 70,
      deliveryVariation: 10,
      failure: 2.7,
    },

    epsilon: {
      cost: 20,
      delivery: 75,
      deliveryVariation: 10,
      failure: 1.7,
    },
  });

  const [supplierF, setSupplierF] = useState({
    gamma: {
      cost: null,
      delivery: null,
      deliveryVariation: null,
      failure: null,
    },

    delta: {
      cost: 13,
      delivery: 70,
      deliveryVariation: 12,
      failure: 2.8,
    },

    epsilon: {
      cost: 19,
      delivery: 77,
      deliveryVariation: 12,
      failure: 1.8,
    },
  });

  const [supplierG, setSupplierG] = useState({
    gamma: {
      cost: null,
      delivery: null,
      deliveryVariation: null,
      failure: null,
    },

    delta: {
      cost: null,
      delivery: null,
      deliveryVariation: null,
      failure: null,
    },

    epsilon: {
      cost: 21,
      delivery: 78,
      deliveryVariation: 14,
      failure: 1,
    },
  });
  const all = {
    // supplierA : supplierA,
    // supplierB : supplierB,
    // supplierC: supplierC,
    supplierD : supplierD,
    // supplierE: supplierE,
    // supplierF:supplierF,
    // supplierG:supplierG,
  }
  // console.log(all, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,,,");

  const handleInputChange = (supplier, supplierKey, field, value) => {
    if (supplier === "supplierA") {
      setSupplierA((prevSupplierA) => ({
        ...prevSupplierA,
        [supplierKey]: {
          ...prevSupplierA[supplierKey],
          [field]: value,
        },
      }));
    }
    if (supplier === "supplierB") {
      setSupplierB((prevSupplierB) => ({
        ...prevSupplierB,
        [supplierKey]: {
          ...prevSupplierB[supplierKey],
          [field]: value,
        },
      }));
    }
    if (supplier === "supplierC") {
      setSupplierC((prevSupplierC) => ({
        ...prevSupplierC,
        [supplierKey]: {
          ...prevSupplierC[supplierKey],
          [field]: value,
        },
      }));
    }
    if (supplier === "supplierD") {
      setSupplierD((prevSupplierD) => ({
        ...prevSupplierD,
        [supplierKey]: {
          ...prevSupplierD[supplierKey],
          [field]: value,
        },
      }));
    }
    if (supplier === "supplierE") {
      setSupplierE((prevSupplierE) => ({
        ...prevSupplierE,
        [supplierKey]: {
          ...prevSupplierE[supplierKey],
          [field]: value,
        },
      }));
    }
    if (supplier === "supplierF") {
      setSupplierF((prevSupplierF) => ({
        ...prevSupplierF,
        [supplierKey]: {
          ...prevSupplierF[supplierKey],
          [field]: value,
        },
      }));
    }
    if (supplier === "supplierG") {
      setSupplierG((prevSupplierG) => ({
        ...prevSupplierG,
        [supplierKey]: {
          ...prevSupplierG[supplierKey],
          [field]: value,
        },
      }));
    }
  };


  // console.log(supplierD.delta.delivery);


  let rsData = SumAcrossFirmActualdemand(graphData);

  //let rawData_qtr0 = JSON.parse(localStorage.getItem("rawData_qtr0"));
  let rawData_qtr1 = JSON.parse(localStorage.getItem("rawData_qtr1"));

  
  // let alphaOrdered = rawData_qtr0.alphaOrdered;
  
  // let betaOrdered = rawData_qtr0.betaOrdered;

  // let totalGamma = rawData_qtr0.totalGamma;
  // let gammaOrdered = rawData_qtr0.gammaOrdered;
  // let totalDelta = rawData_qtr0.totalDelta;
  // let deltaOrdered = rawData_qtr0.deltaOrdered;
  // let totalEpsilon = rawData_qtr0.totalEpsilon;
  // let epsilonOrdered = rawData_qtr0.epsilonOrdered;
  

  let alphaOrdered1 = rawData_qtr1.alphaOrdered;
  let betaOrdered1 = rawData_qtr1.betaOrdered;

  let totalGamma1 = rawData_qtr1.totalGamma;
  let gammaOrdered1 = rawData_qtr1.gammaOrdered;
  let totalDelta1 = rawData_qtr1.totalDelta;
  let deltaOrdered1 = rawData_qtr1.deltaOrdered;
  let totalEpsilon1 = rawData_qtr1.totalEpsilon;
  let epsilonOrdered1 = rawData_qtr1.epsilonOrdered;

// let GammaD  = supplierOrder(gammaOrdered,supplierD.gamma.delivery, supplierD.gamma.deliveryVariation,supplierD.gamma.failure)*supplierD.gamma.cost;
// console.log(GammaD);
//let deltaD  = supplierOrder(deltaOrdered,supplierD.delta.delivery, supplierD.delta.deliveryVariation,supplierD.delta.failure)*supplierD.delta.cost;
//let epsilonD  = supplierOrder(epsilonOrdered,supplierD.epsilon.delivery, supplierD.epsilon.deliveryVariation,supplierD.epsilon.failure)*supplierD.epsilon.cost;
// console.log("<<<<<<<<<<<<<<<<<<<<<QTR0>>>>>>>>>>>")

// console.log(GammaD,deltaD,epsilonD);
// console.log(GammaD.toFixed(),"$",deltaD.toFixed(),"$",epsilonD.toFixed(),"$");
// console.log("<<<<<<<<<<<<<<<<<<<<<end 0>>>>>>>>>>>")


let GammaDqtr1  = supplierOrder(gammaOrdered1,supplierD.gamma.delivery, supplierD.gamma.deliveryVariation,supplierD.gamma.failure)*supplierD.gamma.cost;
let deltaDqtr1  = supplierOrder(deltaOrdered1,supplierD.delta.delivery, supplierD.delta.deliveryVariation,supplierD.delta.failure)*supplierD.delta.cost;
let epsilonDqtr1  = supplierOrder(epsilonOrdered1,supplierD.epsilon.delivery, supplierD.epsilon.deliveryVariation,supplierD.epsilon.failure)*supplierD.epsilon.cost;
// console.log("<<<<<<<<<<<<<<<<<<<<<QTR1>>>>>>>>>>>")
// console.log(GammaDqtr1,deltaDqtr1,epsilonDqtr1);
// console.log(GammaDqtr1.toFixed(),"$",deltaDqtr1.toFixed(),"$",epsilonDqtr1.toFixed(),"$");
// console.log("<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>")


// let final = {
//   gammaD:GammaD,
//   deltaD:deltaD,
//   epsilonD:epsilonD,
// }
// localStorage.setItem("finalcalcQTR0",JSON.stringify(final));

let finalqtr1 = {
  gammaDqtr1:GammaDqtr1,
  deltaDqtr1:deltaDqtr1,
  epsilonDqtr1:epsilonDqtr1,
}
localStorage.setItem("finalcalcQTR1",JSON.stringify(finalqtr1));

// console.log(finalqtr1,final)
// const componentCost = DataTable(GammaD,deltaD,epsilonD)
// const componentCost1 = DataTable(GammaDqtr1,deltaDqtr1,epsilonDqtr1);
let supplierRules = {
  supplierA:supplierA,
  supplierB:supplierB,
  supplierC:supplierC,
  supplierD:supplierD,
  supplierE:supplierE,
  supplierF:supplierF,
  supplierG:supplierG,

}
localStorage.setItem("supplierRules",JSON.stringify(supplierRules));






const sac_rules = {
  "sacrule_default_id": 0,
  "admin": 0,
  "simulation": 0,
  "supplierA_gamma_cost": supplierA.gamma.cost,
  "supplierB_gamma_cost": supplierB.gamma.cost,
  "supplierC_gamma_cost": supplierC.gamma.cost,
  "supplierD_gamma_cost": supplierD.gamma.cost,
  "supplierE_gamma_cost": supplierE.gamma.cost,
  "supplierF_gamma_cost": supplierF.gamma.cost,
  "supplierG_gamma_cost": supplierG.gamma.cost,
  "supplierA_gamma_delivery": supplierA.gamma.delivery,
  "supplierB_gamma_delivery": supplierB.gamma.delivery,
  "supplierC_gamma_delivery": supplierC.gamma.delivery,
  "supplierD_gamma_delivery": supplierD.gamma.delivery,
  "supplierE_gamma_delivery": supplierE.gamma.delivery,
  "supplierF_gamma_delivery": supplierF.gamma.delivery,
  "supplierG_gamma_delivery": supplierG.gamma.delivery,
  "supplierA_gamma_delivery_variation": supplierA.gamma.deliveryVariation,
  "supplierB_gamma_delivery_variation": supplierB.gamma.deliveryVariation,
  "supplierC_gamma_delivery_variation": supplierC.gamma.deliveryVariation,
  "supplierD_gamma_delivery_variation": supplierD.gamma.deliveryVariation,
  "supplierE_gamma_delivery_variation": supplierE.gamma.deliveryVariation,
  "supplierF_gamma_delivery_variation": supplierF.gamma.deliveryVariation,
  "supplierG_gamma_delivery_variation": supplierG.gamma.deliveryVariation,
  "supplierA_gamma_failure": supplierA.gamma.failure,
  "supplierB_gamma_failure": supplierB.gamma.failure,
  "supplierC_gamma_failure": supplierC.gamma.failure,
  "supplierD_gamma_failure": supplierD.gamma.failure,
  "supplierE_gamma_failure": supplierE.gamma.failure,
  "supplierF_gamma_failure": supplierF.gamma.failure,
  "supplierG_gamma_failure": supplierG.gamma.failure,
  "supplierA_delta_cost": supplierA.delta.cost,
  "supplierB_delta_cost": supplierB.delta.cost,
  "supplierC_delta_cost": supplierC.delta.cost,
  "supplierD_delta_cost": supplierD.delta.cost,
  "supplierE_delta_cost": supplierE.delta.cost,
  "supplierF_delta_cost": supplierF.delta.cost,
  "supplierG_delta_cost": supplierG.delta.cost,
  "supplierA_delta_delivery": supplierA.delta.delivery,
  "supplierB_delta_delivery": supplierB.delta.delivery,
  "supplierC_delta_delivery": supplierC.delta.delivery,
  "supplierD_delta_delivery": supplierD.delta.delivery,
  "supplierE_delta_delivery": supplierE.delta.delivery,
  "supplierF_delta_delivery": supplierF.delta.delivery,
  "supplierG_delta_delivery": supplierG.delta.delivery,
  "supplierA_delta_delivery_variation": supplierA.delta.deliveryVariation,
  "supplierB_delta_delivery_variation": supplierB.delta.deliveryVariation,
  "supplierC_delta_delivery_variation": supplierC.delta.deliveryVariation,
  "supplierD_delta_delivery_variation": supplierD.delta.deliveryVariation,
  "supplierE_delta_delivery_variation": supplierE.delta.deliveryVariation,
  "supplierF_delta_delivery_variation": supplierF.delta.deliveryVariation,
  "supplierG_delta_delivery_variation": supplierG.delta.deliveryVariation,
  "supplierA_delta_failure": supplierA.delta.failure,
  "supplierB_delta_failure": supplierB.delta.failure,
  "supplierC_delta_failure": supplierC.delta.failure,
  "supplierD_delta_failure": supplierD.delta.failure,
  "supplierE_delta_failure": supplierE.delta.failure,
  "supplierF_delta_failure": supplierF.delta.failure,
  "supplierG_delta_failure": supplierG.delta.failure,
  "supplierA_epsilon_cost": supplierA.epsilon.cost,
  "supplierB_epsilon_cost": supplierB.epsilon.cost,
  "supplierC_epsilon_cost": supplierC.epsilon.cost,
  "supplierD_epsilon_cost": supplierD.epsilon.cost,
  "supplierE_epsilon_cost": supplierE.epsilon.cost,
  "supplierF_epsilon_cost": supplierF.epsilon.cost,
  "supplierG_epsilon_cost": supplierG.epsilon.cost,
  "supplierA_epsilon_delivery": supplierA.epsilon.delivery,
  "supplierB_epsilon_delivery": supplierB.epsilon.delivery,
  "supplierC_epsilon_delivery": supplierC.epsilon.delivery,
  "supplierD_epsilon_delivery": supplierD.epsilon.delivery,
  "supplierE_epsilon_delivery": supplierE.epsilon.delivery,
  "supplierF_epsilon_delivery": supplierF.epsilon.delivery,
  "supplierG_epsilon_delivery": supplierG.epsilon.delivery,
  "supplierA_epsilon_delivery_variation": supplierA.epsilon.deliveryVariation,
  "supplierB_epsilon_delivery_variation": supplierB.epsilon.deliveryVariation,
  "supplierC_epsilon_delivery_variation": supplierC.epsilon.deliveryVariation,
  "supplierD_epsilon_delivery_variation": supplierD.epsilon.deliveryVariation,
  "supplierE_epsilon_delivery_variation": supplierE.epsilon.deliveryVariation,
  "supplierF_epsilon_delivery_variation": supplierF.epsilon.deliveryVariation,
  "supplierG_epsilon_delivery_variation": supplierG.epsilon.deliveryVariation,
  "supplierA_epsilon_failure": supplierA.epsilon.failure,
  "supplierB_epsilon_failure": supplierB.epsilon.failure,
  "supplierC_epsilon_failure": supplierC.epsilon.failure,
  "supplierD_epsilon_failure": supplierD.epsilon.failure,
  "supplierE_epsilon_failure": supplierE.epsilon.failure,
  "supplierF_epsilon_failure": supplierF.epsilon.failure,
  "supplierG_epsilon_failure": supplierG.epsilon.failure
}

localStorage.setItem("sac_rules",JSON.stringify(sac_rules));

  return (
    <>
    <Heading>Cost Section</Heading>
    <Flex>
    <Box>
    {/* <DataTable alpha={alphaOrdered*3} beta={betaOrdered*2} gamma = {GammaD} delta = {deltaD} epsilon = {epsilonD}/> */}
    
    <DataTable alpha={alphaOrdered1*3} beta={betaOrdered1*2} gamma = {GammaDqtr1} delta = {deltaDqtr1} epsilon = {epsilonDqtr1}/>
    </Box>
  
    
    <TableContainer w={"60%"} h={'50%'}>
      <Table   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
        <Thead   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
          <Tr   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
            <Th colSpan={3} textAlign="center">
              Sub-Assembly Components
            </Th>
          </Tr>
          <Tr>
            <Th></Th>
            <Th>
              <Tr justifyContent={"space-between"}>
                <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"} textAlign="center">
                  Gamma
                </Th>
              </Tr>
            </Th>
            <Th>
              <Tr justifyContent={"space-between"}>
                <Th textAlign="center">Delta</Th>
              </Tr>
            </Th>
            <Th>
              <Tr justifyContent={"space-between"}>
                <Th textAlign="center">Epsilon</Th>
              </Tr>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}></Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Cost($)</Th>
              <Th>Delivery(%)</Th>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Failure(%)</Th>
            </Td>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Cost($)</Th>
              <Th>Delivery(%)</Th>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Failure(%)</Th>
            </Td>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Cost($)</Th>
              <Th>Delivery(%)</Th>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Failure(%)</Th>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Supplier A</Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.gamma.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "gamma",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.gamma.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "gamma",
                      "delivery",
                      e.target.value
                    )
                  }
                />{" "}
                {supplierA.gamma.delivery !== "" && "+-"}{" "}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.gamma.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "gamma",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.gamma.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "gamma",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.delta.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "delta",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.delta.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "delta",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.delta.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "delta",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.delta.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "delta",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.epsilon.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "epsilon",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.epsilon.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "epsilon",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.epsilon.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "epsilon",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierA.epsilon.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierA",
                      "epsilon",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Supplier B</Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.gamma.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "gamma",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.gamma.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "gamma",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.gamma.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "gamma",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.gamma.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "gamma",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.delta.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "delta",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.delta.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "delta",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.delta.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "delta",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.delta.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "delta",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.epsilon.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "epsilon",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.epsilon.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "epsilon",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.epsilon.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "epsilon",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierB.epsilon.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierB",
                      "epsilon",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Supplier C</Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.gamma.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "gamma",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.gamma.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "gamma",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.gamma.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "gamma",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.gamma.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "gamma",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.delta.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "delta",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.delta.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "delta",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.delta.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "delta",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.delta.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "delta",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.epsilon.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "epsilon",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.epsilon.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "epsilon",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.epsilon.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "epsilon",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierC.epsilon.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierC",
                      "epsilon",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
          </Tr>
          <Tr style={{ background: "skyblue" }}>
            <Td >
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"} >Supplier D</Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.gamma.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "gamma",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.gamma.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "gamma",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.gamma.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "gamma",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.gamma.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "gamma",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.delta.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "delta",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.delta.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "delta",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.delta.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "delta",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.delta.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "delta",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.epsilon.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "epsilon",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.epsilon.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "epsilon",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.epsilon.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "epsilon",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierD.epsilon.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierD",
                      "epsilon",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Supplier E</Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.gamma.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "gamma",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.gamma.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "gamma",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.gamma.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "gamma",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.gamma.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "gamma",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.delta.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "delta",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.delta.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "delta",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.delta.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "delta",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.delta.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "delta",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.epsilon.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "epsilon",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.epsilon.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "epsilon",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.epsilon.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "epsilon",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierE.epsilon.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierE",
                      "epsilon",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Supplier F</Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.gamma.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "gamma",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.gamma.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "gamma",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.gamma.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "gamma",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.gamma.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "gamma",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.delta.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "delta",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.delta.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "delta",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.delta.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "delta",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.delta.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "delta",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.epsilon.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "epsilon",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.epsilon.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "epsilon",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.epsilon.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "epsilon",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierF.epsilon.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierF",
                      "epsilon",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Th   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>Supplier G</Th>
            </Td>
            <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.gamma.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "gamma",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.gamma.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "gamma",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.gamma.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "gamma",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.gamma.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "gamma",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.delta.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "delta",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.delta.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "delta",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.delta.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "delta",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.delta.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "delta",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
            <Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"3rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.epsilon.cost}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "epsilon",
                      "cost",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.epsilon.delivery}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "epsilon",
                      "delivery",
                      e.target.value
                    )
                  }
                />
                {"+-"}
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.epsilon.deliveryVariation}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "epsilon",
                      "deliveryVariation",
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td   p={"0"} pt={"0"} pl={"0"} pr={"0"} pb={"0"}>
                <Input
                  h={"2rem"}
                  w={"2.5rem"}
                  pl={"0.5rem"}
                  pr={"0px"}
                  overflow={"auto"}
                  fontSize={"1rem"}
                  value={supplierG.epsilon.failure}
                  onChange={(e) =>
                    handleInputChange(
                      "supplierG",
                      "epsilon",
                      "failure",
                      e.target.value
                    )
                  }
                />
              </Td>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    </Flex>
    </>
  );
};

export default SubAssembly;