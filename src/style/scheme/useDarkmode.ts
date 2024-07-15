const data = {
  value: "",
};

const setClassList = (classs: "dark" | "light" | string, local = false) => {
  data.value = classs;
  if (local) localStorage.setItem("color-scheme", classs);
  document.documentElement.classList.add(classs);
  classs === "light"
    ? document.documentElement.classList.remove("dark")
    : document.documentElement.classList.remove("light");
};

(() => {
  const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
  themeMedia.onchange = (e) => {
    const scheme = localStorage.getItem("color-scheme");
    if (scheme === "auto") {
      if (e.matches) {
        setClassList("light");
      } else {
        setClassList("dark");
      }
    }
  };
  const scheme = localStorage.getItem("color-scheme");

  if (scheme && scheme !== "auto") {
    setClassList(scheme);
  } else {
    localStorage.setItem("color-scheme", "auto");
    if (themeMedia.matches) {
      setClassList("light");
    } else {
      setClassList("dark");
    }
  }
})();

export const useDarkmode = () => ({
  get value(): string {
    return data.value;
  },
  enable: () => {
    setClassList("dark", true);
    data.value = "dark";
  },
  disable: () => {
    setClassList("light", true);
    data.value = "light";
  },
  toggle: () => {
    setClassList(data.value === "light" ? "dark" : "light", true);
  },
});
