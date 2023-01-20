import './App.css';
import data from './Legends.json'
import {menuBtn, monitorBtn, getLegends} from './handlers/gettinData'
import { useEffect, useState } from 'react';
import MainButton from './MainButton';
import MonitorList from './MonitorList';
import Legends from './Legends';

function App() {

  const [showMenu,setShowMenu] = useState(false);
  const [showLegends,setShowLegends] = useState(false);
  const [menuContent,setMenuContent] = useState({});
  const [legends,setLegends] = useState({});
  const [menu,setMenu] =useState({})
  const getData = (data) => {

    setMenuContent(data);
    setShowMenu(!showMenu);
    setShowLegends(false);
    
  }

  const getLegendsData = (data) =>{
    setLegends(data);
    setShowLegends(!showLegends);
    
  }


  useEffect(()=>{
    setMenu(menuBtn(data));
  },[])

  
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <MainButton 
            menu={menu}
            liftUpData={getData}
            onClickFunc={monitorBtn} />
          
          {showMenu && (
            <div>
                <ul>
                  <MonitorList 
                  menuContent={menuContent}
                  legendFunc={getLegends}
                  liftUpData={getLegendsData}
                  />
                </ul>
            </div>)}

          {showLegends && (<Legends legends={legends}/>)}
                    
        </div>
       
      </header>
    </div>
  );
}

export default App;
