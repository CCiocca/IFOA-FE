

export const FetchData = async (url) => {
    try {
        console.log(url)
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            return await data
            
        } else {
            alert('No results')
        }
    }
    catch (err) {
        console.log(err)
    }
}