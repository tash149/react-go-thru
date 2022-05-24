import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
//import {useState} from 'react';


function NewMeetupPage(){
    
    function addMeetupHandler(meetupData){
        fetch('https://react-go-thru-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Conent-Type': 'application/json'
            }
        }
      );  
    }
    

    return (
    <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
}

export default NewMeetupPage;