const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzhmNWEzZGY0NWQ4NWU1OTcyNjFmODAzMDQyZGQ4YyIsIm5iZiI6MTcwNzM0NTg1OC43MDQsInN1YiI6IjY1YzQwN2MyMTVjNjM2MDE4NDRjZGRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TUs5yIWWi4mzfhG7_0KPdAveiZJxNKPpi8uUaI1bFgc"

const apiKey = "ac8f5a3df45d85e597261f803042dd8c"
const baseUrl = " https://api.themoviedb.org/3"

// GET ACCOUNT DETAILS
const getAccountDetails = async () => {
    console.log("Getting acc details. . .")
    try {
        const res = await fetch(`${baseUrl}/account/20974703`, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${accessToken}`
            }
        })
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("DONE!");
    }
}

// getAccountDetails()

// GET THE END POINT
const getEndPoint = async () =>{
    console.log("Getting acc details. . .");
    try {
        const endP = await fetch(`${baseUrl}/movie/latest`, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${accessToken}`
            }
        })
        const result = await endP.json()
        console.log(result);
        
    } catch (error) {
        console.log(error);
    } finally {
        console.log("DONE!");
        
    }
}
// getEndPoint()

// DISCOVER

const getDiscover = async () =>{
    console.log("Getting discover. . .");
    try {
          const dis = await fetch(`${baseUrl}/discover/movie?include`, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${accessToken}`
            }
        })
        const result = await dis.json()
        console.log(result);
    } catch (error) {
        console.log(error);
        
    } finally{
        console.log("DONE!");
        
    }
}
getDiscover()