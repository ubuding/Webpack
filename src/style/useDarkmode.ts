(() => {
  const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (themeMedia.matches) {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.add("dark");
  }
})();

// themeMedia.addListener((e) => {
//   if (e.matches) {
//     console.log("light");
//   } else {
//     console.log("dark");
//   }
// });

export const useDarkmode = () => {
  const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
  let value = "";
  if (themeMedia.matches) {
    value = "light";
  } else {
    value = "dark";
  }

  return {
    value,
    enable: () => {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    },
    disable: () => {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    },
    toggle: () => {
      document.documentElement.classList.toggle("dark");
      document.documentElement.classList.toggle("light");
    },
  };
};
