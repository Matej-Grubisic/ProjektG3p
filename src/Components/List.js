import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Context } from "../Context/Context";

function Lista() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { promjena } = useContext(Context);
  return (
    <div
      className="bookList"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {promjena.map((promjen) => {
          return (
            <li key={promjen.id} style={{ background: theme.ui }}>
              {promjen.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Lista;
