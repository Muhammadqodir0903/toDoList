var elForm = document.querySelector('.form')
var elList = document.querySelector('.list')
var data = []
elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    var val = e.target.meva.value
    var joy = e.target.joy.value

if(e.target.joy.value == 'oxiri'){
    data.push(e.target.meva.value)
    console.log(joy);
    forData()
    e.target.meva.value = ''
}else if(e.target.joy.value == 'boshi'){
    data.unshift(e.target.meva.value)
    console.log(joy);
    forData()
    e.target.meva.value = '' 
}else{
    null
}
})

function forData(){
    elList.innerHTML = ''
    for(var i = 0; i < data.length; i ++){
        var newLi = document.createElement('li')
        newLi.textContent = data[i]
        elList.appendChild(newLi)
    }
}