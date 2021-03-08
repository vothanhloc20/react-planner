import React, { useState, useEffect } from 'react'
import './App.css'
// import Components
import Header from './components/Header'
import FormInput from './components/Form'
import TodoList from './components/TodoList'

function App() {
  // State stuff
  const [inputText, setInputText] = useState('')
  const [toDos, setToDos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalStorage()
  }, [])

  // USE EFFECT
  useEffect(() => {
    const filterHandler = () => {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'completed':
          setFilteredTodos(toDos.filter((toDo) => toDo.completed === true))
          break
        case 'uncompleted':
          setFilteredTodos(toDos.filter((toDo) => toDo.completed === false))
          break
        default:
          setFilteredTodos(toDos)
          break
      }
    }
    filterHandler()
    saveLocalStorage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDos, status])

  const saveLocalStorage = () => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('toDos') === null) {
      localStorage.setItem('toDos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('toDos'))
      setToDos(todoLocal)
    }
  }

  // Functions
  return (
    <div className="App">
      <Header></Header>
      <FormInput
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
      ></FormInput>
      <TodoList
        setToDos={setToDos}
        toDos={toDos}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      ></TodoList>
    </div>
  )
}

export default App
