import axios from "axios";

const req =  axios.create({
    baseURL:"http://mediacenterback-production.up.railway.app"
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
