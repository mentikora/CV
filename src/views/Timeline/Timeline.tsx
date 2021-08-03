import React from 'react';
import format from 'date-fns/format';
import differenceInDays from 'date-fns/differenceInDays'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import './style.css';

type Props = {
  data: {
    name: string;
    from: Date,
    to: Date,
    text?: string;
    projects?: Array<{
      overview: string;
      responsibilities: string;
      stack: string;
    }>;
  }[];
  heading: string;
};
export const TimeLine: React.FunctionComponent<Props> = ({
  data,
  heading,
}) => (
  <Box>
    <Box mb={1}>
      <Typography variant="h5" >{heading}</Typography>
    </Box>
    <Box>
      {data.map(e => (
        <Box mb={2} key={e.name}>
          <Box mb={1}>
            <Typography>
              <Box component="span" fontWeight="bold">
                {e.name}
              </Box>
            </Typography>
            <Typography variant="body2" color='textSecondary'>
              {format(+e.from, 'MMM yyyy')}
              {'-'}
              {
                differenceInDays(e.to, new Date()) !== 0
                  ? format(+e.to, 'MMM yyyy')
                  : 'Present'
              }
            </Typography>
          </Box>
          {e.text && <Typography>
            {e.text}
          </Typography>}

          {
            e.projects && <Box mt={2}>
                {e.projects.map(project => (
                  <Box mb={1} ml={1}>
                    <Typography variant="body2">
                      <Box component="span" fontWeight="bold">
                        Project overview:
                      </Box>
                    </Typography>
                    <Typography variant="body2">
                      {project.overview}
                    </Typography>
                    <Typography variant="body2">
                      <Box component="span" fontWeight="bold">
                        Main tasks and responsibilities:
                      </Box>
                    </Typography>
                    <Typography variant="body2"> 
                      {project.responsibilities}
                    </Typography>
                    <Typography variant="body2">
                      <Box component="span" fontWeight="bold">
                        Technology stack:
                      </Box>
                    </Typography>
                    <Typography variant="body2">
                      {project.stack}
                    </Typography>
                  </Box>
                ))
              }
            </Box>
          }
        </Box>
      ))}
    </Box>
  </Box>
);