import { useDarkmode } from "@style/core";
import { request, type Response } from "@request";

window.onload = function () {
  const darkMode = useDarkmode();
  const Theme = document.createElement("div");
  Theme.classList.add(
    "rounded-full",
    "p-2",
    "cursor-pointer",
    "shadow-md",
    "shadow-primary",
    "absolute",
    "top-2",
    "right-2",
  );
  Theme.innerHTML = darkMode.value === "light" ? "☀️" : "🔮";

  Theme.onclick = function () {
    darkMode.toggle();
    Theme.innerHTML = darkMode.value === "light" ? "☀️" : "🔮";
  };

  const Axios = document.createElement("div");
  Axios.classList.add(
    "rounded-full",
    "p-2",
    "cursor-pointer",
    "shadow-md",
    "shadow-primary",
    "absolute",
    "top-2",
    "right-14",
  );
  Axios.innerHTML = "💌";

  const getYiyan = (): Response<{
    author: string;
  }> => {
    return request.get("/oioweb/api/common/yiyan");
  };

  Axios.onclick = function () {
    getYiyan().then((resp) => console.log(resp.result.author));
  };

  const Introduction = document.createElement("div");
  Introduction.classList.add(
    "w-[580px]",
    "h-[50px]",
    "mx-auto",
    "relative",
    "bg-white",
    "text-black",
    "rounded-full",
    "flex",
    "justify-center",
    "items-center",
    "shadow-md",
    "shadow-primary",
    "cursor-pointer",
    "hover:bg-primary",
    "hover:text-white",
  );
  Introduction.innerHTML =
    "A dependency-free front-end framework based on webpack";

  Introduction.onclick = function () {
    window.open("https://github.com/ubuding/Webpack", "_blank");
  };

  const root = document.getElementById("root");
  root?.classList.add("flex", "justify-center", "items-center", "rounded-2");
  root?.appendChild(Theme);
  root?.appendChild(Axios);
  root?.appendChild(Introduction);
};
