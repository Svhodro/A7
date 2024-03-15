import react from 'react'
import Nav from './Component/Nav'
import './index.css'
import Banner from './Component/Banner'
import Contact from './Component/Content'
import Table from './Component/Table'
import Cards from './Component/Cards'

function App() {

  return (
  <>
 <Nav/>
 <Banner/>
 <Contact/>
 <div className='flex w-full'>
  <div className='flex flex-wrap justify-center w-[60%] gap-3'>
    <Cards/>
  </div>
  <div className='w-[40%]'>
    <Table/>
  </div>
 </div>
  </>
  )
}

export default App
