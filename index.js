
const mainDiv = document.querySelector('.main-div')
const numberOfColor = document.querySelector('.number')
const generateButton = document.querySelector('.generate')
const stoppButton = document.querySelector('.stop')
const colorDiv = document.querySelector('.color-div')
// const copyButton = document.querySelector('.copy')

const generateHexaColor = () => {
    let string = '0123456789abcdef'
    
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        hexaColor += string[index]
    }
    return hexaColor

}
function main(){
for(let i=0; i<5; i++){
    const copyButton = document.createElement('button')
    copyButton.textContent = 'Copy'
    let bgColor = generateHexaColor();

    const title = document.createElement('h1')
    const divs = document.createElement('div')
    title.textContent = bgColor
    divs.style.background = bgColor
    divs.style.border = '0.1px solid #999'
    divs.appendChild(title)
    divs.appendChild(copyButton)
    colorDiv.appendChild(divs)
    

  const timing = setInterval(function(){
    bgColor = generateHexaColor();
    title.textContent =bgColor
    divs.style.background = bgColor

        },1000)

    stoppButton.addEventListener('click', ()=>{
        clearInterval(timing)
    })    


    copyButton.addEventListener("click", ()=>{
    let textArea = document.createElement("textarea")
    textArea.value = bgColor 
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand("Copy")
    textArea.remove()
})

divs.addEventListener('mouseover',()=>{
    clearInterval(timing)

})  

}
}
main()



function second(){
   
    colorDiv.innerHTML='';
    let colorNumber = numberOfColor.value
    for(let i=0; i<colorNumber; i++){
        
        const copyButton = document.createElement('button')
        copyButton.textContent = 'Copy'
        const title = document.createElement('h1')
        const divs = document.createElement('div')
        let bgColor = generateHexaColor();
        title.textContent = bgColor
        divs.style.border = '0.1px solid #999'
        divs.appendChild(title)
        divs.appendChild(copyButton)
        divs.style.background = bgColor
        colorDiv.appendChild(divs)
          const timer = setInterval(()=> {
                bgColor = generateHexaColor()
                title.textContent =bgColor
                divs.style.background = bgColor

        },1000) 
        stoppButton.addEventListener('click', ()=>{
        clearInterval(timer)
    })  
      

    copyButton.addEventListener("click", ()=>{
    let textArea = document.createElement("textarea")
    textArea.value = bgColor 
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand("Copy")
    textArea.remove()
})
} 

}

generateButton.addEventListener('click',second)

