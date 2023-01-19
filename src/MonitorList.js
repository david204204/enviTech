import data from './Legends.json'

const MonitorList = ({id,keyforChild,dataList,legendFunc,liftUpData}) => {
    return (
        <>
        <li 
        id={id} 
        key={keyforChild} 
        onClick={()=>liftUpData(legendFunc(data,id))}> 
            {dataList}
        </li>
        </>
    )
}

export default MonitorList;