import {useState, useEffect} from 'react'
import Tasklist from './components/Tasklist'
import TaskForm from './components/TaskForm'
import{tasks as data} from './data/task'

const App = () => {

  const [tasks, setTasks]= useState([])
        
    useEffect(()=>{
        setTasks(data)
    }, [])

    function createTask(task){
      setTasks([...tasks, {
        title: task.title,
        id:tasks.length,
        description: task.description
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