import react from 'react'
import Nav from './Component/Nav'
import './index.css'
import Banner from './Component/Banner'
import Contact from './Component/Content'
import Card from './Component/Card'

function App() {

  return (
  <>
 <Nav/>
 <Banner/>
 <Contact/>
 <div className='flex w-full'>
  <div className='flex flex-wrap justify-center w-[60%] gap-3'>
    <Card/>
  </div>
  <div className='w-[40%]'></div>
 </div>
  </>
  )
}

export default App
