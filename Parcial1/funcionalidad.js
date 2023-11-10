const data = {
    "tasks":{
      "one":{
        "task":"Learning Javascript",
        "state":true,
        "end":"2020/10/21"
      },
      "two":{
        "task":"Reader Book Clean Code",
        "state":false,
        "end":"2023/12/31"
      },
      "three":{
        "task":"Running",
        "state":false,
        "end":"2023/06/25"
      },
      "four":{
        "task":"Pass the Evaluation",
        "state":false,
        "end":"2023/11/09"
      },
      "five":{
        "task":"Go to Karaoke",
        "state":true,
        "end":"2022/08/25"
      },
      "six":{
        "task":"Finish watching the serie",
        "state":false,
        "end":"2023/12/31"
      },
      "seven":{
        "task":"Controll Weight",
        "state":false,
        "end":"2020/11/22"
      }
    }
  }
  
  let data1 = Object.values(data.tasks);
    console.log(data)
    const body = document.getElementById('datost')
    data1.forEach((tarea)=>{
      columnas(tarea,body);
    }
    )

    function columnas(character, body){
      const row = document.createElement('tr')
  
      const coltask = document.createElement('td')
      coltask.appendChild( document.createTextNode(character.task))
      row.appendChild(coltask)
  
      const colstate = document.createElement('td');
      colstate.appendChild(document.createTextNode(character.state));
      row.appendChild(colstate)
      
      const colend=document.createElement('td');
      colend.appendChild(document.createTextNode(character.end));
      row.appendChild(colend);
      body.appendChild(row)
  }
  
 
  
  document.getElementById("s1").addEventListener('change',()=>{
    const selecE=document.getElementById("s1")
    const code =selecE.selectedIndex
    console.log("seleccion"+code)
    let body2 = document.getElementById("datosf");
        body2.innerHTML="";
    switch (code) {
      case 1:
        let dataC=data1.filter(tarea=>tarea.state==true);
        alert(dataC)
        console.log(dataC)
        
        dataC.forEach((tarea)=>{
          columnas(tarea,body2);
        })
        break;
        case 2:
          let dataCN=data1.filter(tarea=>tarea.state==false)
        
          dataCN.forEach((tarea)=>{

            let fecha=tarea.end.split('/');
            let año=parseInt(fecha[0]);
            let mes=parseInt(fecha[1]);
            let dia=parseInt(fecha[2]);
            let fecha1=new Date(año,mes,dia)
            let fechaActual = new Date();

          let diaA = fechaActual.getDate();
          let mesA = fechaActual.getMonth() + 1;
          let añoA = fechaActual.getFullYear();
          let fecha2=new Date(añoA,mesA,diaA)
            let dataCN1=dataCN.filter(tarea11=>fecha1>fecha2)
            dataCN1.forEach((tarea2)=>{
              columnas(tarea2,body2);
            })
          })
         
        break;
       case 3:
        let dataCV=data1.filter(tarea=>tarea.state==true)
        
          dataCV.forEach((tarea)=>{

            let fecha=tarea.end.split('/');
            let año=parseInt(fecha[0]);
            let mes=parseInt(fecha[1]);
            let dia=parseInt(fecha[2]);
            let fecha1=new Date(año,mes,dia)
            let fechaActual = new Date();

          let diaA = fechaActual.getDate();
          let mesA = fechaActual.getMonth() + 1;
          let añoA = fechaActual.getFullYear();
          let fecha2=new Date(añoA,mesA,diaA)
            let dataCN1=dataCN.filter(tarea11=>fecha1>fecha2)
            dataCN1.forEach((tarea2)=>{
              columnas(tarea2,body2);
            })
          })
        break;
    
        case 4:
          data1.forEach((tarea)=>{
            columnas(tarea,body2);
          }
          )
        break;
    
      default:
        break;
    }
    
})

document.getElementById('b1').addEventListener(('click'),()=>{
let selec=document.getElementById("s2");
let task=document.getElementById("i1");
let fecha=document.getElementById("i2");
let estado="";
if(selec.selectedIndex!==0 && selec.selectedIndex===1){
  estado=true;
}else if(selec.selectedIndex!==0 && selec.selectedIndex===2){
  estado=false;
}


let nuevo= {
   "task": task.value,
   "state": estado,
   "end": fecha.value
};
alert(data.tasks)
data1.push(nuevo)


console.log(data);

})