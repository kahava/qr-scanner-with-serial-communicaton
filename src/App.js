import React, {useState, useEffect} from 'react';
import {Container, Card, CardContent, makeStyles, Grid} from '@material-ui/core';

import QrReader from 'react-qr-reader';





function App() { 


  function SendData(){

    const data = {
      name: "anna", age:24
    };
    
    useEffect(()=>{
    fetch("/home", {
      method:"POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)
    }
    
    ).then(res => res.json()).then(info => console.log(info))
    
    })
    
    }
    
    





 
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const classes = useStyles();
 
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);

    }

   }
     console.log(scanResultWebCam)
  return (
    <Container className={classes.conatiner}>
          <Card>
            <button onClick={SendData()}>click</button>
              
              <CardContent>
                  <Grid container spacing={2}>
                     
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                         <h3>Scan QR code to verify payments</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                        
                      </Grid>
                  </Grid>
              </CardContent>
          </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
export default App;
