import { Table, Tbody, Td, Tr } from '@chakra-ui/table'
import React, { useEffect, useState } from 'react'

const useFetchData = (page) => {  
  const [users, setUsers] = useState([])

  useEffect(() => {   
    async function fetchData() {
      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=30&seed=abc`)
      const json = await response.json()
      
      setUsers(oldUsers => {
        return [...new Set([...oldUsers, ...json.results])]
      })
    }
    fetchData()
  }, [page])

  return users
}

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

const DataTable = ({info}) => {
  return (
    <>
      <Table>
        <Tbody>
          {info?.map(item => (
            <DataItem key={`${item.email}`} data={item}/>
          ))}
        </Tbody>        
      </Table>      
    </>
  )
}

const DataContainer = () => {
  const [page, setPage] = useState(1)
  const users = useFetchData(page)

  function handleScroll(event) {
    const val = event.target
    
    if (val.scrollHeight - val.scrollTop === val.clientHeight) {
      setPage(oldPage => oldPage + 1)
    }
  }
  
  return (
    <div h={1000} onScroll={handleScroll} style={{overflowY: 'scroll'}}>
      {users && <DataTable info={users}/>}
    </div>
  )
}

export default DataContainer
