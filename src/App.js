import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Category from './Category';
import Home from './Home';
import Expsenses from './Expsenses';



class App extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                    
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/categories' exact={true} component={Category}/>
                     <Route path='/expenses' exact={true} component={Expsenses}/>
                  
             </BrowserRouter>
           
        );
    }
}
 
export default App;