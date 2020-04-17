import '../css/style.css'
import text from './testmodule'
document.body.innerHTML= ("Aca es el index")
text()
console.log('Index recargado!')
if (module.hot){
    module.hot.accept('./testmodule.js', () => { 
        console.log('text recargado!')
        text()
    })
}