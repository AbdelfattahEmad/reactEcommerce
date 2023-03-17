import baseUrl from "../Api/BaseUrl"

const insertDataWithImg = async(Url , params) => {
    
    const config = {
        headers:{"Content-type":"multipart/form-data"}
    }


    const res = await baseUrl.post(Url, params , config)
    return res
}


//getdata
const getData = async(Url , params) => {
    const res = await baseUrl.get(Url,params)
    return res.data
}


//insert data
const insertData = async(Url , params) => {
    const res = await baseUrl.post(Url ,params)
    return res
}


export {insertDataWithImg ,insertData , getData}  ;