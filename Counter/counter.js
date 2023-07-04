let createCounter = (n)=>{
    return ()=>{
        return n++
    }
}
module.exports = createCounter