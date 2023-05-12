import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [readingTasks,setreadingTasks]=React.useState("")
  const [Taskslists,setTaskslists]=React.useState([])
 
 function reading(event){
  setreadingTasks(event.target.value)

 }
// Adding Taks
function AddingTasks(){
  const TaksWithID={
    id: Taskslists.length ===0?1:Taskslists[Taskslists.length -1].id+1,
    TaksName:readingTasks
  }
  const NewArrys=[...Taskslists,TaksWithID]
  // ...Taskslists waxay kadhigantahay xogtii aad heesay TaksWithID kudar oo push gareey
  setTaskslists(NewArrys)
}

// daleting Tasks

function DelatTasks(Delateid){ 
  // Delateid >wuxuu wadaa xogta showmeId 
  const DelateArrys=Taskslists.filter((dalateFiltaring) =>{ 
    // filter waxaad uisticmaalee si aad wax ukala saarto
    if(Delateid === dalateFiltaring.id){ 
      // dalateFiltaring.id > xogta leh ID uqaasaa labarbardig Delateid xogta kujirta
      return false
    }
    else{
      return true
    }

  })
  setTaskslists(DelateArrys)

}

// Completed Tasks NB

function CompletedTasks(id){
  const CompletedArrys=Taskslists.map((completedFiltring)=>{
    if(id === completedFiltring.id){
      return ({...completedFiltring,chacking:true})
      // ...completedFiltring > waxay heesaa xogta ShowMe.id ,sidaa owgeed chacking:true  latacaamul
    }
    else{
      return completedFiltring
    }
  } )
  setTaskslists(CompletedArrys)


}
console.log(Taskslists)
  return (
    <div className="App">
      <div className='input_add_btn' >
        <input  onChange={reading} placeholder='Enter tasks...'></input>
        <button onClick={AddingTasks}>Add</button>
      </div>
      {/*  */}
      <div className='tasks'>
        {Taskslists.map( ShowMe =>{
          return (
           <div
           style={{backgroundColor:ShowMe.chacking?"red":"whitesmoke"}}>
            <h2>{ShowMe.TaksName}</h2>
            <button onClick={()=>{DelatTasks(ShowMe.id)}}>x</button>
            {/* showme xogta kujirta leh Id soo qabso  */}
            <button onClick={()=>{CompletedTasks(ShowMe.id)}}>completed</button>
           </div>
          )
        })}
    
    

      </div>
 

    </div>
  );
}

export default App;
