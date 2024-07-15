import { useDarkmode } from "@style/core";
import { request, type Response } from "@request";

window.onload = function () {
  const darkMode = useDarkmode();
  const Button = document.createElement("div");
  Button.classList.add(
    "rounded-full",
    "p-2",
    "cursor-pointer",
    "shadow-md",
    "shadow-[var(--primary-color)]",
    "absolute",
    "top-2",
    "right-2"
  );
  Button.innerHTML = darkMode.value === "light" ? "☀️" : "🔮";

  Button.onclick = function () {
    darkMode.toggle();
    Button.innerHTML = darkMode.value === "light" ? "☀️" : "🔮";
  };

  const Axios = document.createElement("div");
  Axios.classList.add(
    "rounded-lg",
    "border",
    "border-solid",
    "border-[var(--primary-color)]",
    "p-2",
    "py-3",
    "cursor-pointer",
    "relative",
    "shadow-md",
    "shadow-[var(--primary-color)]",
    "hover:bg-[var(--primary-color)]",
    "hover:text-white"
  );
  Axios.innerHTML = "Axios";

  const getYiyan = (): Response<{
    author: string;
  }> => {
    return request.get("/oioweb/api/common/yiyan");
  };

  Axios.onclick = function () {
    getYiyan().then((resp) => console.log(resp.result.author));
  };

  const root = document.getElementById("root");
  root?.classList.add("flex", "justify-center", "items-center", "rounded-2");
  root?.appendChild(Button);
  root?.appendChild(Axios);
};
