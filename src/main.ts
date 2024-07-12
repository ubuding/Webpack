// import "style";
import { useDarkmode } from "style";

const Button = document.createElement("div");
Button.classList.add(
  "rounded-lg",
  "border",
  "border-solid",
  "border-sky-400",
  "p-2",
  "py-3",
  "cursor-pointer",
  "relative",
  "shadow-md",
  "shadow-sky-500/50",
  "hover:bg-sky-400",
  "hover:text-white"
);
Button.innerHTML = `
Change Theme
`;

Button.onclick = function () {
  const darkMode = useDarkmode();
  darkMode.toggle();
};

const root = document.getElementById("root");
root?.classList.add("flex", "justify-center", "items-center", "rounded-2");
root?.appendChild(Button);
