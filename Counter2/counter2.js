let counter2 =  (init)=>{
    let currentCount = init
    return {
        increment: ()=> currentCount+=1,
        decrement: ()=> currentCount-=1,
        reset: ()=> currentCount = init
    }
}

module.exports = counter2