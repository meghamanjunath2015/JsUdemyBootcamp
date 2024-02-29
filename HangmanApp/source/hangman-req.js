const getRandomWordsWithAsyncAwait = async (wordCount) => {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const targetUrl = `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`;
    const urlToFetch = proxyUrl + encodeURIComponent(targetUrl);
    const response = await fetch(urlToFetch)
    
    console.log(response.status)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to fetch puzzle, are you crazy')
    }
}

export { getRandomWordsWithAsyncAwait as default }