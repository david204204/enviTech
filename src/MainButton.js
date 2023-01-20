import './MainButton.css'
import data from './Legends.json'

const MainButton = ({menu,onClickFunc,liftUpData}) => {
    return(
        <div className='btn-container'>
        {Object.keys(menu).map((key,i) => (
        <button
        className="filter-btn"
        id={menu[key].map(d => d.Id)}
        key={i}
        onClick={()=> liftUpData(onClickFunc(data,menu[key].map(d => d.Id),menu[key].map(d => d.LegendId)))}
        
        >
        {key}
        </button> 
        ))}
        </div>
    )
}

export default MainButton;