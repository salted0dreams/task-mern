import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ShowTasks } from './components/ShowTasks'
import { CreateTask } from './components/CreateTask'

function App() {

  return (
    <div className="app-contents">
            <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<ShowTasks />} />
                  <Route path="/create-task" element={<CreateTask />} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App
