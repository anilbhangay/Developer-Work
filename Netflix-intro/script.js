  const stick1 = document.getElementsByClassName("color")[0]
  const stick2 = document.getElementsByClassName("color2")[0]
  const stick3 = document.getElementsByClassName("brush3")[0]

// Make reverse animations trigger

setTimeout(() => {
    stick2.style.animation = 'movedown 0.5s ease forwards'
}, 3000);

setTimeout(() => {
     stick3.style.animation = 'movedown 0.5s ease forwards'
}, 3500);

setTimeout(() => {
    stick1.style.animation = 'movedown 0.5s ease forwards'
}, 4000);