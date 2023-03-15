/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'nhala' : "URL(/src/img/nahala.jpg)",
        'kroz' : "URL(/src/img/kroz.jpg)",
        'dove' : "URL(/src/img/dove.jpg)",
        'layka' : "URL(/src/img/trini.jpg)",
        'gasef' : "URL(/src/img/gasef.png)",
        'souken' : "URL(/src/img/souken.png)",
        'liviana' :"URL(/src/svg/cloth-fabric-svgrepo-com.svg)", 
        'cuero' : "URL(https://www.eliteguias.com/img/juegos/dark-souls-iii/armadura-de-cuero-negra.jpg)",
        'cuerot' : "URL(https://www.eliteguias.com/img/juegos/dark-souls-iii/armadura-de-cuero-rigido.jpg)",
        'pieles' : "URL(https://www.eliteguias.com/img/juegos/dark-souls-iii/armadura-de-caballero-caido.jpg)",
        'mallaC' : "URL(https://www.eliteguias.com/img/juegos/dark-souls-iii/armadura-de-desertor.jpg)",
        'escamas' : "URL(https://i.pinimg.com/736x/f7/3f/1c/f73f1cf1542e229d9f57ecdca3b688be.jpg)",
        'coraza': "URL()",
        'armaduraM' : "URL()",
        'cotaG' : "URL()",
        'armaduraB' : "URL()",
        'armaduraP' : "URL()",
        'escudo' : "URL()",
        'escudoL' : "URL()"
      },
      fontFamily: {
        EB : ['EB Garamond', 'serif']
      }
    },
  },
  plugins: [],
}
