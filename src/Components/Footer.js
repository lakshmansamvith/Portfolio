import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';    
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Grid, Link, Typography } from '@mui/material';

import '../css/index.css'

function MaterialUIFooter() {
  return (
    <div className='footer'>
      <footer>
        <Grid container spacing={2} justify="center"  direction="row"
        alignItems="center"
        justifyContent="center" 
        >
        <Grid item>
        <Typography variant="h6" style={{ color: '#FDFFFC' }}>
        &copy; Lakshman Samvith
        </Typography>
        </Grid>
          <Grid item>
            <Link href="https://github.com/lakshmansamvith" target="_blank" rel="noopener">
              <GitHubIcon className='github-icon'
               style={{ color: '#FDFFFC' }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="mailto:your-lakshmandunna75@gmail.com">
              <MarkEmailReadIcon
              className='email-icon'
              style={{ color: '#FDFFFC' }}/>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.linkedin.com/in/lakshman-samvith-163650150/" target="_blank" rel="noopener">
              <LinkedInIcon
              className='linkedin-icon'
               style={{ color: '#FDFFFC' }} />
            </Link>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default MaterialUIFooter;
