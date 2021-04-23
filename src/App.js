import React from 'react';
import Div100vh from 'react-div-100vh'
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher'
import DataContainer from './components/DataContainer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Div100vh>
        <Grid h="100%" p={3} templateRows="100px auto 100px">
          <Box>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Box>
          <DataContainer backgroundColor="teal"></DataContainer>
          <Box backgroundColor="twitter.200"></Box>
        </Grid>
      </Div100vh>
    </ChakraProvider>
  );
}

export default App;
