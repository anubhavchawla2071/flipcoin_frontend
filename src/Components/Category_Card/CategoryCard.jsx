import React from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({ data }) => {
    return (
        <Link to={`product/type/${data.name.toLowerCase()}`}>
            <div className={styles.mainCard}>
                <img src={data.img} alt="" className={styles.mainImg} loading='lazy' />
                <span className={styles.imgTitle}>{data.name}, Price:₹{data.price}</span>
            </div>
            <button  style={{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#1976D2",color:"white",textTransform:"bold",cursor:"pointer"}}>Buy Now</button>
        </Link>
    )
}

export default CategoryCard