import * as types from "./actionTypes"
import axios from "axios"

export const getJobs =(params)=>(dispatch)=>{
    dispatch({type :types.GET_JOBS_REQUEST})
    return axios.get(`https://foundit-backend-qu3p.onrender.com/job`,params)
    .then((res)=>{
        dispatch({type :types.GET_JOBS_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type: types.GET_JOBS_FAILURE, payload:err})
    })
}

export const getJobsDescription =(id)=>(dispatch)=>{
    dispatch({type :types.GET_JOBS_REQUEST})
    return axios.get(`https://foundit-backend-qu3p.onrender.com/job/${id}`)
    .then((res)=>{
        dispatch({type :types.GET_JOBS_SUCCESS, payload:res.data})
        console.log("check",res.data)
    })
    .catch((err)=>{
        dispatch({type: types.GET_JOBS_FAILURE, payload:err})
    })
}