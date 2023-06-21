import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faDashboard, faFile, faSearch, faBell, faCircle} from '@fortawesome/free-solid-svg-icons'
import './style.css';
import { ShowCollectionSlider } from './showCollection';

const App = () => {

  const [data, setData]  = useState(false);
  function handleClicksSlider(){
    return setData(true);
  }

  return (
    <>
      
      <nav>
        <ul className = 'parent-lists-wrapper'>
          {/* if clicked on bar. delete the slider */}
          <li> < FontAwesomeIcon icon = {faBars} style = {{color:'white'}}/></li>  

          <li> <FontAwesomeIcon icon = {faDashboard} style = {{color:'white'}}/>
              <span className = 'nav-span-li' style = {{color:'white'}} >Dashboard</span>
          </li>
          {/*  not avaible  since I cant use route*/}

          <li onClick={handleClicksSlider}> <FontAwesomeIcon icon = {faFile} style = {{color:'white'}}/> 
              <span className = 'nav-span-li2' style = {{color:'white'}}>Collection</span>
          </li>
          {/* show collection of todos */}

          <li> < FontAwesomeIcon icon = {faSearch} style = {{color:'white'}}/></li>
          {/* show todos to do*/}
          <li> <FontAwesomeIcon icon = {faBell} style = {{color:'white'}} /></li>
            {/* not sure what to do with this. probably notifictions */}
          <li> < FontAwesomeIcon icon = {faCircle} style = {{color:'white'}}/></li>
          {/* put a profile */}
        </ul>
      </nav>
      
      <main>
        <div className='slider-left'>{data&& <><div>clciked</div></>}</div>
        <div className = 'main-content'></div>
      </main>
      
      
    </>
  );
};

export default App;
