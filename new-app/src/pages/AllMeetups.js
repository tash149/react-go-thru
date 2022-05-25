import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import {useState, useEffect} from 'react';

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

//fetch and response.json returns a promise
//earror handling->complete course
//useState->renders page whenever we change state and this would cause the component to render indefinetly therefore ininite loop
// useEffect-> will be able to restrict when the fetch code runs

function AllMeetupsPage(){
  
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(()=>{
      setIsLoading(true);
      fetch('https://react-go-thru-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
      ).then(response=>{
        return response.json();
      }).then(data=>{ // firebase data is nested object
        const meetups = [];
        
        for(const key in data){ //accessing the nested object for the given key
          const meetup = { //meetup is this object, 
            //use spread operator to copy all key value pairs of nested object into this object
            id:key,
            ...data[key]
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    }, []);
     
    //external values your effect function relies on
    //add all values of the dependencies in the useEffect function ex setIsLoading, setIsLoadedMeetups. Here no need to since this functionality provided by react
    //with empty array->it will only execute the function one time when the component is rendered
    

    if(isLoading){
      return(
        <section>
          <p>Loading...</p>
        </section>
      );
    }

    //we expect an array in meetups=Dummydata/loaded meetups
    return (
    <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={loadedMeetups}/>
        </ul>
    </section>);
}

export default AllMeetupsPage;