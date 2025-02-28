import { useState } from "react";
import Home from "./components/home/Home";


function App() {
  const [isDashboard, setIsDashboard] = useState(false);

  return (
    <>
      
    
     <div>
      {!isDashboard ? (
        <>
           <Home/>
          <button
            className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsDashboard(true)}
          >
            Open Dashboard
          </button>
        </>
      ) : (
        <DashboardLayout />
      )}
    </div>
    </>
  )
}

export default App
