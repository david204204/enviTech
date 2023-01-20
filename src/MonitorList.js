import data from './Legends.json'
import './MonitorList.css'
const MonitorList = ({menuContent,legendFunc,liftUpData}) => {
    return (
        <div className='monitor-content'>
        {Object.keys(menuContent).map((key,i)=>(
            <li 
            key={i} 
            onClick={()=>liftUpData(legendFunc(data,menuContent[key].map(d => d.LegendId)))}> 
                {key}
            </li>
        ))}
        </div>
    )
}

export default MonitorList;