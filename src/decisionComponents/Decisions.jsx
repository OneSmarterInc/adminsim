import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Decisions = () => {
  return (
    <Flex direction="column" align="center" mt={100} w={'1400px'} h={'100vh'}>
      <Link to={"/demandgeneration"}>
        <Button w={'200px'} mb={2}>Demand Generation</Button>
      </Link>
      <Link to={'/distribution'}>
        <Button w={'200px'} mb={2}>Distribution</Button>
      </Link>
      <Link to={'/forecasting'}>
        <Button w={'200px'} mb={2}>Forecasting</Button>
      </Link>
      <Link to={'/it'}>
        <Button w={'200px'} mb={2}>Information Technology</Button>
      </Link>
      <Link to={'/manufacturing'}>
        <Button w={'200px'} mb={2}>Manufacturing</Button>
      </Link>
      <Link to={'/procurement'}>
        <Button w={'200px'} mb={2}>Procurement</Button>
      </Link>
      <Link to={'/transportation'}>
        <Button w={'200px'} mb={2}>Transportation</Button>
      </Link>
      <Link to={'/services'}>
        <Button w={'200px'} mb={2}>Services</Button>
      </Link>
    </Flex>
  )
}

export default Decisions
