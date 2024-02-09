import {useState, useEffect} from 'react'
import Tasklist from './Tasklist'
import TaskForm from './TaskForm'
import{tasks as data} from './task'

const App = () => {

  const [tasks, setTasks]= useState([])
        
    useEffect(()=>{
        setTasks(data)
    }, [])

    function createTask(taskTitle){
      setTasks([...tasks, {
        title: taskTitle,
        id:tasks.length,
        description: "nueva tarea"
      }])
    }

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <Tasklist tasks={tasks}/>
    </div>
  )
}

export default App