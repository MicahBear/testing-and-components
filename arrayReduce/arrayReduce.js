let reduce = (nums, fn, init)=>{
    let accum= init

    for(let i = 0; i< nums.length; i++){
        accum = fn(accum,nums[i])
    }
    console.log(accum)
}

module.exports = reduce