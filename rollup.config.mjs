import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config.js";
import postcss from "postcss";

export default {
  input: "src/main.js",
  output: {
    file: "build/bundle.js",
    format: "es"
  },
  plugins: [
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
      plugins: [tailwindcss(tailwindConfig)],
    })
  ]
};
