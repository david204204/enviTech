const data = {
    "MonitorType": [
        {
            "Id": 0,
            "Name": "Index",
            "LegendId": 0,
            "description": "Air Quality Index"
        },
        {
            "Id": 1,
            "Name": "Pollutant",
            "LegendId": 1,
            "description": "Pollutant"
        },
        {
            "Id": 2,
            "Name": "Meteorology",
            "LegendId": 1,
            "description": "Meteorology"
        }
    ],
    "Legends": [
        {
            "Id": 1,
            "tags": [
                {
                    "Label": "Current Data",
                    "Color": "#2795c3"
                },
                {
                    "Label": "No Current Data",
                    "Color": "#969696"
                }
            ]
        },
        {
            "Id": 0,
            "tags": [
                {
                    "Label": "GOOD",
                    "Color": "#00E400"
                },
                {
                    "Label": "MODERATE",
                    "Color": "#FFFF00"
                },
                {
                    "Label": "UNHEALTHY FOR SENSITIVE GROUPS",
                    "Color": "#FF7E00"
                },
                {
                    "Label": "UNHEALTHY",
                    "Color": "#FF0000"
                },
                {
                    "Label": "VERY UNHEALTHY",
                    "Color": "#99004C"
                },
                {
                    "Label": "HAZARDOUS",
                    "Color": "#4C0026"
                },
                {
                    "Label": "NO DATA",
                    "Color": "#C0C0C0"
                }
            ]
        }
    ],
    "Monitor": [
        {
            "Id": 0,
            "Name": "All",
            "Desc": "",
            "MonitorTypeId": 0
        },
        {
            "Id": 22,
            "Name": "PM10",
            "Desc": "",
            "MonitorTypeId": 0
        },
        {
            "Id": 21,
            "Name": "PM2.5",
            "Desc": "",
            "MonitorTypeId": 0
        },
        {
            "Id": 4,
            "Name": "SO2",
            "Desc": "Trace SO2",
            "MonitorTypeId": 0
        },
        {
            "Id": 3,
            "Name": "CO",
            "Desc": "Trace CO",
            "MonitorTypeId": 0
        },
        {
            "Id": 2,
            "Name": "O3",
            "Desc": "Ozone (O3)",
            "MonitorTypeId": 0
        },
        {
            "Id": 22,
            "Name": "PM10",
            "Desc": "",
            "MonitorTypeId": 1
        },
        {
            "Id": 21,
            "Name": "PM2.5",
            "Desc": "",
            "MonitorTypeId": 1
        },
        {
            "Id": 2,
            "Name": "O3",
            "Desc": "Ozone (O3)",
            "MonitorTypeId": 1
        },
        {
            "Id": 1,
            "Name": "NO2",
            "Desc": "",
            "MonitorTypeId": 1
        },
        {
            "Id": 15,
            "Name": "Temperature",
            "Desc": "Temperature 2m",
            "MonitorTypeId": 2
        },
        {
            "Id": 18,
            "Name": "RH",
            "Desc": "Relative Humidity",
            "MonitorTypeId": 2
        },
        {
            "Id": 36,
            "Name": "BP",
            "Desc": "Pressure",
            "MonitorTypeId": 2
        },
        {
            "Id": 19,
            "Name": "Wind",
            "Desc": "Wind Speed S",
            "MonitorTypeId": 2
        },
        {
            "Id": 20,
            "Name": "Wind Direction",
            "Desc": "Wind Dir S",
            "MonitorTypeId": 2
        }
    ]
}



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

export let monitorBtn = (data,id) => {

    let objKey = 'Monitor';
    let nameObj = {}
    id = Number(id);

    data[objKey].forEach(element => {
        //console.log(element.Name)
        
        let tempObj = {
            Name: element.Name,
            Id: element.MonitorTypeId,
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
        //console.log(element.Name)
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

