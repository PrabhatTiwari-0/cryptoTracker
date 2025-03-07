
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { createTheme,  Table,  ThemeProvider } from '@mui/material';
import Grid from '../Grid';
import "./style.css"
import List from '../List';

export default function TabsComponent({coins}) {
  const [value, setValue] =useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let style={
    color:"var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize"
  }

  const theme=createTheme({
    palette:{
        primary:{
            main:"#3a80e9"
        }
    }
  })

  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}>
        
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="Grid" sx={style}/>
            <Tab label="List" value="List" sx={style}/>
          
          </TabList>
       
        <TabPanel value="Grid"><div className='grid-flex'>
          
        { coins.map((coin,i)=>{
                return <Grid coin={coin}  key={i}/>
                    
                
            })}
            </div></TabPanel>
        <TabPanel value="List">
          <Table className='list-table'>
{coins.map((coin,i)=>{
  return <List coin={coin} key={i}/>
})}
          </Table>
          </TabPanel>
        
      </TabContext>
    </ThemeProvider>
  );
}

