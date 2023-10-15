import {commonAPI} from "./commonApi"
import {serverURL} from "./serverURL"

// uploading video 
export const uploadVideo = async (body)=>{
    // call post http request to http://localhost:4000/videos to add video in json server return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

// get all videos 
export const getAllVideos = async ()=>{
    // call get http request to http://localhost:4000/videos to get videos from json server return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a single video
export const getAVideo = async (id)=>{
    // call get http request to http://localhost:4000/videos to get a single video from json server 
    // return response to Videocard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a single video 
export const deleteASingleVideo = async (id)=>{
    // call delete http request to http://localhost:4000/videos to remove single video in json server 
    // return response to Videocard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// Add a category 
export const addCategory = async (body)=>{
    // call addcategory http request to http://localhost:4000/categories to add category in json server 
    // return response to Videocard component
    return await commonAPI("POST",`${serverURL}/categories`,body)
}

// store video watch history to json server
export const addHistory = async (videoHistory)=>{
    // call post http request to http://localhost:4000/history to add video history in json server return response to video card component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

// view video watch history to json server
export const viewHistory = async ()=>{
    // call get http request to http://localhost:4000/history to add video history in json server return response to  watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete video watch history from json server
export const deleteHistory = async (id)=>{
    // call delete http request to http://localhost:4000/history/id to add video history in json server return response to  watch history component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// store category to json server
export const saveCategory= async(body)=>{
        // call post http request to http://localhost:4000/category to add category in json server return response to category component
        return await commonAPI("POST",`${serverURL}/categories`,body)
} 

// store category to json server
export const getAllCategory= async()=>{
    // call get http request to http://localhost:4000/category to view category in json server return response to category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
} 

export const deleteCategory= async(id)=>{
    // call delete http request to http://localhost:4000/category/id to view category in json server return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
} 

export const updateCategory= async(id,body)=>{
    // call put http request to http://localhost:4000/category/id to update category in json server return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
} 