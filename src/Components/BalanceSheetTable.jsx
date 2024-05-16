import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const BalanceSheetTable = () => {

  return (
    <Box>
    <Table>
        <Thead>
            <Tr>
                <Th>Assets</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>Cash</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Marketable Securities</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td >Finished Goods and Postponed Production Inventory:</Td>
            </Tr>
            <Tr>
                <Td>Plant & DC1:</Td>
                <Td>Product 1-0 (0 units @ 0.00/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td w={'30%'}></Td>
                <Td>Product 1-1 ( 5,107 units @ 148.23/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Product 1-2 ( 1,855 units @ 180.60/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>DC2:</Td>
                <Td>Product 1-0 ( 0 units @ 0.00/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Product 1-1 ( 6,599 units @ 147.50/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Product 1-2 ( 5,726 units @ 179.00/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Plant Investment</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td >Procurement Inventory:</Td>
            </Tr>
            <Tr>
                <Td>Plant & DC1:</Td>
                <Td>Alpha ( 0 units @ 0.00/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Beta ( 0 units @ 0.00/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Gamma ( 5,370 units @ 17.90/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Delta ( 2,350 units @ 20.81/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Epsilon ( 7,850 units @ 23.87/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>DC2: </Td>
                <Td>Gamma ( 1,380 units @ 17.45/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Delta ( 377 units @ 20.47/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td></Td>
                <Td>Epsilon ( 2,383 units @ 23.97/unit)</Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Total Assets</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>LIABILITIES AND EQUITIES</Td>
            </Tr>
            <Tr>
                <Td>Corporate Capitalization</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Dividends, Current Month</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Dividends, Cumulative Prior To This Month</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Loans</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Retained Earnings, Current Month</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Retained Earnings, Cumulative Prior To This Month</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
            <Tr>
                <Td>Total Liabilities and Equities</Td>
                <Td></Td>
                <Td>0</Td>
            </Tr>
        </Tbody>
    </Table>
    </Box>
  )
}

export default BalanceSheetTable;