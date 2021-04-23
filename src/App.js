import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid h="calc(100vh - calc(100vh - 100%))" minH="100vh" p={3} templateRows="100px 1fr 100px">
          <Box>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Box>
          <Box backgroundColor="teal"></Box>
          <Box backgroundColor="twitter.200"></Box>
          
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
