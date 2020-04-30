import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2020-04-30';
const schedulerData = [
  {
    startDate: "2020-04-30T09:45",
    endDate: "2020-04-30T11:00",
    title: "Building tour",
  },
  {
    startDate: "2020-04-30T12:00",
    endDate: "2020-04-30T13:30",
    title: "Lease signing",
  },
];

export default () => (
  <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={9}
        endDayHour={14}
      />
      <Appointments />
    </Scheduler>
  </Paper>
);
