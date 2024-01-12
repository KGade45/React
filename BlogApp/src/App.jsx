import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => userData ? dispatch(login({ userData })) : dispatch(logout()))
      .finally(() => {
        // console.log(loading);
        setLoading(false);
      })
  }, [])

  return !loading ? (
    <div className='min-h-sc flex-wrap flex bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          TODO{/* <Outlet/> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (<div></div>);

}

export default App
