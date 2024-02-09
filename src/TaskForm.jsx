import {useState} from 'react'

function TaskForm({createTask}) {

    const[title, setTitle]= useState('')

    const handleSubmit= (e)=>{
        e.preventDefault()
        createTask(title)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="escribe tu tarea"
        onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea placeholder='escribe la descripcion de la tarea'></textarea>
        <button>
            Guardar
        </button>
    </form>
  )
}

export default TaskForm