import AddTodo from './component/AddTodo'
import LoadTodos from './component/LoadTodos'


function App() {


  return (
    <>
      <AddTodo />

      <h1 className='text-4xl mt-10'>Load Todos</h1>
      <LoadTodos />
    </>
  )
}

export default App
