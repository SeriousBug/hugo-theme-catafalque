/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");
function getChosenTheme() {
  const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
  return chosenTheme;
}

function applyTheme() {
  const theme = getChosenTheme();
  if (theme === 'dark') {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (theme === 'light') {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Switch the theme.
function switchTheme(e) {
  if (getChosenTheme() === 'dark') {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  applyTheme();
}

// Event listener
if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => e.matches && applyTheme());
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => e.matches && applyTheme());

  applyTheme();
}
