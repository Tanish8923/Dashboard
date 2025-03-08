import React from 'react'
import {Container , CssBaseline , GlobalStyles ,Grid2 } from "@mui/material"

//Mock data
import mockData from "./data.json"

// Components
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import AssesmentCard from './components/AssesmentCard'
import CustomPagination from './components/CustomPagination'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <CssBaseline /> 
      <GlobalStyles
        styles={{
          body: { backgroundColor: "whitesmoke"}
        }}
      />
      <Container sx={{ display: 'flex', gap: '20px', flexDirection: 'column' , padding:"20px" }}>
        <Header/>
        <FilterBar/>
        <Grid2 container spacing={3}  justifyContent={{ xs:"center" , sm:"center" ,  md: "space-between", lg: "space-between" , xl:"space-between" }}>

            {mockData.map((item, index) => (
                <AssesmentCard key={index} data={item} />
            ))}
        </Grid2>
        <CustomPagination/>
      </Container>

      <Footer/>
    </>
  )
}

export default App
