import axios from "axios";


export const getCalls = async (...args) => {

}

export const postCalls = async (...args) => {
    console.log(args)
    const [url] = args
    const postData = args[1]
    let response;
    try {
        response = await axios.post(url, postData, {withCredentials: true});
        return response;
    } catch (err) {
        console.log("Error: " + err.message)
    }
}