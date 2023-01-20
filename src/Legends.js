import './Legends.css'
const Legends = ({legends}) => {

    return(
        <div >
        {Object.keys(legends).map((key,i)=>(
        
        <ul key={i}>{legends[key].map((list,index) =>(
          <div className='legends-content' key={index}>
            <li className='list-content' >{list.Label}</li>
            <div style={{backgroundColor: `${list.Color}`, height : '1rem',width: '5%',float: 'left'} } ></div>
          </div>
          ))}
        </ul>
      ))}


        </div>
    )
}


export default Legends;