
import data from './Legends.json'

const MainButton = ({menu,onClickFunc,liftUpData}) => {
    return(
        <>
        {Object.keys(menu).map((key,i) => (
        <button
        id={menu[key].map(d => d.Id)}
        key={i}
        onClick={()=> liftUpData(onClickFunc(data,menu[key].map(d => d.Id),menu[key].map(d => d.LegendId)))}
        
        >
        {key}
        </button> 
        ))}
        </>
    )
}

export default MainButton;