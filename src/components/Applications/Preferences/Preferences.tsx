import { Switch } from "@headlessui/react";

import { useUIContext } from "@context/UIContext/UIContext";

export const Preferences = () => {
  const { darkMode, toggleDarkMode } = useUIContext();

  return (
    <div className="flex-1 flex flex-col px-6 overflow-y-auto max-h-full">
      <h1 className="text-left w-full font-bold text-4xl">Preferences</h1>

      <div className="mt-4 flex text-left cursor-pointer">
        <Switch.Group>
          <Switch.Label className="mr-4">Dark Mode</Switch.Label>

          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            className={`${
              darkMode ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                darkMode ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </Switch.Group>
      </div>
    </div>
  );
};
