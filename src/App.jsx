import React from 'react'
import Title from './components/Title';
import Form from './components/Form';
import Forecast from './components/Forecast';
import Hero from './pages/Hero';
const App = () => {

  return (
    <main className='w-full h-screen bg-no-repeat bg-cover bg-[url(https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=600)]'>
      <div className='flex flex-col'>
        <Title />
        <Form />
        <Hero />
      </div>
    </main>
  )


}

export default App
