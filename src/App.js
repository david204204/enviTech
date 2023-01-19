import logo from './logo.svg';
import './App.css';
import data from './Legends.json'
import {menuBtn, monitorBtn, getLegends} from './handlers/gettinData'
import { useState } from 'react';
import MainButton from './MainButton';
import MonitorList from './MonitorList';
import Legends from './Legends';

function App() {

  const [showMenu,setShowMenu] = useState(false);
  const [showLegends,setShowLegends] = useState(false)
  const [menuContent,setMenuContent] = useState({});
  const [legends,setLegends] = useState({});
  const getData = (data) => {

    setMenuContent(data)
    setShowMenu(!showMenu)
    
  }

  const getLegendsData = (data) =>{
    setLegends(data)
    setShowLegends(!showLegends)
    
  }


  let menu = menuBtn(data);
  console.log(legends)
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Object.keys(menu).map((key,i) => (
            <MainButton 
            liftUpData={getData}
            id={menu[key].map(d => d.Id)}
            LegendId={menu[key].map(d => d.LegendId)}  
            key={i}
            onClickFunc={monitorBtn} 
            btn={key}/>

          ))}
          {showMenu && (
                <div>
                    <ul>
                      {Object.keys(menuContent).map((key,i)=>(
                        <MonitorList 
                        id={menuContent[key].map(d => d.Id)}
                        keyforChild={i}
                        dataList={key}
                        legendFunc={getLegends}
                        liftUpData={getLegendsData}
                        />
                      
                      ))}
                        
                    </ul>
                    
                      {showLegends && (
                        <div>
                            {Object.keys(legends).map((key,i)=>(
        
                            <ul>{legends[key].map(list =>(
                              <Legends label={list.Label} color={list.color}/> 

                              ))}
                            </ul>
                            ))}
                        </div>
                      )}
                      
                </div>
            )}

          


        </div>
       
      </header>
    </div>
  );
}

export default App;
