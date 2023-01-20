import data from './Legends.json'

const MonitorList = ({menuContent,legendFunc,liftUpData}) => {
    return (
        <>
        {Object.keys(menuContent).map((key,i)=>(
            <li 
            key={i} 
            onClick={()=>liftUpData(legendFunc(data,menuContent[key].map(d => d.LegendId)))}> 
                {key}
            </li>
        ))}
        </>
    )
}

export default MonitorList;