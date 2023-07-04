let createCounter = (n)=>{
    return ()=>{
        console.log(n++)
    }
}
module.exports = createCounter