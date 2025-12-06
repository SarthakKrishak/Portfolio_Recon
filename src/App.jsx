import { Navbar, Welcome, Dock } from '#components'
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import {Terminal} from "#windows"

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
      
    </div>
  )
}

export default App