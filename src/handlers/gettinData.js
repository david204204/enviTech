
//geting general data from json and filtering button name and id's for connecting to monitors and legend
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

//geting the moniyor list from json file
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

//geting the legends contents words and colors as object
 export let getLegends = (data,id) => {

    let objKey = 'Legends';
    let nameObj = {}
    

    data[objKey].forEach((element,index) => {
        let inerKey = Object.getOwnPropertyNames(element);
        //filter the object property for geting the keys exclude id
        let indxKey = inerKey.filter(d => d !== 'Id')
        let tempObj = {}
             
        if(element.Id === Number(id) && indxKey !== 'Id'){
            element[indxKey].forEach(el =>{
            tempObj = {
                Label: el.Label,
                Color: el.Color,
            };

            if(!nameObj[indxKey]){
                nameObj[indxKey] = [tempObj];
            }
            else{
                nameObj[indxKey].push(tempObj);
            }
            
        })
        }  
        
    });
    
    return nameObj;


}

