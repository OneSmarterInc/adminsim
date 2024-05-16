import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import "./InitialData.css";

const InitialData = ({
  numOfProducts,
  numOfChannels,
  numOfFirms,
  numOfRegions,
}) => {
  const [selectedValue, setSelectedvalue] = useState(200);
  const [alphaHyperValue, setalphaHyperValue] = useState(5);
  const [alphaMetaValue, setalphaMetaValue] = useState(5);
  const [betaHyperValue, setbetaHyperValue] = useState(5);
  const [betaMetaValue, setbetaMetaValue] = useState(5);

  const productValues = {
    product1: {
      alphaHyper: alphaHyperValue,
      alphaMeta: alphaMetaValue,
      betaHyper: betaHyperValue,
      betaMeta: betaMetaValue,
    },
    product2: {
      alphaHyper: alphaHyperValue,
      alphaMeta: alphaMetaValue,
      betaHyper: betaHyperValue,
      betaMeta: betaMetaValue,
    },
  };

  const firms = numOfFirms;
  const regions = numOfRegions;
  const products = numOfProducts;
  const channels = numOfChannels;
  //const units = 110000;

  const response = {
    firm_1: {
      region1: {
        product1: [20000, 10000],
        product2: [16000, 11000],
      },
      region2: {
        product1: [20000, 20000],
        product2: [11000, 7000],
      },
      region3: {
        product1: [35000, 25000],
        product2: [10000, 6000],
      },
    },
    firm_2: {
      region1: {
        product1: [20000, 10000],
        product2: [16000, 11000],
      },
      region2: {
        product1: [20000, 20000],
        product2: [11000, 7000],
      },
      region3: {
        product1: [35000, 25000],
        product2: [10000, 6000],
      },
    },
  };
  const result = {};
  const actual = {};
  const alpha = {};
  const percent = {};
  const final = {};

  for (let i = 0; i < firms; i++) {
    const fir = "firm_" + (i + 1);
    // response[fir] = {};
    result[fir] = {};
    actual[fir] = {};
    alpha[fir] = {};
    percent[fir] = {};
    final[fir] = {};

    for (let j = 0; j < regions; j++) {
      const joe = "region" + (j + 1);
      // response[fir][joe] = {};
      result[fir][joe] = {};
      actual[fir][joe] = {};
      alpha[fir][joe] = {};
      percent[fir][joe] = {};
      final[fir][joe] = {};

      for (let k = 0; k < products; k++) {
        const pr = "product" + (k + 1);
        const data = [];
        const ans = [];
        const qtr0 = [];
        const actDemand = [];
        const alphaData = [];
        const percentage = [];
        const finalData = [];
        const ampa = response[fir][joe][pr];

        for (let l = 0; l < channels; l++) {
          // const so = (Math.random() * (2.0 - 0.5) + 0.5).toFixed(2);
          // const var22 = units * (channels / 10);
          // const flag = Math.random() < 0.5;
          // let temp;
          // if (flag) {
          //   temp = var22 - Math.floor((so / 100) * var22);
          // } else {
          //   temp = var22 + Math.floor((so / 100) * var22);
          // }
          //console.log("temp",temp);

          const actDemandValue = Math.floor(
            Math.random() * (200 * 2 + 1) - 200
          );
          console.log(actDemandValue, "actDemandvalue");

          const randomValue = 2 + Math.random(0) * (0.5).toFixed(2);
          const percentageAmount = Math.floor((randomValue / 100) * ampa[l]);
          console.log(ampa[l]);
          const initial = ampa[l];
          const GDP = percentageAmount + ampa[l];
          const actualDemand = actDemandValue + GDP;
          const value = Math.ceil(actualDemand) / 1000;
          const alphaValue = Math.ceil(value) * 1000; //Math.round(0.6*actualDemand +(1-0.6)*temp,-3)

          const absoluteValue = alphaValue - actualDemand;
          const percentageValue = (absoluteValue / actualDemand) * 100;
          const finalvalue =
            1 - Math.abs(alphaValue - actualDemand) / actualDemand;
          const finalResult = Math.floor(finalvalue * 100);

          finalData.push(finalResult);
          ans.push(GDP);

          actDemand.push(actualDemand);
          alphaData.push(alphaValue);
          percentage.push(percentageValue);
        }

        //response[fir][joe][pr] = qtr0;
        result[fir][joe][pr] = ans;
        actual[fir][joe][pr] = actDemand;
        alpha[fir][joe][pr] = alphaData;
        percent[fir][joe][pr] = percentage;
        final[fir][joe][pr] = finalData;
      }
    }
  }

  //   result = 1- abs(alpha - actual) / actual
  // print(math.floor(result*100))
  //console.log("Final",final);
  //M<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const productSumsQtr0 = {};

  for (const firm in response) {
    const regions = response[firm];
    if (!productSumsQtr0[firm]) {
      productSumsQtr0[firm] = {};
    }

    for (const region in regions) {
      const products = regions[region];
      for (const product in products) {
        if (!productSumsQtr0[firm][product]) {
          productSumsQtr0[firm][product] = 0;
        }

        const productValues = products[product];
        const sum = productValues.reduce((acc, value) => acc + value, 0);
        productSumsQtr0[firm][product] += sum;
      }
    }
  }

  let sumDataQtr0 = [];
  for (const firm in productSumsQtr0) {
    const sum = Object.values(productSumsQtr0[firm]).reduce(
      (acc, value) => acc + value,
      0
    );
    sumDataQtr0.push(sum);
    //console.log(`${firm} = ${sum}`);
  }
  //console.log("sum",sumDataQtr0);

  let hyperProduced = sumDataQtr0[0];

  hyperProduced += hyperProduced * 0.006;
  //console.log("hyper",hyperProduced);

  const hyperWareAlphaNeeded = hyperProduced * 5;

  let metaProduced = sumDataQtr0[1];

  metaProduced += sumDataQtr0[1] * 0.006;
  //console.log("meta",metaProduced);

  const metawareAlphaNeeded = metaProduced * 5;

  let totalAlphaNeeded = hyperWareAlphaNeeded + metawareAlphaNeeded;

  let totalAlphaOrdered = totalAlphaNeeded;

  totalAlphaOrdered += totalAlphaOrdered * 0.02;
  console.log(totalAlphaOrdered, "alpha ordered");
  let aplhaRawCost = totalAlphaOrdered * 3;
  if (aplhaRawCost > 250000 && aplhaRawCost <= 500000) {
    let discount = (7.6 / 100) * aplhaRawCost;
    aplhaRawCost = aplhaRawCost - discount;
  } else if (aplhaRawCost > 500000 && aplhaRawCost <= 1000000) {
    let discount = (13.8 / 100) * aplhaRawCost;
    aplhaRawCost = aplhaRawCost - discount;
  } else if (aplhaRawCost > 1000000) {
    let discount = (19.2 / 100) * aplhaRawCost;
    aplhaRawCost = aplhaRawCost - discount;
  }
  console.log(aplhaRawCost, "alpha row cost---");

  const alphaInventory = totalAlphaOrdered.toFixed(0) - totalAlphaNeeded;

  let deltaMetaProduced = metaProduced;
  let metawareDeltaNeeded = deltaMetaProduced * 1;
  let totalDeltaNeeded = metawareDeltaNeeded;
  let deltaOrdered = totalDeltaNeeded;
  deltaOrdered += deltaOrdered * 0.15;

  let epsilonHyperProduced = hyperProduced;
  let hyperwareEpsilonNeeded = epsilonHyperProduced * 1;

  let epsilonMetaProduced = metaProduced;
  let metawareEpsilonNeeded = epsilonMetaProduced * 1;

  let totalEpsilonNeeded = hyperwareEpsilonNeeded + metawareEpsilonNeeded;
  let epsilonOrdered = totalEpsilonNeeded;

  epsilonOrdered += epsilonOrdered * 0.05;

  // logs
  console.log("QTR0");
  console.log("Hyper Forecast", sumDataQtr0[0]);
  console.log("Hyper Produced", hyperProduced);
  console.log("Hyperware Alpha Needed", hyperWareAlphaNeeded);
  console.log("Meta Forecast", sumDataQtr0[1]);
  console.log("Meta Produced", metaProduced);
  console.log("Metaware Alpha Needed", metawareAlphaNeeded);
  console.log("Total Alpha Needed", totalAlphaNeeded);
  console.log("Total Alpha Ordered", totalAlphaOrdered);

  let final_order = 0;
  sumDataQtr0.forEach((element) => {
    final_order += element;
  });

  final_order = final_order * 5;
  final_order = final_order + final_order * 0.02;
  let final_order_QTR0 = final_order;
  //console.log( "final order",final_order);

  let hyperProducedbeta = sumDataQtr0[0];

  hyperProducedbeta += hyperProducedbeta * 0.006;
  //console.log("hyper",hyperProduced);

  const hyperWareBetaNeeded = hyperProducedbeta * 5;

  let metaProducedbeta = sumDataQtr0[1];

  metaProducedbeta += sumDataQtr0[1] * 0.006;
  //console.log("meta",metaProduced);

  const metawareBetaNeeded = sumDataQtr0[1] * 5;

  let totalBetaNeeded = hyperWareBetaNeeded + metawareBetaNeeded;

  let totalBetaOrdered = totalBetaNeeded;

  totalBetaOrdered += totalBetaOrdered * 0.02;

  const betaInventory = totalBetaOrdered.toFixed(0) - totalBetaNeeded;

  let gammaProduced = hyperProduced;

  let gammaNeeded = gammaProduced * 1;

  let totalGammaNeeded = gammaNeeded;

  let gammaOrdered = totalGammaNeeded;

  gammaOrdered += gammaOrdered * 0.02;

  console.log(totalBetaOrdered, "total beta ordered---");
  let betaRawCost = totalBetaOrdered * 4;
  if (betaRawCost > 250000 && betaRawCost <= 500000) {
    let discount = (7.6 / 100) * betaRawCost;
    betaRawCost = betaRawCost - discount;
  } else if (betaRawCost > 500000 && betaRawCost <= 1000000) {
    let discount = (13.8 / 100) * aplhaRawCost;
    betaRawCost = betaRawCost - discount;
  } else if (betaRawCost > 1000000) {
    let discount = (19.2 / 100) * betaRawCost;
    betaRawCost = betaRawCost - discount;
  }
  console.log(betaRawCost, "beta row cost---");
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const productSums = {};

  // Iterate through firms

  for (const firm in alpha) {
    const regions = alpha[firm];
    if (!productSums[firm]) {
      productSums[firm] = {};
    }

    for (const region in regions) {
      const products = regions[region];
      for (const product in products) {
        if (!productSums[firm][product]) {
          productSums[firm][product] = 0;
        }

        const productValues = products[product];
        const sum = productValues.reduce((acc, value) => acc + value, 0);
        productSums[firm][product] += sum;
      }
    }
  }

  let sumData = [];
  for (const firm in productSums) {
    const sum = Object.values(productSums[firm]).reduce(
      (acc, value) => acc + value,
      0
    );
    sumData.push(sum);
    //console.log(`${firm} = ${sum}`);
  }
  let final_order_QTR1 = 0;
  sumData.forEach((element) => {
    final_order_QTR1 += element;
  });

  let hyperProducedqtr1 = sumData[0];

  hyperProducedqtr1 += hyperProducedqtr1 * 0.006;
  //console.log("hyper",hyperProduced);

  const hyperWareAlphaNeededqtr1 = hyperProducedqtr1 * 5;

  let metaProducedqtr1 = sumData[1];

  metaProducedqtr1 += sumData[1] * 0.006;
  //console.log("meta",metaProduced);

  const metawareAlphaNeededqtr1 = metaProducedqtr1 * 5;

  let totalAlphaNeededqtr1 = hyperWareAlphaNeededqtr1 + metawareAlphaNeededqtr1;

  let totalAlphaOrderedqtr1 = totalAlphaNeededqtr1;

  totalAlphaOrderedqtr1 =
    1 + totalAlphaOrderedqtr1 + totalAlphaOrderedqtr1 * 0.02;

  const alphaInventoryqtr1 =
    totalAlphaOrderedqtr1.toFixed(0) - totalAlphaNeededqtr1;

  let metaProducedDeltaqtr1 = metaProducedqtr1;
  let metawareDeltaNeededqtr1 = metaProducedDeltaqtr1 * 1;
  let totalDeltaNeededqtr1 = metawareDeltaNeededqtr1;
  let deltaOrderedqtr1 = totalDeltaNeededqtr1;
  deltaOrderedqtr1 += deltaOrderedqtr1 * 0.15;

  let epsilonHyperProducedqtr1 = hyperProducedqtr1;
  let hyperwareEpsilonNeededqtr1 = epsilonHyperProducedqtr1 * 1;

  let epsilonMetaProducedqtr1 = metaProducedqtr1;
  let metawareEpsilonNeededqtr1 = epsilonMetaProducedqtr1 * 1;

  let totalEpsilonNeededqtr1 =
    hyperwareEpsilonNeededqtr1 + metawareEpsilonNeededqtr1;
  let epsilonOrderedqtr1 = totalEpsilonNeededqtr1;

  epsilonOrderedqtr1 += epsilonOrderedqtr1 * 0.05;

  console.log("QTR1");
  console.log("Hyper Forecast", sumData[0]);
  console.log("Hyper Produced", hyperProducedqtr1);
  console.log("Hyperware Alpha Needed", hyperWareAlphaNeededqtr1);
  console.log("Meta Forecast", sumData[1]);
  console.log("Meta Produced", metaProducedqtr1);
  console.log("Metaware Alpha Needed", metawareAlphaNeededqtr1);
  console.log("Total Alpha Needed", totalAlphaNeededqtr1);
  console.log("Total Alpha Ordered", totalAlphaOrderedqtr1);

  let aplhaRawCost1 = totalAlphaOrderedqtr1 * 3;
  if (aplhaRawCost1 > 250000 && aplhaRawCost1 <= 500000) {
    let discount = (7.6 / 100) * aplhaRawCost1;
    aplhaRawCost1 = aplhaRawCost1 - discount;
  } else if (aplhaRawCost1 > 500000 && aplhaRawCost1 <= 1000000) {
    let discount = (13.8 / 100) * aplhaRawCost1;
    aplhaRawCost1 = aplhaRawCost1 - discount;
  } else if (aplhaRawCost1 > 1000000) {
    let discount = (19.2 / 100) * aplhaRawCost1;
    aplhaRawCost1 = aplhaRawCost1 - discount;
  }
  console.log(aplhaRawCost1, "alpha row cost1---");

  let hyperProducedbetaqtr1 = sumData[0];

  hyperProducedbetaqtr1 += hyperProducedbetaqtr1 * 0.006;
  //console.log("hyper",hyperProduced);

  const hyperWareBetaNeededqtr1 = hyperProducedbetaqtr1 * 5;

  let metaProducedbetaqtr1 = sumData[1];

  metaProducedbetaqtr1 += sumData[1] * 0.006;
  //console.log("meta",metaProduced);

  const metawareBetaNeededqtr1 = metaProducedbetaqtr1 * 5;

  let totalBetaNeededqtr1 = hyperWareBetaNeededqtr1 + metawareBetaNeededqtr1;

  let totalBetaOrderedqtr1 = totalBetaNeededqtr1;

  totalBetaOrderedqtr1 = 1 + totalBetaOrderedqtr1 + totalBetaOrderedqtr1 * 0.02;

  console.log(totalBetaOrderedqtr1, "total beta ordered qtr1---");

  let betaRawCost1 = totalBetaOrderedqtr1 * 4;
  if (betaRawCost1 > 250000 && betaRawCost1 <= 500000) {
    let discount = (7.6 / 100) * betaRawCost1;
    betaRawCost1 = betaRawCost1 - discount;
  } else if (betaRawCost1 > 500000 && betaRawCost1 <= 1000000) {
    let discount = (13.8 / 100) * betaRawCost1;
    betaRawCost1 = betaRawCost1 - discount;
  } else if (betaRawCost1 > 1000000) {
    let discount = (19.2 / 100) * betaRawCost1;
    betaRawCost1 = betaRawCost1 - discount;
  }
  console.log(betaRawCost1, "beta row cost1---");

  const betaInventoryqtr1 =
    totalAlphaOrderedqtr1.toFixed(0) - totalAlphaNeededqtr1;

  console.log(final_order_QTR0, ">>>>>>>>>>>>mut>>>>>>>>", final_order_QTR1);

  final_order_QTR1 = final_order_QTR1 * 5;
  final_order_QTR1 = final_order_QTR1 + final_order_QTR1 * 0.02;

  let hyperProducedGammaqtr1 = hyperProducedqtr1;
  let hyperwareGammaNeededqtr1 = hyperProducedGammaqtr1 * 1;
  let totalGammaNeededqtr1 = hyperwareGammaNeededqtr1;
  let totalGammaOrderedqtr1 = totalGammaNeededqtr1;
  totalGammaOrderedqtr1 += totalGammaOrderedqtr1 * 0.02;

  //console.log(final_order_QTR0,'>>>>>>>>>>>>mut>>>>>>>>',final_order_QTR1);
  console.log("Sum of products:", productSums);

  const alphaNeeded = {};

  for (const firm in productSums) {
    alphaNeeded[firm] = {};
    for (const product in productSums[firm]) {
      const dynamicValue = productValues[product].alphaHyper;
      alphaNeeded[firm][product] = productSums[firm][product] * dynamicValue;
    }
  }

  console.log("Alpha Needed:", alphaNeeded);

  const betaNeeded = {};

  for (const firm in productSums) {
    betaNeeded[firm] = {};
    for (const product in productSums[firm]) {
      const dynamicValue = productValues[product].betaHyper;
      betaNeeded[firm][product] = productSums[firm][product] * dynamicValue;
    }
  }

  console.log("Beta Needed:", betaNeeded);

  const forecast = {};

  for (const firm in alpha) {
    const regions = alpha[firm];
    if (!forecast[firm]) {
      forecast[firm] = {};
    }

    for (const region in regions) {
      const products = regions[region];
      for (const product in products) {
        if (!forecast[firm][product]) {
          forecast[firm][product] = 0;
        }

        const productValues = products[product];
        const sum = productValues.reduce((acc, value) => acc + value, 0);
        forecast[firm][product] += sum;
      }
    }
  }
  console.log("forecast", forecast);

  const alphaOrdered = {};

  for (const firm in forecast) {
    alphaOrdered[firm] = {};
    for (const product in forecast[firm]) {
      const dynamicValue = productValues[product].alphaHyper;
      alphaOrdered[firm][product] = forecast[firm][product] * dynamicValue;
    }
  }

  console.log("Alpha Ordered:", alphaOrdered);

  const betaOrdered = {};

  for (const firm in forecast) {
    betaOrdered[firm] = {};
    for (const product in forecast[firm]) {
      const dynamicValue = productValues[product].betaHyper;
      betaOrdered[firm][product] = forecast[firm][product] * dynamicValue;
    }
  }

  console.log("Beta Ordered:", betaOrdered);

  const actualDemandSum = {};

  // Iterate through firms
  for (const firm in actual) {
    const regions = actual[firm];
    if (!actualDemandSum[firm]) {
      actualDemandSum[firm] = {};
    }

    for (const region in regions) {
      const products = regions[region];
      for (const product in products) {
        if (!actualDemandSum[firm][product]) {
          actualDemandSum[firm][product] = 0;
        }

        const productValues = products[product];
        const sum = productValues.reduce((acc, value) => acc + value, 0);
        actualDemandSum[firm][product] += sum;
      }
    }
  }

  //console.log(" Sum of actualDemand",actualDemandSum);
  console.log("response", response);

  const differences = {};

  // Loop through the firms
  for (const firm in productSums) {
    if (!differences[firm]) {
      differences[firm] = {};
    }

    // Iterate through products
    for (const product in productSums[firm]) {
      const productSumValue = productSums[firm][product];
      const actualDemandValue = actualDemandSum[firm][product];
      const diff = productSumValue - actualDemandValue;

      differences[firm][product] = diff;
    }
  }

  const numberOfChannels = channels; // Assuming the number of channels is constant

  const renderChannelHeaders = () => {
    let headers = [];
    for (let i = 1; i <= channels; i++) {
      headers.push(<Th key={`channel-header-${i}`}>Channel {i}</Th>);
    }
    return headers;
  };

  // Function to generate table cells for channel data
  const renderChannelData = (data) => {
    return data.map((value, index) => (
      <Td className="channel-cell" key={`value_${index}`}>
        {value}
      </Td>
    ));
  };

  const renderChannelData2 = (data) => {
    return data.map((value, index) => (
      <Td className="channel-cell" key={`value_${index}`}>
        {value}%
      </Td>
    ));
  };

  /// Sub-Assembly component
  // let failure = 0.02;
  // let randNum = Math.random();
  // let gammaOrderedAsurface = (307890/ 8) * ((jStat.beta.inv(randNum, alpha, beta) + 1) * (1 -  failure));

  //////////////////////////////////////////////////////////////////

  const randomPercentage = 0 + Math.random() * (0.02 - 0);
  const random2 = 0 + Math.random() * (0.019 - 0);
  const random3 = 0 + Math.random() * (0.012 - 0);

  ////////////////////////////////////////////////////////////////////

  // Calculate the result
  var gammaOrderedAsurface =
    (gammaOrdered / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedAair =
    (gammaOrdered / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedBsurface =
    (gammaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, random2) + 1);
  var gammaOrderedBair =
    (gammaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, random2) + 1);
  var gammaOrderedCsurface =
    (gammaOrdered / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedCair =
    (gammaOrdered / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedDsurface =
    (gammaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, random3) + 1);
  var gammaOrderedDair =
    (gammaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, random3) + 1);

  let gammaOrderedTotal =
    gammaOrderedAsurface +
    gammaOrderedAair +
    gammaOrderedBsurface +
    gammaOrderedBair +
    gammaOrderedCsurface +
    gammaOrderedCair +
    gammaOrderedDsurface +
    gammaOrderedDair;
  let gammaOrderedRoundedSum = Math.ceil(gammaOrderedTotal);

  // Function to calculate the inverse beta distribution
  function betaInv(p, alpha, beta, lower, upper) {
    var q = 0;
    var betaValue = betaFunction(alpha, beta);
    while (q < lower || q > upper) {
      q = betaFunctionInc(alpha, beta, p);
      p = p + (q < lower ? 0.0001 : -0.0001);
    }
    return p;
  }

  // Function to calculate the beta function
  function betaFunction(alpha, beta) {
    return Math.exp(logGamma(alpha) + logGamma(beta) - logGamma(alpha + beta));
  }

  // Function to calculate the incomplete beta function
  function betaFunctionInc(alpha, beta, x) {
    return Math.exp(
      logGamma(alpha + beta) -
        logGamma(alpha) -
        logGamma(beta) +
        alpha * Math.log(x) +
        beta * Math.log(1 - x)
    );
  }

  // Function to calculate the natural logarithm of the gamma function
  function logGamma(x) {
    var coef = [
      76.18009172947146, -86.50532032941677, 24.01409824083091,
      -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5,
    ];
    var ser = 1.000000000190015;
    var xx, y, tmp, ser;

    tmp = (y = xx = x) - 1.0;
    for (var j = 0; j < 6; j++) ser += coef[j] / ++y;
    return (
      -Math.log(
        (2.5066282746310005 * ser) / xx +
          0.5 * Math.log((2.5066282746310005 * tmp) / xx)
      ) +
      tmp * (Math.log(xx) - 1)
    );
  }

  var gammaDeliveredAsurface =
    normInv(Math.random(), 0.8, randomPercentage) * gammaOrderedAsurface;
  var gammaDeliveredAair = gammaOrderedAair;
  var gammaDeliveredBsurface =
    normInv(Math.random(), 0.85, 0.04) * gammaOrderedBsurface;
  var gammaDeliveredBair = gammaOrderedBair;
  var gammaDeliveredCsurface =
    normInv(Math.random(), 0.9, 0.08) * gammaOrderedCsurface;
  var gammaDeliveredCair = gammaOrderedCair;
  var gammaDeliveredDsurface =
    normInv(Math.random(), 0.9, 0.08) * gammaOrderedDsurface;
  var gammaDeliveredDair = gammaOrderedDair;

  let gammaDeliveredTotal =
    gammaDeliveredAsurface +
    gammaDeliveredAair +
    gammaDeliveredBsurface +
    gammaDeliveredBair +
    gammaDeliveredCsurface +
    gammaDeliveredCair +
    gammaDeliveredDsurface +
    gammaDeliveredDair;
  let gammaDeliveredRoundedSum = Math.ceil(gammaDeliveredTotal);

  var totalDifference = gammaOrderedRoundedSum - gammaDeliveredRoundedSum;

  var totalDeliveredStock = gammaDeliveredRoundedSum;

  let neededForProduction1 = totalGammaNeeded;

  let endingStock1 = totalDeliveredStock - neededForProduction1;

  // Function to calculate the inverse normal distribution
  function normInv(p, mean, standardDeviation) {
    var q = 0;
    var x =
      mean +
      standardDeviation * (Math.sqrt(2) * betaInv(p, 0.5, 0.5, 0, 1) - 1);
    while (x < 0) {
      q = p + (x < 0 ? 0.0001 : -0.0001);
      x =
        mean +
        standardDeviation * (Math.sqrt(2) * betaInv(q, 0.5, 0.5, 0, 1) - 1);
    }
    return x;
  }

  var gammaOrderedAsurfaceqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedAairqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedBsurfaceqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, random2) + 1);
  var gammaOrderedBairqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, random2) + 1);
  var gammaOrderedCsurfaceqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedCairqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, randomPercentage) + 1);
  var gammaOrderedDsurfaceqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, random3) + 1);
  var gammaOrderedDairqtr1 =
    (totalGammaOrderedqtr1 / 8) *
    (betaInv(Math.random(), 10, 3, 0, random3) + 1);

  let gammaOrderedTotalqtr1 =
    gammaOrderedAsurfaceqtr1 +
    gammaOrderedAairqtr1 +
    gammaOrderedBsurfaceqtr1 +
    gammaOrderedBairqtr1 +
    gammaOrderedCsurfaceqtr1 +
    gammaOrderedCairqtr1 +
    gammaOrderedDsurfaceqtr1 +
    gammaOrderedDairqtr1;
  let gammaOrderedRoundedSumqtr1 = Math.ceil(gammaOrderedTotalqtr1);

  ///////////////////////////////////////////////////

  var gammaDeliveredAsurfaceqtr1 =
    normInv(Math.random(), 0.8, randomPercentage) * gammaOrderedAsurfaceqtr1;
  var gammaDeliveredAairqtr1 = gammaOrderedAairqtr1;
  var gammaDeliveredBsurfaceqtr1 =
    normInv(Math.random(), 0.85, 0.04) * gammaOrderedBsurfaceqtr1;
  var gammaDeliveredBairqtr1 = gammaOrderedBairqtr1;
  var gammaDeliveredCsurfaceqtr1 =
    normInv(Math.random(), 0.9, 0.08) * gammaOrderedCsurfaceqtr1;
  var gammaDeliveredCairqtr1 = gammaOrderedCairqtr1;
  var gammaDeliveredDsurfaceqtr1 =
    normInv(Math.random(), 0.9, 0.08) * gammaOrderedDsurfaceqtr1;
  var gammaDeliveredDairqtr1 = gammaOrderedDairqtr1;

  let gammaDeliveredTotalqtr1 =
    gammaDeliveredAsurfaceqtr1 +
    gammaDeliveredAairqtr1 +
    gammaDeliveredBsurfaceqtr1 +
    gammaDeliveredBairqtr1 +
    gammaDeliveredCsurfaceqtr1 +
    gammaDeliveredCairqtr1 +
    gammaDeliveredDsurfaceqtr1 +
    gammaDeliveredDairqtr1;
  let gammaDeliveredRoundedSumqtr1 = Math.ceil(gammaDeliveredTotalqtr1);

  var totalDifferenceqtr1 =
    gammaOrderedRoundedSumqtr1 - gammaDeliveredRoundedSumqtr1;

  var totalDeliveredStockqtr1 = gammaDeliveredRoundedSumqtr1;

  let neededForProduction1qtr1 = totalGammaNeededqtr1;

  let endingStock1qtr1 = totalDeliveredStockqtr1 - neededForProduction1qtr1;

  ///////////////////////////////////////////////////////

  var deltaOrderedBsurface =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.026) + 1);
  var deltaOrderedBair =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.026) + 1);
  var deltaOrderedCsurface =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.025) + 1);
  var deltaOrderedCair =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.025) + 1);
  var deltaOrderedDsurface =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var deltaOrderedDair =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var deltaOrderedEsurface =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.027) + 1);
  var deltaOrderedEair =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.027) + 1);
  var deltaOrderedFsurface =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var deltaOrderedFair =
    (deltaOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);

  let deltaOrderedTotal =
    deltaOrderedBsurface +
    deltaOrderedBair +
    deltaOrderedCsurface +
    deltaOrderedCair +
    deltaOrderedDsurface +
    deltaOrderedDair +
    deltaOrderedEsurface +
    deltaOrderedEair +
    deltaOrderedFsurface +
    deltaOrderedFair;
  let deltaOrderedRoundedSum = Math.ceil(deltaOrderedTotal);

  var deltaDeliveredBsurface =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedBsurface;
  var deltaDeliveredBair = deltaOrderedBair;
  var deltaDeliveredCsurface =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedCsurface;
  var deltaDeliveredCair = deltaOrderedCair;
  var deltaDeliveredDsurface =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedDsurface;
  var deltaDeliveredDair = deltaOrderedDair;
  var deltaDeliveredEsurface =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedEsurface;
  var deltaDeliveredEair = deltaOrderedEair;
  var deltaDeliveredFsurface =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedFsurface;
  var deltaDeliveredFair = deltaOrderedFair;

  let deltaDeliveredTotal =
    deltaDeliveredBsurface +
    deltaDeliveredBair +
    deltaDeliveredCsurface +
    deltaDeliveredCair +
    deltaDeliveredDsurface +
    deltaDeliveredDair +
    deltaDeliveredEsurface +
    deltaDeliveredEair +
    deltaDeliveredFsurface +
    deltaDeliveredFair;
  let deltaDeliveredRoundedSum = Math.ceil(deltaDeliveredTotal);

  var totalDifferenceDelta = deltaOrderedRoundedSum - deltaDeliveredRoundedSum;

  var totalDeliveredStockDelta = deltaDeliveredRoundedSum;

  let neededForProduction1Delta = totalDeltaNeeded;

  let endingStock1Delta = totalDeliveredStockDelta - neededForProduction1;

  ///////////////////////////////////////////////////////

  var deltaOrderedBsurfaceqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.026) + 1);
  var deltaOrderedBairqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.026) + 1);
  var deltaOrderedCsurfaceqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.025) + 1);
  var deltaOrderedCairqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.025) + 1);
  var deltaOrderedDsurfaceqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var deltaOrderedDairqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var deltaOrderedEsurfaceqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.027) + 1);
  var deltaOrderedEairqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.027) + 1);
  var deltaOrderedFsurfaceqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var deltaOrderedFairqtr1 =
    (deltaOrderedqtr1 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);

  let deltaOrderedTotalqtr1 =
    deltaOrderedBsurfaceqtr1 +
    deltaOrderedBairqtr1 +
    deltaOrderedCsurfaceqtr1 +
    deltaOrderedCairqtr1 +
    deltaOrderedDsurfaceqtr1 +
    deltaOrderedDairqtr1 +
    deltaOrderedEsurfaceqtr1 +
    deltaOrderedEairqtr1 +
    deltaOrderedFsurfaceqtr1 +
    deltaOrderedFairqtr1;
  let deltaOrderedRoundedSumqtr1 = Math.ceil(deltaOrderedTotalqtr1);

  var deltaDeliveredBsurfaceqtr1 =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedBsurfaceqtr1;
  var deltaDeliveredBairqtr1 = deltaOrderedBairqtr1;
  var deltaDeliveredCsurfaceqtr1 =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedCsurfaceqtr1;
  var deltaDeliveredCairqtr1 = deltaOrderedCairqtr1;
  var deltaDeliveredDsurfaceqtr1 =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedDsurfaceqtr1;
  var deltaDeliveredDairqtr1 = deltaOrderedDairqtr1;
  var deltaDeliveredEsurfaceqtr1 =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedEsurfaceqtr1;
  var deltaDeliveredEairqtr1 = deltaOrderedEairqtr1;
  var deltaDeliveredFsurfaceqtr1 =
    normInv(Math.random(), 0.75, 0.04) * deltaOrderedFsurfaceqtr1;
  var deltaDeliveredFairqtr1 = deltaOrderedFairqtr1;

  let deltaDeliveredTotalqtr1 =
    deltaDeliveredBsurfaceqtr1 +
    deltaDeliveredBairqtr1 +
    deltaDeliveredCsurfaceqtr1 +
    deltaDeliveredCairqtr1 +
    deltaDeliveredDsurfaceqtr1 +
    deltaDeliveredDairqtr1 +
    deltaDeliveredEsurfaceqtr1 +
    deltaDeliveredEairqtr1 +
    deltaDeliveredFsurfaceqtr1 +
    deltaDeliveredFairqtr1;
  let deltaDeliveredRoundedSumqtr1 = Math.ceil(deltaDeliveredTotalqtr1);

  var totalDifferenceDeltaqtr1 =
    deltaOrderedRoundedSumqtr1 - deltaDeliveredRoundedSumqtr1;

  var totalDeliveredStockDeltaqtr1 = deltaDeliveredRoundedSumqtr1;

  let neededForProduction1Deltaqtr1 = totalDeltaNeededqtr1;

  let endingStock1Deltaqtr1 =
    totalDeliveredStockDeltaqtr1 - neededForProduction1Deltaqtr1;

  //////////////////////////////////////////////////////

  var epsilonOrderedDsurface =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedDair =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedEsurface =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedEair =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedFsurface =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var epsilonOrderedFair =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var epsilonOrderedGsurface =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.017) + 1);
  var epsilonOrderedGair =
    (epsilonOrdered / 8) * (betaInv(Math.random(), 10, 3, 0, 0.017) + 1);

  var epsilonOrderedTotal =
    epsilonOrderedDsurface +
    epsilonOrderedDair +
    epsilonOrderedEsurface +
    epsilonOrderedEair +
    epsilonOrderedFsurface +
    epsilonOrderedFair +
    epsilonOrderedGsurface +
    epsilonOrderedGair;
  let eplisonOrderedRoundedSum = Math.ceil(epsilonOrderedTotal);

  var epsilonDeliveredDsurface =
    normInv(Math.random(), 0.7, 0.012) * epsilonOrderedDsurface;
  var epsilonDeliveredDair = epsilonOrderedDair;
  var epsilonDeliveredEsurface =
    normInv(Math.random(), 0.85, 0.04) * epsilonOrderedEsurface;
  var epsilonDeliveredEair = epsilonOrderedEair;
  var epsilonDeliveredFsurface =
    normInv(Math.random(), 0.9, 0.08) * epsilonOrderedFsurface;
  var epsilonDeliveredFair = epsilonOrderedFair;
  var epsilonDeliveredGsurface =
    normInv(Math.random(), 0.9, 0.08) * epsilonOrderedGsurface;
  var epsilonDeliveredGair = epsilonOrderedGair;

  let epsilonDeliveredTotal =
    epsilonDeliveredDsurface +
    epsilonDeliveredDair +
    epsilonDeliveredEsurface +
    epsilonDeliveredEair +
    epsilonDeliveredFsurface +
    epsilonDeliveredFair +
    epsilonDeliveredGsurface +
    epsilonDeliveredGair;
  let epsilonDeliveredRoundedSum = Math.ceil(epsilonDeliveredTotal);

  var epsilonOrderedDsurfaceqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedDairqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedEsurfaceqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedEairqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.028) + 1);
  var epsilonOrderedFsurfaceqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var epsilonOrderedFairqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.018) + 1);
  var epsilonOrderedGsurfaceqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.017) + 1);
  var epsilonOrderedGairqtr1 =
    (423183 / 8) * (betaInv(Math.random(), 10, 3, 0, 0.017) + 1);

  var epsilonOrderedTotalqtr1 =
    epsilonOrderedDsurfaceqtr1 +
    epsilonOrderedDairqtr1 +
    epsilonOrderedEsurfaceqtr1 +
    epsilonOrderedEairqtr1 +
    epsilonOrderedFsurfaceqtr1 +
    epsilonOrderedFairqtr1 +
    epsilonOrderedGsurfaceqtr1 +
    epsilonOrderedGairqtr1;
  let eplisonOrderedRoundedSumqtr1 = Math.ceil(epsilonOrderedTotalqtr1);

  var epsilonDeliveredDsurfaceqtr1 =
    normInv(Math.random(), 0.7, 0.012) * epsilonOrderedDsurfaceqtr1;
  var epsilonDeliveredDairqtr1 = epsilonOrderedDairqtr1;
  var epsilonDeliveredEsurfaceqtr1 =
    normInv(Math.random(), 0.75, 0.01) * epsilonOrderedEsurfaceqtr1;
  var epsilonDeliveredEairqtr1 = epsilonOrderedEairqtr1;
  var epsilonDeliveredFsurfaceqtr1 =
    normInv(Math.random(), 0.77, 0.012) * epsilonOrderedFsurfaceqtr1;
  var epsilonDeliveredFairqtr1 = epsilonOrderedFairqtr1;
  var epsilonDeliveredGsurfaceqtr1 =
    normInv(Math.random(), 0.7, 0.012) * epsilonOrderedGsurfaceqtr1;
  var epsilonDeliveredGairqtr1 = epsilonOrderedGairqtr1;

  let epsilonDeliveredTotalqtr1 =
    epsilonDeliveredDsurfaceqtr1 +
    epsilonDeliveredDairqtr1 +
    epsilonDeliveredEsurfaceqtr1 +
    epsilonDeliveredEairqtr1 +
    epsilonDeliveredFsurfaceqtr1 +
    epsilonDeliveredFairqtr1 +
    epsilonDeliveredGsurfaceqtr1 +
    epsilonDeliveredGairqtr1;
  let epsilonDeliveredRoundedSumqtr1 = Math.ceil(epsilonDeliveredTotalqtr1);

  let totalDeliveredStockEpsilonqtr1 =
    epsilonDeliveredRoundedSum + epsilonOrderedGsurface;
  let epsilonEndingStockqtr1 =
    totalDeliveredStockEpsilonqtr1 - totalEpsilonNeededqtr1;

  let emergencyProcurementqtr1 = Math.max(
    totalDeliveredStockEpsilonqtr1 - totalEpsilonNeededqtr1,
    0
  );
  // let neededForProduction1qtr1  = totalGammaNeededqtr1 ;

  // let endingStock1qtr1  = totalDeliveredStockqtr1  - neededForProduction1qtr1 ;

  const hyperwareRegions = {
    region1: [20000, 0.4],
    region2: [20000, 0.8],
    region3: [35000, 0.8],
  };

  // Generate a random number between -0.4 and 0.404
  function region1Random(min, max) {
    return Math.random() * (max - min) + min;
  }

  let randomNumberRegion1 = region1Random(0.399, 0.404);
  // randomNumberRegion1 = randomNumberRegion1.toFixed(2);
  console.log(randomNumberRegion1.toFixed(2), "+++");

  let region1Extra =
    hyperwareRegions.region1[0] * randomNumberRegion1.toFixed(5);
  console.log(region1Extra, "__++");

  let region1TotalOrder = hyperwareRegions.region1[0] + region1Extra;

  let randomNumberRegion2 = region1Random(0.799, 0.808);

  let region2Extra =
    hyperwareRegions.region2[0] * randomNumberRegion2.toFixed(5);
  let region2TotalOrder = hyperwareRegions.region2[0] + region2Extra;

  let randomNumberRegion3 = region1Random(0.799, 0.808);

  let region3Extra =
    hyperwareRegions.region3[0] * randomNumberRegion3.toFixed(5);
  let region3TotalOrder = hyperwareRegions.region3[0] + region3Extra;

  // let extraPolicyRegion1 =

  const metawareRegions = {
    region1: [16000, 0.35],
    region2: [11000, 0.6],
    region3: [10000, 0.6],
  };

  let randomNumberMetawareRegion1 = region1Random(0.349, 0.353);

  let region1MetawareExtra =
    metawareRegions.region1[0] * randomNumberMetawareRegion1.toFixed(5);
  let region1MetawareTotalOrder = metawareRegions.region1[0] + region1MetawareExtra;

  let randomNumberMetawareRegion2 = region1Random(0.599, 0.606);

  let region2MetawareExtra =
    metawareRegions.region2[0] * randomNumberMetawareRegion2.toFixed(5);
  let region2MetawareTotalOrder = metawareRegions.region2[0] + region2MetawareExtra;

  let randomNumberMetawareRegion3 = region1Random(0.599, 0.606);

  let region3MetawareExtra =
    metawareRegions.region3[0] * randomNumberMetawareRegion3.toFixed(5);
  let region3MetawareTotalOrder = metawareRegions.region3[0] + region3MetawareExtra;

  return (
    <>
      <div className="table-container">
        <h2>QTR0</h2>
        <h2>Initial Data</h2>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Firm</Th>
              <Th>Region</Th>
              <Th>Product</Th>
              {renderChannelHeaders()}
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(response).map((firm) =>
              Object.keys(response[firm]).map((region) =>
                Object.keys(response[firm][region]).map(
                  (product, productIndex) => {
                    const rowspan = Object.keys(response[firm][region]).length;
                    return (
                      <Tr key={`${firm}-${region}-${product}`}>
                        {productIndex === 0 && (
                          <Td className="firm-cell" rowSpan={rowspan}>
                            {firm}
                          </Td>
                        )}
                        {productIndex === 0 && (
                          <Td className="region-cell" rowSpan={rowspan}>
                            {region}
                          </Td>
                        )}
                        <Td className="product-cell">{product}</Td>
                        {renderChannelData(response[firm][region][product])}
                      </Tr>
                    );
                  }
                )
              )
            )}
          </Tbody>
        </Table>
      </div>

      <div className="table-container">
        <h2>QTR1</h2>
        <h2>GDP</h2>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Firm</Th>
              <Th>Region</Th>
              <Th>Product</Th>
              {renderChannelHeaders()}
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(result).map((firm) =>
              Object.keys(result[firm]).map((region) =>
                Object.keys(result[firm][region]).map(
                  (product, productIndex) => {
                    const rowspan = Object.keys(result[firm][region]).length;
                    return (
                      <Tr key={`${firm}-${region}-${product}`}>
                        {productIndex === 0 && (
                          <Td className="firm-cell" rowSpan={rowspan}>
                            {firm}
                          </Td>
                        )}
                        {productIndex === 0 && (
                          <Td className="region-cell" rowSpan={rowspan}>
                            {region}
                          </Td>
                        )}
                        <Td className="product-cell">{product}</Td>
                        {renderChannelData(result[firm][region][product])}
                      </Tr>
                    );
                  }
                )
              )
            )}
          </Tbody>
        </Table>
      </div>

      <div className="table-container">
        <Flex justifyContent={"center"} gap={10}>
          <h2>Actual Demand</h2>
          <Input
            border={"1px solid black"}
            onChange={(e) => setSelectedvalue(e.target.value)}
            w={"10%"}
            type="number"
            value={selectedValue}
            placeholder="Current value is 200"
          />
        </Flex>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Firm</Th>
              <Th>Region</Th>
              <Th>Product</Th>

              {renderChannelHeaders()}
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(actual).map((firm) =>
              Object.keys(actual[firm]).map((region) =>
                Object.keys(actual[firm][region]).map(
                  (product, productIndex) => {
                    const rowspan = Object.keys(actual[firm][region]).length;
                    return (
                      <Tr key={`${firm}-${region}-${product}`}>
                        {productIndex === 0 && (
                          <Td className="firm-cell" rowSpan={rowspan}>
                            {firm}
                          </Td>
                        )}
                        {productIndex === 0 && (
                          <Td className="region-cell" rowSpan={rowspan}>
                            {region}
                          </Td>
                        )}
                        <Td className="product-cell">{product}</Td>

                        {renderChannelData(actual[firm][region][product])}
                      </Tr>
                    );
                  }
                )
              )
            )}
          </Tbody>
        </Table>
      </div>

      <div className="table-container">
        <h2>Forecast Alpha</h2>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Firm</Th>
              <Th>Region</Th>
              <Th>Product</Th>
              {renderChannelHeaders()}
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(alpha).map((firm) =>
              Object.keys(alpha[firm]).map((region) =>
                Object.keys(alpha[firm][region]).map(
                  (product, productIndex) => {
                    const rowspan = Object.keys(alpha[firm][region]).length;
                    return (
                      <Tr key={`${firm}-${region}-${product}`}>
                        {productIndex === 0 && (
                          <Td className="firm-cell" rowSpan={rowspan}>
                            {firm}
                          </Td>
                        )}
                        {productIndex === 0 && (
                          <Td className="region-cell" rowSpan={rowspan}>
                            {region}
                          </Td>
                        )}
                        <Td className="product-cell">{product}</Td>
                        {renderChannelData(alpha[firm][region][product])}
                      </Tr>
                    );
                  }
                )
              )
            )}
          </Tbody>
        </Table>
      </div>

      <div className="table-container">
        <h2>Forecast Accuracy</h2>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Firm</Th>
              <Th>Region</Th>
              <Th>Product</Th>
              {renderChannelHeaders()}
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(final).map((firm) =>
              Object.keys(final[firm]).map((region) =>
                Object.keys(final[firm][region]).map(
                  (product, productIndex) => {
                    const rowspan = Object.keys(final[firm][region]).length;
                    return (
                      <Tr key={`${firm}-${region}-${product}`}>
                        {productIndex === 0 && (
                          <Td className="firm-cell" rowSpan={rowspan}>
                            {firm}
                          </Td>
                        )}
                        {productIndex === 0 && (
                          <Td className="region-cell" rowSpan={rowspan}>
                            {region}
                          </Td>
                        )}
                        <Td className="product-cell">{product}</Td>
                        {renderChannelData2(final[firm][region][product])}
                      </Tr>
                    );
                  }
                )
              )
            )}
          </Tbody>
        </Table>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Forecast accros region</h2>
        <table>
          <thead>
            <tr>
              <th>Firms</th>
              <th>Product 1</th>
              <th>Product 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(productSums).map(([company, products]) => (
              <tr key={company}>
                <td>{company}</td>
                <td>{products.product1}</td>
                <td>{products.product2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h6>Sum of Actual Demand</h6>
        <table>
          <thead>
            <tr>
              <th>Firms</th>
              <th>Product 1</th>
              <th>Product 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(actualDemandSum).map(([company, products]) => (
              <tr key={company}>
                <td>{company}</td>
                <td>{products.product1}</td>
                <td>{products.product2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h6>EndInventory(difference)</h6>
        <table>
          <thead>
            <tr>
              <th>Firms</th>
              <th>Product 1</th>
              <th>Product 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(differences).map(([company, products]) => (
              <tr key={company}>
                <td>{company}</td>
                <td>{products.product1}</td>
                <td>{products.product2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>total units(products) Per Firm</h2>
        <table>
          <thead>
            <tr>
              <th>Firms</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {sumData.map((value, index) => (
              <tr key={index}>
                <td>{`firm${index + 1}`}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Explode to BOM</h2>
        <table>
          <tbody>
            <tr>
              <th>Raw/SAC Needs</th>
              <th>Product 1</th>
              <th>Product 2 </th>
            </tr>
            <tr>
              <td>Alpha (kg/unit)</td>
              <td>
                <Flex justifyContent={"center"} gap={5}>
                  {/* {productValues.product1.alphaHyper} */}
                  <Input
                    w={"12%"}
                    value={alphaHyperValue}
                    onChange={(e) => setalphaHyperValue(e.target.value)}
                  />
                </Flex>
              </td>
              <td>
                <Flex justifyContent={"center"} gap={5}>
                  {/* {productValues.product1.alphaMeta} */}
                  <Input
                    w={"12%"}
                    value={alphaMetaValue}
                    onChange={(e) => setalphaMetaValue(e.target.value)}
                  />
                </Flex>
              </td>
            </tr>
            <tr>
              <td>Beta (kg/unit)</td>
              <td contentEditable="true">
                <Flex justifyContent={"center"} gap={5}>
                  {/* {productValues.product2.betaHyper} */}
                  <Input
                    w={"12%"}
                    value={betaHyperValue}
                    onChange={(e) => setbetaHyperValue(e.target.value)}
                  />
                </Flex>
              </td>
              <td contentEditable="true">
                <Flex justifyContent={"center"} gap={5}>
                  {/* {productValues.product2.betaMeta} */}
                  <Input
                    w={"12%"}
                    value={betaMetaValue}
                    onChange={(e) => setbetaMetaValue(e.target.value)}
                  />
                </Flex>
              </td>
            </tr>
            <tr>
              <td>Epsilon (#/unit)</td>
              <td contentEditable="true">1</td>
              <td contentEditable="true">1</td>
            </tr>
            <tr>
              <td>Gamma (#/unit)</td>
              <td contentEditable="true">1</td>
              <td contentEditable="true">0</td>
            </tr>
            <tr>
              <td>Delta (#/unit)</td>
              <td contentEditable="true">0</td>
              <td contentEditable="true">1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Raw needed</h2>
        <table>
          <thead>
            <tr>
              <th>Firm</th>
              <th>Production</th>
              <th> Production Alpha Needed</th>
              <th>Production Beta Needed</th>
              <th>Forecast</th>
              <th>Forecast Alpha Ordered</th>
              <th>Forecast Beta Ordered</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(productSums).map((firm) => (
              <>
                <tr key={firm}>
                  <td>{firm}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Product1</td>

                  <td>{productSums[firm]["product1"]}</td>
                  <td>{alphaNeeded[firm]["product1"]}</td>
                  <td>{betaNeeded[firm]["product1"]}</td>
                  <td>{forecast[firm]["product1"]}</td>
                  <td>{alphaOrdered[firm]["product1"]}</td>
                  <td>{betaOrdered[firm]["product1"]}</td>
                </tr>
                <tr key={`${firm}-product2`}>
                  <td>Product2</td>
                  <td>{productSums[firm]["product2"]}</td>
                  <td>{alphaNeeded[firm]["product2"]}</td>
                  <td>{betaNeeded[firm]["product2"]}</td>
                  <td>{forecast[firm]["product2"]}</td>
                  <td>{alphaOrdered[firm]["product2"]}</td>
                  <td>{betaOrdered[firm]["product2"]}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Alpha</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Hyper Forecast</th>
                <th>Hyper Produced</th>
                <th>Hyperware Alpha Needed</th>
                <th>Meta Forecast</th>
                <th>Meta Produced</th>
                <th>Metaware Alpha Needed</th>
                <th>Total Alpha Needed</th>
                <th>Total Alpha Ordered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>{sumDataQtr0[0]}</td>
                <td>{hyperProduced}</td>
                <td>{hyperWareAlphaNeeded}</td>
                <td>{sumDataQtr0[1]}</td>
                <td>{metaProduced}</td>
                <td>{metawareAlphaNeeded}</td>
                <td>{totalAlphaNeeded}</td>
                <td>{totalAlphaOrdered.toFixed(0)}</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{sumData[0]}</td>
                <td>{hyperProducedqtr1}</td>
                <td>{hyperWareAlphaNeededqtr1}</td>
                <td>{sumData[1]}</td>
                <td>{metaProducedqtr1}</td>
                <td>{metawareAlphaNeededqtr1}</td>
                <td>{totalAlphaNeededqtr1}</td>
                <td>{totalAlphaOrderedqtr1.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Alpha Inventory</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>In stock</th>
                <th>Alpha Ordered</th>
                <th>Alpha Used</th>
                <th>Inventory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>0</td>
                <td>{totalAlphaOrdered.toFixed(0)}</td>
                <td>{totalAlphaNeeded}</td>
                <td>{alphaInventory}</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{alphaInventory}</td>
                <td>{totalAlphaOrderedqtr1.toFixed(0)}</td>
                <td>{totalAlphaNeededqtr1}</td>
                <td>{alphaInventoryqtr1}</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Beta</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Hyper Forecast</th>
                <th>Hyper Produced</th>
                <th>Hyperware Beta Needed</th>
                <th>Meta Forecast</th>
                <th>Meta Produced</th>
                <th>Metaware Beta Needed</th>
                <th>Total Beta Needed</th>
                <th>Total Beta Ordered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>{sumDataQtr0[0]}</td>
                <td>{hyperProducedbeta}</td>
                <td>{hyperWareBetaNeeded}</td>
                <td>{sumDataQtr0[1]}</td>
                <td>{sumDataQtr0[1]}</td>
                <td>{metawareBetaNeeded}</td>
                <td>{totalBetaNeeded}</td>
                <td>{totalBetaOrdered.toFixed(0)}</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{sumData[0]}</td>
                <td>{hyperProducedbetaqtr1}</td>
                <td>{hyperWareBetaNeededqtr1}</td>
                <td>{sumData[1]}</td>
                <td>{metaProducedbetaqtr1}</td>
                <td>{metawareBetaNeededqtr1}</td>
                <td>{totalBetaNeededqtr1}</td>
                <td>{totalBetaOrderedqtr1.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Beta Inventory</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>In stock</th>
                <th>Beta Ordered</th>
                <th>Beta Used</th>
                <th>Inventory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>0</td>
                <td>{totalBetaOrdered.toFixed(0)}</td>
                <td>{totalBetaNeeded}</td>
                <td>{betaInventory}</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{betaInventory}</td>
                <td>{totalBetaOrderedqtr1.toFixed(0)}</td>
                <td>{totalBetaNeededqtr1}</td>
                <td>{betaInventoryqtr1}</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Gamma</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Hyper Forecast</th>
                <th>Hyper Produced</th>
                <th>Hyperware Gamma Needed</th>
                <th>Total Gamma Needed</th>
                <th>Gamma Ordered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>{sumDataQtr0[0]}</td>
                <td>{gammaProduced}</td>
                <td>{gammaNeeded}</td>
                <td>{totalGammaNeeded}</td>
                <td>{gammaOrdered.toFixed(0)}</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{sumData[0]}</td>
                <td>{hyperProducedGammaqtr1}</td>
                <td>{hyperwareGammaNeededqtr1}</td>
                <td>{totalGammaNeededqtr1}</td>
                <td>{totalGammaOrderedqtr1.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Delta</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Hyper Forecast</th>
                <th>Hyper Produced</th>
                <th>Hyperware Delta Needed</th>
                <th>Total Delta Needed</th>
                <th>Delta Ordered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>{sumDataQtr0[1]}</td>
                <td>{deltaMetaProduced}</td>
                <td>{metawareDeltaNeeded}</td>
                <td>{totalDeltaNeeded}</td>
                <td>{deltaOrdered.toFixed(0)}</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{sumData[1]}</td>
                <td>{metaProducedDeltaqtr1}</td>
                <td>{metawareDeltaNeededqtr1}</td>
                <td>{totalDeltaNeededqtr1}</td>
                <td>{deltaOrderedqtr1.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Epsilon</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Hyper Forecast</th>
                <th>Hyper Produced</th>
                <th>Hyperware Epsilon Needed</th>
                <th>Meta Forecast</th>
                <th>Meta Produced</th>
                <th>Metaware Epsilon Needed</th>
                <th>Total Epsilon Needed</th>
                <th>Total Epsilon Ordered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>{sumDataQtr0[0]}</td>
                <td>{epsilonHyperProduced}</td>
                <td>{hyperwareEpsilonNeeded}</td>
                <td>{sumDataQtr0[1]}</td>
                <td>{epsilonMetaProduced}</td>
                <td>{metawareEpsilonNeeded}</td>
                <td>{totalEpsilonNeeded}</td>
                <td>{epsilonOrdered.toFixed(0)}</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{sumData[0]}</td>
                <td>{epsilonHyperProducedqtr1}</td>
                <td>{hyperwareEpsilonNeededqtr1}</td>
                <td>{sumData[1]}</td>
                <td>{epsilonMetaProducedqtr1}</td>
                <td>{metawareEpsilonNeededqtr1}</td>
                <td>{totalEpsilonNeededqtr1}</td>
                <td>{epsilonOrderedqtr1.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Gamma Inventory DC1</Text>
          <table border="1">
            <tr>
              <th></th>
              <th>In stock</th>
              <th>Gamma Ordered</th>
              <th>Hyperware Gamma Needed</th>
              <th>A - Surface</th>
              <th>A - Air</th>
              <th>B - Surface</th>
              <th>B - Air</th>
              <th>C - Surface</th>
              <th>C - Air</th>
              <th>D - Surface</th>
              <th>D - Air</th>
              <th>Total</th>
              <th>A - Surface</th>
              <th>A - Air</th>
              <th>B - Surface</th>
              <th>B - Air</th>
              <th>C - Surface</th>
              <th>C - Air</th>
              <th>D - Surface</th>
              <th>D - Air</th>
              <th>Total</th>
              <th>Difference</th>
              <th>Total Delivered + Stock</th>
              <th>Needed for Production</th>
              <th>Ending Stock</th>
              <th>Emergency Procurement</th>
            </tr>
            <tr>
              <td>QTr0</td>
              <td>0</td>
              <td>{gammaOrdered.toFixed(0)}</td>
              <td>{totalGammaNeeded}</td>
              <td>{gammaOrderedAsurface.toFixed(0)}</td>
              <td>{gammaOrderedAair.toFixed(0)}</td>
              <td>{gammaOrderedBsurface.toFixed(0)}</td>
              <td>{gammaOrderedBair.toFixed(0)}</td>
              <td>{gammaOrderedCsurface.toFixed(0)}</td>
              <td>{gammaOrderedCair.toFixed(0)}</td>
              <td>{gammaOrderedDsurface.toFixed(0)}</td>
              <td>{gammaOrderedDair.toFixed(0)}</td>
              <td>{gammaOrderedRoundedSum}</td>
              <td>{gammaDeliveredAsurface.toFixed(0)}</td>
              <td>{gammaDeliveredAair.toFixed(0)}</td>
              <td>{gammaDeliveredBsurface.toFixed(0)}</td>
              <td>{gammaDeliveredBair.toFixed(0)}</td>
              <td>{gammaDeliveredCsurface.toFixed(0)}</td>
              <td>{gammaDeliveredCair.toFixed(0)}</td>
              <td>{gammaDeliveredDsurface.toFixed(0)}</td>
              <td>{gammaDeliveredDair.toFixed(0)}</td>
              <td>{gammaDeliveredRoundedSum.toFixed(0)}</td>
              <td>{totalDifference}</td>
              <td>{totalDeliveredStock.toFixed(0)}</td>
              <td>{neededForProduction1}</td>
              <td>{endingStock1}</td>
            </tr>
            <tr>
              <td>QTr1</td>
              <td></td>
              <td>{totalGammaOrderedqtr1.toFixed(0)}</td>
              <td>{totalGammaNeededqtr1}</td>
              <td>{gammaOrderedAsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaOrderedAairqtr1.toFixed(0)}</td>
              <td>{gammaOrderedBsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaOrderedBairqtr1.toFixed(0)}</td>
              <td>{gammaOrderedCsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaOrderedCairqtr1.toFixed(0)}</td>
              <td>{gammaOrderedDsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaOrderedDairqtr1.toFixed(0)}</td>
              <td>{gammaOrderedRoundedSumqtr1}</td>
              <td>{gammaDeliveredAsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredAairqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredBsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredBairqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredCsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredCairqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredDsurfaceqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredDairqtr1.toFixed(0)}</td>
              <td>{gammaDeliveredRoundedSumqtr1.toFixed(0)}</td>
              <td>{totalDifferenceqtr1}</td>
              <td>{totalDeliveredStockqtr1.toFixed(0)}</td>
              <td>{neededForProduction1qtr1}</td>
              <td>{endingStock1qtr1}</td>
            </tr>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Delta Inventory DC1</Text>
          <table border="1">
            <tr>
              <th></th>
              <th>In stock</th>
              <th>Gamma Ordered</th>
              <th>Metaware Gamma Needed</th>
              <th>B - Surface</th>
              <th>B - Air</th>
              <th>C - Surface</th>
              <th>C - Air</th>
              <th>D - Surface</th>
              <th>D - Air</th>
              <th>E - Surface</th>
              <th>E - Air</th>
              <th>F - Surface</th>
              <th>F - Air</th>
              <th>Total</th>
              <th>B - Surface</th>
              <th>B - Air</th>
              <th>C - Surface</th>
              <th>C - Air</th>
              <th>D - Surface</th>
              <th>D - Air</th>
              <th>E - Surface</th>
              <th>E - Air</th>
              <th>F - Surface</th>
              <th>F - Air</th>
              <th>Total</th>
              <th>Difference</th>
              <th>Total Delivered + Stock</th>
              <th>Needed for Production</th>
              <th>Ending Stock</th>
              <th>Emergency Procurement</th>
            </tr>
            <tr>
              <td>QTr0</td>
              <td>0</td>
              <td>{deltaOrdered.toFixed(0)}</td>
              <td>{totalDeltaNeeded.toFixed(0)}</td>
              <td>{deltaOrderedBsurface.toFixed(0)}</td>
              <td>{deltaOrderedBair.toFixed(0)}</td>
              <td>{deltaOrderedCsurface.toFixed(0)}</td>
              <td>{deltaOrderedCair.toFixed(0)}</td>
              <td>{deltaOrderedDsurface.toFixed(0)}</td>
              <td>{deltaOrderedDair.toFixed(0)}</td>
              <td>{deltaOrderedEsurface.toFixed(0)}</td>
              <td>{deltaOrderedEair.toFixed(0)}</td>
              <td>{deltaOrderedFsurface.toFixed(0)}</td>
              <td>{deltaOrderedFair.toFixed(0)}</td>
              <td>{eplisonOrderedRoundedSum.toFixed(0)}</td>
              <td>{deltaDeliveredBsurface.toFixed(0)}</td>
              <td>{deltaDeliveredBair.toFixed(0)}</td>
              <td>{deltaDeliveredCsurface.toFixed(0)}</td>
              <td>{deltaDeliveredCair.toFixed(0)}</td>
              <td>{deltaDeliveredDsurface.toFixed(0)}</td>
              <td>{deltaDeliveredDair.toFixed(0)}</td>
              <td>{deltaDeliveredEsurface.toFixed(0)}</td>
              <td>{deltaDeliveredEair.toFixed(0)}</td>
              <td>{deltaDeliveredFsurface.toFixed(0)}</td>
              <td>{deltaDeliveredFair.toFixed(0)}</td>
              <td>{deltaDeliveredRoundedSum.toFixed(0)}</td>
              <td>{totalDifferenceDelta.toFixed(0)}</td>
              <td>{totalDeliveredStock.toFixed(0)}</td>
              <td>{neededForProduction1Delta.toFixed(0)}</td>
              <td>{endingStock1Delta.toFixed(0)}</td>
              <td></td>
            </tr>
            <tr>
              <td>QTr1</td>
              <td>{endingStock1Delta.toFixed(0)}</td>
              <td>{deltaOrderedqtr1.toFixed(0)}</td>
              <td>{totalDeltaNeededqtr1.toFixed(0)}</td>
              <td>{deltaOrderedBsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaOrderedBairqtr1.toFixed(0)}</td>
              <td>{deltaOrderedCsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaOrderedCairqtr1.toFixed(0)}</td>
              <td>{deltaOrderedDsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaOrderedDairqtr1.toFixed(0)}</td>
              <td>{deltaOrderedEsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaOrderedEairqtr1.toFixed(0)}</td>
              <td>{deltaOrderedFsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaOrderedFairqtr1.toFixed(0)}</td>
              <td>{deltaOrderedRoundedSumqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredBsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredBairqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredCsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredCairqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredDsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredDairqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredEsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredEairqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredFsurfaceqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredFairqtr1.toFixed(0)}</td>
              <td>{deltaDeliveredRoundedSumqtr1.toFixed(0)}</td>
              <td>{totalDifferenceDeltaqtr1.toFixed(0)}</td>
              <td>{totalDeliveredStockqtr1.toFixed(0)}</td>
              <td>{neededForProduction1Deltaqtr1.toFixed(0)}</td>

              <td>{endingStock1Deltaqtr1.toFixed(0)}</td>
              <td></td>
            </tr>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Epsilon</Text>
          <table border="1">
            <tr>
              <th></th>
              <th>In stock</th>
              <th>Total Epsilon Needed</th>
              <th>Epsilon Ordered</th>
              <th>Epsilon Ordered-1</th>
              <th>D - Surface</th>
              <th>D - Air</th>
              <th>E - Surface</th>
              <th>E - Air</th>
              <th>F - Surface</th>
              <th>F - Air</th>
              <th>G - Surface</th>
              <th>G - Air</th>
              <th>Total</th>
              <th>D - Surface</th>
              <th>D - Air</th>
              <th>E - Surface</th>
              <th>E - Air</th>
              <th>F - Surface</th>
              <th>F - Air</th>
              <th>G - Surface</th>
              <th>G - Air</th>
              <th>Total</th>
              <th>Total Delivered</th>
              <th>Total Delivered + Stock</th>
              <th>Needed for Production</th>
              <th>Ending Stock</th>
              <th>Emergency Procurement</th>
            </tr>
            <tr>
              <td>QTr0</td>
              <td>0</td>
              <td>-</td>
              <td>{epsilonOrdered.toFixed(0)}</td>
              <td>{epsilonOrderedqtr1.toFixed(0)}</td>
              <td>{epsilonOrderedDsurface.toFixed(0)}</td>
              <td>{epsilonOrderedDair.toFixed(0)}</td>
              <td>{epsilonOrderedEsurface.toFixed(0)}</td>
              <td>{epsilonOrderedEair.toFixed(0)}</td>
              <td>{epsilonOrderedFsurface.toFixed(0)}</td>
              <td>{epsilonOrderedFair.toFixed(0)}</td>
              <td>{epsilonOrderedGsurface.toFixed(0)}</td>
              <td>{epsilonOrderedGair.toFixed(0)}</td>
              <td>{eplisonOrderedRoundedSum.toFixed(0)}</td>
              <td>{epsilonDeliveredDsurface.toFixed(0)}</td>
              <td>{epsilonDeliveredDair.toFixed(0)}</td>
              <td>{epsilonDeliveredEsurface.toFixed(0)}</td>
              <td>{epsilonDeliveredEair.toFixed(0)}</td>
              <td>{epsilonDeliveredFsurface.toFixed(0)}</td>
              <td>{epsilonDeliveredFair.toFixed(0)}</td>
              <td>{epsilonDeliveredGsurface.toFixed(0)}</td>
              <td>{epsilonDeliveredGair.toFixed(0)}</td>
              <td>{epsilonDeliveredRoundedSum.toFixed(0)}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>QTr1</td>
              <td>{epsilonOrderedGsurface.toFixed(0)}</td>
              <td>{totalEpsilonNeededqtr1}</td>
              <td>{epsilonOrderedqtr1.toFixed(0)}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Emergency Procurement</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Alpha</th>
                <th>Beta</th>
                <th>Gamma</th>
                <th>Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>-</td>
                <td>-</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>-</td>
                <td>-</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Alpha and Beta raw cost</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Alpha</th>
                <th>Beta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>QTr0</td>
                <td>{aplhaRawCost.toFixed(1)} $</td>
                <td>{betaRawCost.toFixed(1)} $</td>
              </tr>
              <tr>
                <td>QTr1</td>
                <td>{aplhaRawCost1.toFixed(1)} $</td>
                <td>{betaRawCost1.toFixed(1)} $</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Retail Store Hyperware</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Region 1</th>
                <th>Region 2</th>
                <th>Region 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Units</td>
                <td>{hyperwareRegions.region1[0]}</td>
                <td>{hyperwareRegions.region2[0]}</td>
                <td>{hyperwareRegions.region3[0]}</td>
              </tr>
              <tr>
                <td>Policy</td>
                <td>{randomNumberRegion1.toFixed(5)}</td>
                <td>{randomNumberRegion2.toFixed(5)} </td>
                <td>{randomNumberRegion3.toFixed(5)} </td>
              </tr>
              <tr>
                <td>Extra</td>
                <td>{region1Extra.toFixed(0)}</td>
                <td>{region2Extra.toFixed(0)} </td>
                <td>{region3Extra.toFixed(0)} </td>
              </tr>
              <tr>
                <td>Total Order</td>
                <td>{region1TotalOrder.toFixed(0)} </td>
                <td>{region2TotalOrder.toFixed(0)} </td>
                <td>{region3TotalOrder.toFixed(0)} </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>

      <div>
        <Flex mt={50}>
          <Text>Retail Store Metaware</Text>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Region 1</th>
                <th>Region 2</th>
                <th>Region 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Units</td>
                <td>{metawareRegions.region1[0]}</td>
                <td>{metawareRegions.region2[0]}</td>
                <td>{metawareRegions.region3[0]}</td>
              </tr>
              <tr>
                <td>Policy</td>
                <td>{randomNumberMetawareRegion1.toFixed(5 )}</td>
                <td>{randomNumberMetawareRegion2.toFixed(5 )} </td>
                <td>{randomNumberMetawareRegion3.toFixed(5 )} </td>
              </tr>
              <tr>
                <td>Extra</td>
                <td>{region1MetawareExtra.toFixed(0)}</td>
                <td>{region2MetawareExtra.toFixed(0)} </td>
                <td>{region3MetawareExtra.toFixed(0)} </td>
              </tr>
              <tr>
                <td>Total Order</td>
                <td>{region1MetawareTotalOrder.toFixed(0)} </td>
                <td>{region2MetawareTotalOrder.toFixed(0)} </td>
                <td>{region3MetawareTotalOrder.toFixed(0)} </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </div>
    </>
  );
};

export default InitialData;
