import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, getDay, parse, startOfWeek } from 'date-fns';
import "react-big-calendar/lib/css/react-big-calendar.css"
import NewEvent from './NewEvent';
import Appbar from './AppBar';

export default function Scheduler() {
  const locales = {
    "en-US": require("date-fns/locale/en-US")
  }
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  });
  const eventList = [{
    title: "Big Meeting",
    start: new Date(2023, 2, 25),
    end: new Date(2023, 2, 26)
  }];

  return (
    <div>
      <Appbar></Appbar>

      <NewEvent eventList={eventList}></NewEvent>

      <Calendar
      localizer={localizer}
      events={eventList}
      startAccessor="start"
      endAccessor="end"
      style={
        {
          height: 500,
          margin: "25px"
        }
      } />
    </div>
  );
}