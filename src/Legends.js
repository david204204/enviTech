
const Legends = ({legends}) => {

    return(
        <>
        {Object.keys(legends).map((key,i)=>(
        
        <ul key={i}>{legends[key].map((list,index) =>(
          <div key={index}>
            <li >{list.Label}</li>
            <div ></div>
          </div>
          ))}
        </ul>
      ))}


        </>
    )
}


export default Legends;