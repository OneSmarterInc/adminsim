import React, { useState } from "react";
import Report from "./report";
import BalanceSheet from "../Components/BalanceSheetTable";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Button,
  Select,
  Box,
  Text,
} from "@chakra-ui/react";
import ProductSheet from "../Components/ProductSheetTable";

const Sheets = () => {
  const [isCorporatePLModalOpen, setIsCorporatePLModalOpen] = useState(false);
  const [isProductSheetModalOpen, setIsProductSheetModalOpen] = useState(false);
  const [isBalanceSheetModalOpen, setIsBalanceSheetModalOpen] = useState(false);
  // Add similar state variables for other modals

  const [selectedOption, setSelectedOption] = useState("");
  const options = ["QTR 0", "QTR 1"];

  const handleButtonClick = (modalType) => {
    // Set the state for the clicked modal
    switch (modalType) {
      case "CorporatePL":
        setIsCorporatePLModalOpen((prev) => !prev);
        break;
      case "ProductSheet":
        setIsProductSheetModalOpen((prev) => !prev);
        break;
      case "BalanceSheet":
        setIsBalanceSheetModalOpen((prev) => !prev);
        break;
      // Add cases for other modal types
      default:
        break;
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Flex gap={5}>
        <Box p={4}>
          <Text fontSize="xl" mb={4}>
            Select QTR:
          </Text>

          <Select
            placeholder="Select option"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Button mr={"2px"} onClick={() => handleButtonClick("CorporatePL")}>
            Corporate P&L Statement
          </Button>
          <Button mr={"2px"} onClick={() => handleButtonClick("ProductSheet")}>
            Product Sheet
          </Button>
          <Button mr={"2px"} onClick={() => handleButtonClick("BalanceSheet")}>
            Balance Sheet
          </Button>

          {/* Add similar buttons for other modal types */}
        </Box>
      </Flex>

      {/* Render Corporate P&L Modal */}
      <Modal
        isOpen={isCorporatePLModalOpen}
        onClose={() => handleButtonClick("CorporatePL")}
      >
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <ModalHeader>Corporate P&L Statement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Report />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleButtonClick("CorporatePL")}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Render PRODUCT Sheet Modal */}
      <Modal
        isOpen={isProductSheetModalOpen}
        onClose={() => handleButtonClick("ProductSheet")}
      >
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <ModalHeader>Product Sheet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductSheet />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleButtonClick("ProductSheet")}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Render Balance Sheet Modal */}
      <Modal
        isOpen={isBalanceSheetModalOpen}
        onClose={() => handleButtonClick("BalanceSheet")}
      >
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <ModalHeader>Balance Sheet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BalanceSheet />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleButtonClick("BalanceSheet")}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add similar code for other modals */}
    </>
  );
};

export default Sheets;
