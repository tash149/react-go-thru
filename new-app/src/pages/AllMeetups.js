import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
//import {useState} from 'react';

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

//{[<li>Item1</li>, <li>Item2</li>]}
/*
{DUMMY_DATA.map((meetup)=>{
                return <li key={meetup.id}>{meetup.title}</li>
            })} Note that key should always be present when outputting data
*/


function AllMeetupsPage(){
    return (
    <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={DUMMY_DATA}/>
        </ul>
    </section>);
}

export default AllMeetupsPage;