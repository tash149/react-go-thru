import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
//import {useState} from 'react';
import {useHistory} from 'react-router-dom';

// push replace method push->press back->go to prev page

function NewMeetupPage(){
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch('https://react-go-thru-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Conent-Type': 'application/json'
            }
        }
      ).then(()=>{
          history.replace('/')
      });  
    }
    

    return (
    <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
}

export default NewMeetupPage;