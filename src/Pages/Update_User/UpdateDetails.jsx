import {Container} from '@mui/material'
import React, { useContext, useEffect, useState} from 'react'
import {ContextFunction} from '../../Context/Context'
import { icon } from "./TransactionCards/data";
import Card from './TransactionCards/Card';


const UpdateDetails = () => {
    const {role,setRole} = useContext(ContextFunction)
    const [viewHistory, setViewHistory] = useState(false);
    const [transactionViewed, setTransactionViewed] = useState(false);

    useEffect(()=>{
        if(role===""){
            setRole(localStorage.getItem("role"))
        }
    },[role,setRole])
    const transactionCards = (val) => {
        return (
          <Card key={val.key} value={val.value}/>
        );
      };
    return (
        <>
            <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: 10,marginTop:15 }}>
                {role!==""? role==="Buyer"?
                <div>
                    Hello Buyer
                    <div>
                        Your Total Rewards are : 
                    </div>
                    <button onClick={()=>{
                        setViewHistory(!viewHistory)
                        setTransactionViewed(!transactionViewed)
                        }}>{transactionViewed?"Close History":"View Transaction History"}</button>
                    {viewHistory?
                        <div>
                            Reward History- 
                            {icon.map(transactionCards)}
                        </div>
                        :null
                    }
                </div>
                :
                <div>Hello,Seller</div>
                :
                <div>Undefinded</div>
                }
            </Container >
        </>
    )
}

export default UpdateDetails
