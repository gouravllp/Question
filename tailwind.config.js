/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        mainFont: "Poppins",
      },
      colors:{
        mainColor:'#333333',
        secondaryColor:'#317BDB',
        baseColor:'#FFFFFF',
        baseColor2:'#D9D9D9',
        hoverColor:'#DB9A31'
      }
    },
  },
  plugins: [flowbite.content()],
};
