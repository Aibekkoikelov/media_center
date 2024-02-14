import axios from "axios";

const req =  axios.create({
    baseURL:"https://mediacenterback-production.up.railway.app/",
    // baseURL:"http://localhost:3001"
})

export default req


export const fetchingData = async ({name,number})=> {
    const res =  req.post("/contact", {
            name,
            number
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    console.log(res)
}
