
export let menuBtn = (data) => {
   
    let nameObj = {}
    let newKey = 'MonitorType'
    
    data[newKey].forEach(element => {
        //console.log(element.Name)
        let tempObj = {
            Name: element.Name,
            Id: element.Id,
            LegendId: element.LegendId
        };
        if(!nameObj[element.Name]){
            nameObj[element.Name] = [tempObj]
        }
    });

    return nameObj;
}

export let monitorBtn = (data,id,legendId) => {

    let objKey = 'Monitor';
    let nameObj = {}
    id = Number(id);

    data[objKey].forEach(element => {
        //console.log(element.Name)
        
        let tempObj = {
            Name: element.Name,
            Id: element.MonitorTypeId,
            LegendId: legendId
            
        };
        if(element.MonitorTypeId === id){
            nameObj[element.Name] = [tempObj]
        }
    });
    
    return nameObj;

}


 export let getLegends = (data,id) => {

    let objKey = 'Legends';
    let nameObj = {}
    

    data[objKey].forEach(element => {
        let inerKey = 'tags';
        let tempObj = {}
             
        if(element.Id === Number(id)){
            element[inerKey].forEach(el =>{
            tempObj = {
                Label: el.Label,
                Color: el.Color,
            };

            if(!nameObj[inerKey]){
                nameObj[inerKey] = [tempObj];
            }
            else{
                nameObj[inerKey].push(tempObj);
            }
            
        })
        }  
        
    });
    
    return nameObj;


}

