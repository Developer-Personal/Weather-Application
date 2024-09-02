import { useState } from "react"
import Loader from "./component/Loader"
import Weather from "./component/Weather"

function App() {
  
  const [loader, setLoader] = useState(false)

  return (
    <div>
      <Weather setLoader={setLoader}/>
      {loader && <Loader />}
    </div>
  )
}

export default App
