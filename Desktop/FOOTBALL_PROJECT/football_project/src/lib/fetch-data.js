export const fetchFixtures = async () =>{
    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4126daf499mshe9a838b1779124cp19762ejsnc21322f90705',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}