import './App.css';
import data from './Legends.json'
import {menuBtn, monitorBtn, getLegends} from './handlers/gettinData'
import { useEffect, useState } from 'react';
import MainButton from './MainButton';
import MonitorList from './MonitorList';
import Legends from './Legends';

function App() {

  //all the state mangment
  const [showMenu,setShowMenu] = useState(false);
  const [showLegends,setShowLegends] = useState(false);
  const [menuContent,setMenuContent] = useState({});
  const [legends,setLegends] = useState({});
  const [menu,setMenu] =useState({})

//save data to state and showing menu
  const getData = (data) => {

    setMenuContent(data);
    setShowMenu(!showMenu);
    setShowLegends(false);
    
  }
//save data to state and showing legends
  const getLegendsData = (data) =>{
    setLegends(data);
    setShowLegends(!showLegends);
    
  }

//set the general info once at loading
  useEffect(()=>{
    setMenu(menuBtn(data));
  },[])

  
  return (
    <div className="App">
      <header className="App-header">
        <div >
          {/* button component with functions that send by props and state data */}
            <MainButton 
            menu={menu}
            liftUpData={getData}
            onClickFunc={monitorBtn} />
          
          {showMenu && (
            <div>
                <ul>
                  {/* monitor component with functions that send by props and state data*/}
                  <MonitorList 
                  menuContent={menuContent}
                  legendFunc={getLegends}
                  liftUpData={getLegendsData}
                  />
                </ul>
            </div>)}
            {/* legends component with state data*/}
          {showLegends && (<Legends legends={legends}/>)}
                    
        </div>
       
      </header>
    </div>
  );
}

export default App;
