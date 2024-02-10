import TaskCard from "./TaskCard"

function Tasklist(props) {

    

    if(props.tasks.length===0){
        return <h1>No hay tareas aún</h1>
    }

  return (
    <div>
        {props.tasks.map((task)=>(
            
            <TaskCard key={task.id} task={task}/>
        ))}
    </div>
  )
}

export default Tasklist