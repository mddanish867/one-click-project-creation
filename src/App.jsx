import { useState } from "react";
import Home from "./components/home/Home";
import DashboardLayout from "./components/dashboard/DashboardLayout"
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';
function App() {
  const [isDashboard, setIsDashboard] = useState(false);

  return (
    <>


      {/* <div>
        {!isDashboard ? (
          <>
            <Home />
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
      </div> */}
      <ThemeProvider>
      <div className="min-h-screen bg-[#030712] text-white">
        <AnimatedBackground />
        <Home />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
