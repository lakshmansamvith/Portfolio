import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import image from './images/moocs.jpg';
import vehicles from './images/vehicles.jpg';

function ProjectPage() {
  return (
    <div className='Project'>
      <Typography variant="h4" gutterBottom spacing={2} sx={{ textAlign: "center" }}>
        My Github Portfolio
      </Typography>
      <Grid container justify="center" spacing={2} sx={{ align : "center" }}>
        <Grid item xs={12} sm={6} md={4}>
          <a href="https://github.com/lakshmansamvith/Coursera-Data-Visualization" target='_blank' rel="noreferrer">
            <Card style={{ background: "#363537" }} spacing={2} sx={{
              border: '1px solid #fff',
              marginRight: '2%',
              marginLeft: '2%'
            }}>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="Project Image"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom style={{ color: "#fff" }}>
                  Coursera Data Visualization
                </Typography>
                <Typography variant="body2">
                  Data Visualization for Coursera Dataset provided on Kaggle
                </Typography>
              </CardContent>
            </Card>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a href="https://github.com/lakshmansamvith/Wheeler-Classifier" target='_blank' rel="noreferrer" >
            <Card style={{ background: "#363537" }} sx={{
              border: '1px solid #fff',
              marginRight: '2%',
              marginLeft: '2%'
            }} >
              <CardMedia
                component="img"
                height="200"
                image={vehicles}
                alt="Project Image"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom style={{ color: "#fff" }}>
                  Wheeler-Classifier
                </Typography>
                <Typography variant="body2">
                  A deep learning model for image classification of vehicles.
                </Typography>
              </CardContent>
            </Card>
          </a>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}

export default ProjectPage;
