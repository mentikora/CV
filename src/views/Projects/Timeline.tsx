import React from 'react';
import format from 'date-fns/format';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './style.css';

type Props = {
  data: {
    name: string;
    from: Date,
    to: Date,
    text?: string;
  }[];
  heading: string;
  addEndline?: boolean;
};
export const TimeLine: React.FunctionComponent<Props> = ({
  data,
  heading,
  addEndline = false
}) => (
  <Box pt={2}>
    <Typography variant="h5">{heading}</Typography>
    <Box>
      <Timeline>
        {data.map(e => (
          <TimelineItem key={e.name}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box mb={1}>
                <Typography>
                  <Box component="span" fontWeight="bold">
                    {e.name}
                  </Box>
                </Typography>
                <Typography variant="body2" color='textSecondary'>
                  {format(e.from, 'MMM yyyy')}-{format(e.to, 'MMM yyyy') !== format(new Date(), 'MMM yyyy') ? format(e?.to, 'MMM yyyy') : 'Present'}
                </Typography>
              </Box>
              {e.text && <Typography>
                {e.text}
              </Typography>}
            </TimelineContent>
          </TimelineItem>
        ))}
        {addEndline && <TimelineItem >
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>You?</Typography>
          </TimelineContent>
        </TimelineItem>}
      </Timeline>
    </Box>
  </Box>
);