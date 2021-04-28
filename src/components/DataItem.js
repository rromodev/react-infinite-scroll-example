import { Td, Tr } from '@chakra-ui/table'
import React from 'react'

const DataItem = ({data}) => {
  return (
    <>
      <Tr>
        <Td>{`${data.name.title} ${data.name.first} ${data.name.last}`}</Td>
        <Td>{`${data.location.city}, ${data.location.country} `}</Td>
        <Td>{data.email}</Td>
      </Tr>
    </>
  )
}

export default DataItem
