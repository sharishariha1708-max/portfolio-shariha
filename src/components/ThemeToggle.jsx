import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus:outline-none transition-all duration-300 transform hover:scale-110 flex items-center justify-center
        ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-200 text-yellow-500' : 'bg-gray-800 hover:bg-gray-700 text-indigo-300'}`}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
