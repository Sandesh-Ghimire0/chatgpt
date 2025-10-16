import jwt from 'jsonwebtoken'
import axios from 'axios'

export const authUser = async (req,res, next) => {
    try {
        const token = req.cookies?.token
        
        if(!token){
            return res.status(401).json({message:"Unauthorized Access"})
        }
    
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if(!decoded){
            return res.status(401).json({message:"Unauthorized Access"})
        }
        
        // making request to user service to fetch the user data
        const response = await axios.get(`http://localhost:4000/api/v1/auth/users/${decoded._id}`)
        if(response.data){
            req.user = response.data
            next()
        }else {
            return res.status(401).json({message:"Unauthorized access"})
        }
    } catch (error) {
        console.log("Failed to authenticate the user ", error)
        return res.status(401).json({message:"Unauthorized access"})

    }

}