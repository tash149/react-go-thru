import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites:0
});

// This component would provide the context to other components
// It will also update context values
//All components which are listening to context would be updated->wrapped inside FavouritesContext Provider
function FavouritesContextProvider(props){
    
    const [userFavourites, setUserFavourites] = useState();
    
    function addFavouriteHandler(favouriteMeetup){
        //setUserFavourites(userFavourites.concat(favouriteMeetup));// Note: react doesn't process State update instantly therefore not the correct method
        //better way to update states is to use functions inside setUserFavourites since it depends on prev state
        setUserFavourites((prevUserFavourites)=>{//this funtion will automatically recieve prev state snapshot
             return(prevUserFavourites.concat(favouriteMeetup));
        });
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourites((prevUserFavourites)=>{
            return(prevUserFavourites.filter(meetup=>{meetup.id!==meetupId}));//filter executes for every item in the array
        });
    }

    function itemIsFavouriteHandler(meetupId){
        return(userFavourites.some(meetup=>meetup.id==meetupId));
    }

    const context = {
        favourites: userFavourites
    };

    return( 
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    );
}