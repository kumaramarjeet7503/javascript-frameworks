In order to use tailwind.css with vite

1. npm install -D tailwindcss@3 postcss autoprefixer
2. npx tailwindcss init -p
3.``` /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}```

4. In index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

