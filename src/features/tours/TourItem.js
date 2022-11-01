import React, { useState } from 'react';
import styles from './TourItem.module.css';
import { Grid } from '@mui/material';

function TourItem(props) {
    const { tour, addToCart, deleteFromCart } = props
    const image = require("../../assets/images/" + tour.image);
    const [isAdded, setIsAdded] = useState(false);

    return (
        <Grid item xs={12} md={4}>
            <section className={styles.tourItem}>
                <div className={styles.imgWrapper}>
                    <img src={image} alt={tour.alttext} />
                </div>
                {isAdded ? <span className={styles.inCartBadge}>In Cart</span> : null}
                <div className={styles.tourInfo}>
                    <h3>{tour.tourname}</h3>
                    ${tour.price}
                    <p>{tour.description}</p>
                </div>
                {!isAdded ?
                    <button onClick={() => {addToCart(tour); setIsAdded(!isAdded)}}>Add To Cart</button> :
                    <button className={styles.delete} onClick={() => {deleteFromCart(tour); setIsAdded(!isAdded)}}>Delete From Cart</button>
                }
            </section>
        </Grid>
    );
}

export default TourItem;
