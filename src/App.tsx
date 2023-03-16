import { createTheme, Stack, Typography, ThemeProvider } from '@mui/material/';
import React from 'react';
import './App.css';
import ContactList from './component/ContactList';
import CircularStatic from './component/Loading';
import { useApi } from './hooks/useApi';



const theme = createTheme({})



function App() {
  const {data, loading, error, fetchContact} = useApi()

  React.useEffect(() =>{
    fetchContact()
  }, [])

  

  return (
    <ThemeProvider theme={theme}> 
    <Stack direction ={{xs:"column", md:"row"}} justifyContent ={"center"} alignItems={"center"} flexWrap={"wrap"} gap={2} mt={4} >
    {data?.map((item) =>(<ContactList key={item.id} item ={item}/>))}

    {loading && <CircularStatic/>}
    {error && <Typography> assddsss</Typography>}
    </Stack>
    </ThemeProvider> 
  );
}

export default App;
