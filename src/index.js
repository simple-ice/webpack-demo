import x from './x.js'
import jay from './assets/jay.png'
console.log(x);
console.log('hi');

const app = document.getElementById('app')
app.innerHTML = `
    <img src="${jay}"  alt="jay"/>
`