const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        typeof num === 'number' ? resolve(num *2) : reject('Number must be provided')
    }, 2000)
})

const processData = async () => {
    let data = await getDataPromise(4)
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
