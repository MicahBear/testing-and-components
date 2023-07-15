const updateLight = (current)=>{
    if(current == 'green'){
        return 'yellow'
    }else if(current == 'yellow'){
        return 'red'
    }else{
        return 'green'
    }
}

module.exports = updateLight   