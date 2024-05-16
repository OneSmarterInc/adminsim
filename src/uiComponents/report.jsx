import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import html2pdf from "html2pdf.js";

function Report() {
  const allProductUnits = JSON.parse(localStorage.getItem("allProductUnits"));
  const unitHyperware = JSON.parse(localStorage.getItem("unitHyperware"));
  const unitMetaware = JSON.parse(localStorage.getItem("unitMetaware"));
  const rawHyperware = JSON.parse(localStorage.getItem("rawData_qtr1"));
  const rawMetaware = JSON.parse(localStorage.getItem("rawData_qtr1"));
  const directHyper = JSON.parse(localStorage.getItem("directHyper"));
  const directMeta = JSON.parse(localStorage.getItem("directMeta"));
  const forecasts_inaccuracy = JSON.parse(
    localStorage.getItem("forecast_inaccuracy")
  );
  const sumHyperware = allProductUnits["Hyperware"] * unitHyperware;
  const sumMetaware = allProductUnits["Metaware"] * unitMetaware;
  const unitAll = Math.round((unitHyperware + unitMetaware) / 2);
  const sumAll = Math.round(
    (allProductUnits["Hyperware"] + allProductUnits["Metaware"]) * unitAll
  );
  const supplierCost =
    rawHyperware["supplierHyperware"] + rawMetaware["supplierMetaware"];
  const rawMaterialHyperware = rawHyperware["rawHyperware"];
  const rawMaterialMetaware = rawHyperware["rawMetaware"];
  const allProductCost = rawMaterialHyperware + rawMaterialMetaware;
  let temp = forecasts_inaccuracy.slice(-6);

  let hyperware_forcast_in = temp
    .slice(0, 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  let metaware_forecast_in = temp
    .slice(-3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const firm = "onesmarter.inc";

  function formatNumber(number) {
    // Convert the number to a string
    if (number == null) {
      return "0";
    } else {
      let numberString = number.toString();

      // Split the string into whole and decimal parts
      let parts = numberString.split(".");

      // Format the whole part with commas
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // Join the whole and decimal parts back together
      return parts.join(".");
    }
  }

  const generatePDF = () => {
    const content = document.getElementById("pdf-content"); // Add an id to the wrapping element

    html2pdf(content, {
      margin: 10,
      filename: "Financial_Report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

  return (
    <>
      <Box id="pdf-content">
        <Text as="h2" size="lg" textAlign="center" marginBottom="4" w={'100%'}>
          ************************************************************************************************
          <br />
          <Flex justifyContent={'space-between'} ml={'150'}>
            <Text>FIRM 1:</Text> <Text> INDUSTRY: OneSmarter INC</Text> .<br />
          </Flex>
          <Flex ml={'150'}>
          CORPORATE P&L STATEMENT
          </Flex>
          <br />
          ***********************************************************************************************
        </Text>
        <Table variant="unstyled">
          <TableCaption>Firm : {firm}</TableCaption>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>All Products</Th>
              <Th>Product Hyperware</Th>
              <Th>Product Metaware</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Sales Volume</Td>
              <Td>
                {formatNumber(
                  allProductUnits["Hyperware"] + allProductUnits["Metaware"]
                )}
              </Td>
              <Td>{formatNumber(allProductUnits["Hyperware"])}</Td>
              <Td>{formatNumber(allProductUnits["Metaware"])}</Td>
            </Tr>
            <Tr>
              <Td>Unfilled Orders</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Price</Td>
              <Td>{unitAll}</Td>
              <Td>{unitHyperware}</Td>
              <Td>{unitMetaware}</Td>
            </Tr>
            <Tr>
              <Td>
                {" "}
                <hr />
                Revenues{" "}
              </Td>
              <Td>
                <hr />
                {formatNumber(sumHyperware + sumMetaware)}
              </Td>
              <Td>
                <hr />
                {formatNumber(sumHyperware)}
              </Td>
              <Td>
                <hr />
                {formatNumber(sumMetaware)}
              </Td>
            </Tr>
            <Tr>
              <Td> - Product Costs</Td>
              <Td>
                {formatNumber(rawMaterialHyperware + rawMaterialMetaware)}
              </Td>
              <Td>{formatNumber(rawMaterialHyperware)}</Td>
              <Td>{formatNumber(rawMaterialMetaware)}</Td>
            </Tr>
            <Tr>
              <Td> - Order Processing</Td>
              <Td>
                {formatNumber(
                  (allProductUnits["Hyperware"] - directHyper) * 4 +
                    directHyper * 24 +
                    (allProductUnits["Metaware"] - directMeta) * 4 +
                    directMeta * 24
                )}
              </Td>
              <Td>
                {formatNumber(
                  (allProductUnits["Hyperware"] - directHyper) * 4 +
                    directHyper * 24
                )}
              </Td>
              <Td>
                {formatNumber(
                  (allProductUnits["Metaware"] - directMeta) * 4 +
                    directMeta * 24
                )}
              </Td>
            </Tr>
            <Tr>
              <Td> - Replacement Parts</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td> - RFID Cost</Td>
              <Td>{formatNumber(directHyper * 11 + directMeta * 11)}</Td>
              <Td>{formatNumber(directHyper * 11)}</Td>
              <Td>{formatNumber(directMeta * 11)}</Td>
            </Tr>

            <Tr>
              <Td> - Transportation Costs</Td>
              <Td>{formatNumber(supplierCost)}</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td> + Transportation Rebates</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td> + Volume Discounts</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td> - Duties & Tariffs</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Gross Margin </Td>
              <Td>
                <hr style={{ border: "1px dashed #000" }} />
                {formatNumber(
                  sumHyperware +
                    sumMetaware -
                    (rawMaterialHyperware +
                      rawMaterialMetaware +
                      supplierCost +
                      directHyper * 11 +
                      directMeta * 11)
                )}
              </Td>
              <Td>
                <hr style={{ border: "1px dashed #000" }} />
                {formatNumber(
                  sumHyperware - (rawMaterialHyperware + directHyper)
                )}
              </Td>
              <Td>
                <hr style={{ border: "1px dashed #000" }} />
                {formatNumber(sumMetaware - (rawMaterialMetaware + directMeta))}
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Heading size={"12px"}>Fixed and Other Cost : </Heading>
                Adminstrative O/H
              </Td>
              <Td>400,000</Td>
              <Td>200,000</Td>
              <Td>200,000</Td>
            </Tr>
            <Tr>
              <Td>Counsulting Fees</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Corporate O/H</Td>
              <Td>500,000</Td>
              <Td>250,000</Td>
              <Td>250,000</Td>
            </Tr>
            <Tr>
              <Td>Cross-Docking</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Distribution FC</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Emergency Procurement</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Emergency Production</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Forecast Inaccuracy</Td>
              <Td>
                {formatNumber(hyperware_forcast_in + metaware_forecast_in)}
              </Td>
              <Td>{formatNumber(hyperware_forcast_in)}</Td>
              <Td>{formatNumber(metaware_forecast_in)}</Td>
            </Tr>
            <Tr>
              <Td>Information Technology</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Introductions</Td>
              <Td>16,000,00</Td>
              <Td>8,000,00</Td>
              <Td>8,000,00</Td>
            </Tr>
            <Tr>
              <Td>Inventory Charges</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Marketing</Td>
              <Td>3,000,00</Td>
              <Td>1,500,00</Td>
              <Td>1,500,00</Td>
            </Tr>
            <Tr>
              <Td>Plant Capacity FC</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Price Changes</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Procurement FC</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Production FC</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Research Studies</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Service Outsourcing</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Unfilled Handling</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Total Fixed & other</Td>
              <Td>
                <hr style={{ border: "1px dashed #000" }} />
                {formatNumber(
                  2800000 + (hyperware_forcast_in + metaware_forecast_in)
                )}
              </Td>
              <Td>
                <hr style={{ border: "1px dashed #000" }} />0
              </Td>
              <Td>
                <hr style={{ border: "1px dashed #000" }} />0
              </Td>
            </Tr>
            <Tr>
              <Td> - Taxes </Td>
              <Td>
                {formatNumber(
                  (2800000 + (hyperware_forcast_in + metaware_forecast_in)) *
                    0.5
                )}
              </Td>
            </Tr>
            <Tr>
              <Td>Net Income </Td>

              <Td>
                {formatNumber(
                  (2800000 + (hyperware_forcast_in + metaware_forecast_in)) *
                    0.5
                )}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Box>
        <Button onClick={generatePDF}>Download PDF</Button>
      </Box>
    </>
  );
}

export default Report;
