import {useState, useEffect} from 'react'
import Tasklist from './Tasklist'
import TaskForm from './TaskForm'
import{tasks as data} from './task'

const App = () => {

  const [tasks, setTasks]= useState([])
        
    useEffect(()=>{
        setTasks(data)
    }, [])

  return (
    <div>
      <TaskForm/>
      <Tasklist/>
    </div>
  )
}

export default App