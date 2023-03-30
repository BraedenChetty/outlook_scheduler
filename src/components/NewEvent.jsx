import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";


export default function NewEvent({eventList}){
    const [newEvent, setNewEvent] = useState({
        title: "",
        allDay: false,
        start: dayjs(),
        end: dayjs().add(1, "h")
    });
    const [allEvents, setAllEvents] = useState(eventList);
    const addEvent = () => {
        console.log(newEvent)
        setAllEvents([...allEvents, newEvent]);

        console.log(allEvents)

        dialogClose();
    }

    const [open, setOpen] = useState(false);
    const dialogOpen = () => {
        setOpen(true);
    }
    const dialogClose = () => {
        newEvent.title = "";
        newEvent.allDay = false;
        newEvent.start = dayjs();
        newEvent.end = dayjs().add(1, "h");

        setOpen(false);
    }

    return(
        <div>
            <div className="newEvent">
                <Button onClick={dialogOpen}>ADD EVENT</Button>
            </div>
            <br></br>
            
            <div>
                <AuthenticatedTemplate>
                    <Dialog open={open} onClose={dialogClose}>
                        <DialogTitle>
                            New Event
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText>
                                Please enter the required event information below:        
                            </DialogContentText>

                            <FormGroup>
                                <TextField autoFocus margin="dense" label="Event Title" type="text" fullWidth variant="standard" value={newEvent.title}
                                    onChange = {x => {
                                        setNewEvent({...newEvent, title: x.target.value});
                                    }}
                                />

                                {/* <FormGroup>
                                    <FormControlLabel control={<Checkbox onChange = {x => {setNewEvent({...newEvent, allDay: x})}} />} label="All Day"/>
                                </FormGroup> */}

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']}>
                                        <DateTimePicker label="Start Date" fullWidth value={newEvent.start}
                                            onChange = {x => {
                                                setNewEvent({...newEvent, start: x});
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']}>
                                        <DateTimePicker label="End Date" fullWidth value={newEvent.end}
                                            onChange = {x => {
                                                setNewEvent({...newEvent, end: x});
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormGroup>
                        </DialogContent>

                        <DialogActions>
                            <Button variant="text" onClick={addEvent}>Add</Button>
                            <Button variant="text" onClick={dialogClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </AuthenticatedTemplate>
                
                <UnauthenticatedTemplate>
                    <Dialog open={open} onClose={dialogClose}>
                        <DialogTitle>
                            You're not signed in
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText>
                                Please sign in with your microsoft account before proceeding       
                            </DialogContentText>
                        </DialogContent>

                        <DialogActions>
                            <Button variant="text" onClick={dialogClose}>Ok</Button>
                        </DialogActions>
                    </Dialog>
                </UnauthenticatedTemplate>
            </div>
        </div>
    )
}