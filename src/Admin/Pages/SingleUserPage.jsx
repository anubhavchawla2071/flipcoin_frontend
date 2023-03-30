import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserInfoItem from '../Components/UserInfoItem';
import UserCartItem from '../Components/UserCartItem';
import UserWishlistItem from '../Components/UserWishlistItem';
import UserReviewItem from '../Components/UserReviewItem';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

const SingleUserPage = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState([]);
    const [userCart, setUserCart] = useState([]);
    const [userWishlist, setUserWishlist] = useState([]);
    const [userReview, setUserReview] = useState([]);
    let authToken = localStorage.getItem("Authorization")

    useEffect(() => {
        commonGetRequest(process.env.REACT_APP_ADMIN_GET_USER, id, setUserData);
        commonGetRequest(process.env.REACT_APP_ADMIN_GET_CART, id, setUserCart);
        commonGetRequest(process.env.REACT_APP_ADMIN_GET_WISHLIST, id, setUserWishlist);
        commonGetRequest(process.env.REACT_APP_ADMIN_GET_REVIEW, id, setUserReview);
    }, [])
    console.log({ userData, userCart, userReview, userWishlist }, 12);
    const commonGetRequest = async (url, userId, setData) => {
        try {
            const { data } = await axios.get(`${url}/${userId}`, {
                headers: {
                    'Authorization': authToken
                }
            });
            setData(data)
        } catch (error) {
            console.log(error);

        }

    }
    return (
        <>
            <Container>
                <UserInfoItem userData={userData} />
                <UserCartItem userCart={userCart} />
                {/* <UserWishlistItem userWishlist={userWishlist} /> */}
                <UserReviewItem userReview={userReview} authToken={authToken} />
            </Container >
        </>
    )
}

export default SingleUserPage