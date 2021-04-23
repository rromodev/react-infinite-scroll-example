import React from 'react';
import Div100vh from 'react-div-100vh'
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
      <Div100vh>

        <Box textAlign="center" fontSize="xl">
          <Grid p={3} templateRows="100px 1fr 100px">
            <Box>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
            <Box backgroundColor="teal"></Box>
            <Box backgroundColor="twitter.200"></Box>
            
            
          </Grid>
        </Box>
      </Div100vh>
    </ChakraProvider>
  );
}

export default App;
