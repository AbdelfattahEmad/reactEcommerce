import baseUrl from "../Api/BaseUrl"

const useInsertDataWithImg = async(Url , params) => {
    
    const config = {
        headers:{"Content-type":"multipart/form-data"}
    }

    const res = await baseUrl.post(Url, params , config)
    return res
}


const useInsertData = async(Url , params) => {
    const res = await baseUrl.post(Url ,params)
    return res
}


export {useInsertDataWithImg ,useInsertData}  ;