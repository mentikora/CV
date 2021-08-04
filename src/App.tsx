import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PrintIcon from '@material-ui/icons/Print';
import Divider from '@material-ui/core/Divider';

import { data } from './data';
import { SkillBadges, TimeLine } from './views';
import style from './app.module.css';

export const App: React.FunctionComponent = () => {
  const { fullname, position, phone, location, socials, about, skillsBadges, previousJobs, education, courses, awards } = data;
  return (
    <Box component="main" className={style.app} boxShadow={18}>
      {window.location.search !== '?button=true' && <div className={style.actions}>
        <Button
          href="./roman-horobets-cv.pdf"
          className={style.download}
          variant="contained"
          color="secondary"
          startIcon={<CloudDownloadIcon />}
        >
          PDF
        </Button>
        <Button
          className={style.print}
          variant="contained"
          color="secondary"
          onClick={() => window.print()}
          startIcon={<PrintIcon />}
        >
          Print
        </Button>
      </div>}

      <Grid container spacing={2}>

        {/* about */}
        <Grid item xs={12}>
          <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography component="h1" variant="h4">
                {fullname}
              </Typography>
              <Typography variant="body2" color='textSecondary'>
                {position}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography>
                <a href={socials.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon />
                </a>
                <a href={socials.github} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
                <a href={`mailto:${socials.email}`}>
                  <AlternateEmailIcon />
                </a>
              </Typography>
              <Typography variant="body2" color='textSecondary'>
                {location}, {phone}
              </Typography>
            </Box>
          </Box>
          <Typography>
            {about}
          </Typography>
        </Grid>    

        {/* skills */}
        <Grid item xs={12}>
          <SkillBadges heading={'Skills'} skills={skillsBadges} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <div className={style.box}>
            <div>
              <TimeLine heading={'Education'} data={education} />
              <Typography variant="h5">Languages</Typography>
              <Typography>English (intermediate), Ukrainian (native)</Typography>
            </div>
            <div>
              <TimeLine heading={'Courses'} data={courses} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* history */}
        <Grid item xs={12}>
          <TimeLine heading={'Employment history'} data={previousJobs} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TimeLine heading={'Personal achievements'} data={awards} />
        </Grid>
      </Grid>
    </Box>
  );
}
