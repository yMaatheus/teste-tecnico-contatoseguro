export const ThemeToogle = () => {
  const toggleTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
  };

  return <input type="checkbox" className="toggle" onClick={toggleTheme} />;
};
