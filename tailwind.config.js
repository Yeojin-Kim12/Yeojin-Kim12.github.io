/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard-Regular"],
        wavvePADO: ["WavvePADO-Regular"],
        bagelFatOne: ["BagelFatOne-Regular"],
      },
      colors: {
        primary: "#5b6d92",
        text: "#1b1b1b",
        header: "#414A62",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
