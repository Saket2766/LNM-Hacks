import {client} from '../../lib/client'

export default async (req,res) =>{
    const {useAddress} =req.body;

    const userDoc = {
        _type: 'users',
        _id :'${userAddress}-user',
        name: 'Unnamed',
        walletAddress: userAddress,   
    }

    
}