const getTimezoneFromIpinfo = () => {
    return fetch('https://ipinfo.io/json?token=336a76d8d6ab8e', {}).then( (response) => {
        if(response.status === 200) {
            //promise
             return response.json()
        }else {
            throw new Error('Unable to fetch location')
        }
        }).then((data)=>{
                return  data
        })
}