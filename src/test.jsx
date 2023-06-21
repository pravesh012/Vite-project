import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDashboard, faFile, faSearch, faBell, faCircle } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const App = () => {
  const [showCollectionSlider, setShowCollectionSlider] = useState(false);

  const handleCollectionClick = () => {
    setShowCollectionSlider(true);
  };

  return (
    <>
      <nav>
        <ul className='parent-lists-wrapper'>
          <li>
            <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faDashboard} style={{ color: 'white' }} />
            <span className='nav-span-li' style={{ color: 'white' }}>
              Dashboard
            </span>
          </li>
          <li onClick={handleCollectionClick}>
            <FontAwesomeIcon icon={faFile} style={{ color: 'white' }} />
            <span className='nav-span-li2' style={{ color: 'white' }}>
              Collection
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} style={{ color: 'white' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} style={{ color: 'white' }} />
          </li>
        </ul>
      </nav>

      <main>
        <div className='slider-left'>{showCollectionSlider && <div>hi</div>}</div>
        <div className='main-content'></div>
      </main>
    </>
  );
};

export default App;
