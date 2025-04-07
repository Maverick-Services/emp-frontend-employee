import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { Profile } from './components/core/dashboard/Profile'
import MyTasks from './components/core/dashboard/MyTasks'
import { Login } from './pages/Login'
import OpenRoute from './components/core/auth/OpenRoute'
import PrivateRoute from './components/core/auth/PrivateRoute'
import { EditTaskDetails } from './components/core/dashboard/editTask/EditTaskDetails'
import Home from './components/core/dashboard/home/Home'
import Queries from './components/core/dashboard/queries/Queries'
import Query from './components/core/dashboard/queries/Query'
import RaiseQuery from './components/core/dashboard/queries/RaiseQuery'
import Announcements from './components/core/dashboard/announcements/Announcements'
import AnnouncementDetails from './components/core/dashboard/announcements/AnnouncementDetails'

function App() {
  return (
    <div id='wrapper' className='bg-[#F3F6FE]'>
      {/* Employee */}
      <Routes>
        <Route path='/' element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        } />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path='/dashboard/home' element={<Home />} />
          <Route path='/dashboard/profile' element={<Profile />} />
          <Route path='/dashboard/tasks' element={<MyTasks />} />
          <Route path='/dashboard/tasks/:taskId' element={<EditTaskDetails />} />
          <Route path='/dashboard/queries' element={<Queries />} />
          <Route path='/dashboard/queries/:queryId' element={<Query />} />
          <Route path='/dashboard/queries/raiseQuery' element={<RaiseQuery />} />
          <Route path='/dashboard/announcements' element={<Announcements />} />
          <Route path='/dashboard/announcements/:announcementId' element={<AnnouncementDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
