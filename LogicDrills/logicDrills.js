const updateLight = (current)=>{
    if(current == 'green'){
        console.log('yellow')
    }else if(current == 'yellow'){
        console.log('red')
    }else{
        console.log('green')
    }
}

module.exports = updateLight   