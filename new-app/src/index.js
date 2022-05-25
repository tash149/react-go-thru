import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
//import FavouritesContext from './store/favourites-context';
import { FavouritesContextProvider } from './store/favourites-context'; //we don't want default export therefore curly


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavouritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavouritesContextProvider>,
    document.getElementById('root')
    );
