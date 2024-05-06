import { useState } from 'react'
import './App.css'
import "./Components/Card"
import Card from "./Components/Card"
import Hero from "./Components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Hero />
     {count}
     <button onClick={() => setCount(count + 1)}>+</button>
     <Card 
     image="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?cs=srgb&dl=pexels-pixabay-269583.jpg&fm=jpg"
        name="Joel"
        city="Stamford"
        job="Waiter"
      
      />

     <Card 
       image="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/733885_v9_bc.jpg"
        name="Tom Holland"
        city="Stamford"
        job="Waiter"
     
      />
      
    </>
  )
}

export default App
