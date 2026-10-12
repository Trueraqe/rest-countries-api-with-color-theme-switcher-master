import GetAllCountries from './GetAllCountries'
import { Routes, Route} from 'react-router-dom'
import data from "../data.json"
import GetCountry from './GetCountry';
import DarkMode from './DarkMode';

function App() {

  return (
    <>
    <main className='bg-bg-color h-full'>
      <header className='flex items-center justify-between bg-elem-color lg:p-5 lg:pl-20 lg:pr-20 font-bold lg:text-xl p-4 text-text-color'>
        <h1>Where in the world?</h1>
        <DarkMode/>
      </header>
      <Routes>
        <Route path='/' element={<GetAllCountries/>}/>
        {data.map(c => <Route path={c.name ? '/' + c.name : '/'} element={<GetCountry country={c}/>}/>)}
      </Routes>
    </main>
    </>
  )
}

export default App
