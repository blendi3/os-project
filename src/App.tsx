import { PowerButton } from "@components/PowerButton/PowerButton";

import { useUIContext } from "@context/UIContext/UIContext";
import { useAuthContext } from "@context/AuthContext/AuthContext";

import { Login } from "@pages/Login/Login";
import { MainScreen } from "@pages/MainScreen/MainScreen";

function App() {
  const { darkMode } = useUIContext();
  const { isAuthenticated } = useAuthContext();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="w-full flex bg-gradient-to-b h-screen from-primary dark:from-slate-500 to-secondary dark:to-slate-800">
        {!isAuthenticated ? <Login /> : <MainScreen />}

        <PowerButton />
      </div>
    </div>
  );
}

export default App;
