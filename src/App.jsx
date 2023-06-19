import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const App = () => {


  return (
    <>
      <nav>
        <ul className = 'parent-lists-wrapper'>
          <li>< FontAwesomeIcon icon = {faBars} className='test'/></li>
          <li><FontAwesomeIcon icon = {faDashboard}/>Dashboard</li>
          <li> <FontAwesomeIcon icon = {faFile} />Collection</li>
          <li>< FontAwesomeIcon icon = {faSearch} /></li>
          <li><span  className = 'icons-profile'></span></li>


          
        </ul>
      </nav>
    </>
  );
};

export default App;
