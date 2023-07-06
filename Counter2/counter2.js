let counter2 =  (init)=>{
    let currentCount = init
    return {
       increment: ()=> console.log(currentCount+=1),
        decrement: ()=> console.log(currentCount-=1),
        reset: ()=> console.log(currentCount = init)
    }
}

module.exports = counter2