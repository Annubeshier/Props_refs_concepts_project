import { createContext, useContext, useState } from "react";

//create theme context
const ThemeContext = createContext({});

//Theme context provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

function ThemeToggleButton() {
  const { theme, toggleTheme, isDark } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
        isDark ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${
          isDark ? "transform translate-x-8" : ""
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}
const ThemedCard = ({ title, children }) => {
  const isDark = useTheme();
  return (
    <div
      className={`${
        isDark ? "bg-dark-600  text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

const ThemedButton = ({ children, variant = "primary", onClick }) => {
  const isDark = useTheme();
  const getButtonClasses = () => {
    if (variant === "primary") {
      return isDark
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "bg-orange-500 hover:bg-blue-600 text-white";
    }
    if (variant === "secondary") {
      return isDark
        ? "bg-gray-700 hover:bg-gray-600 text-white"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800";
    }
  };
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${getButtonClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ThemeToggler = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`p-8 rounded-xl shadow-lgtransition-colors duration-300  ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className={`flex items-center justify-between mb-4 `}>
        <h2 className="text-3xl font-bold">Theme Toggler</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">
            {isDark ? "Dark mode" : "Light mode"}
          </span>
          <ThemeToggleButton />
        </div>
      </div>
      <div>
        <p>
          This section dmonstrates theme toggling using Context API and
          props.The theme state is shared across all child components without
          prop drilling.
        </p>
      </div>
    </section>
  );
};

export default ThemeToggler;
