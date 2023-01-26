import React from 'react';
import styles from "./detail.module.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Overview({ introduce, title, img, star }) {
    return (
        <div className={styles.app__container}>
            <div className={styles.movie__container}>
                <img src={IMG_BASE_URL + img} alt="영화 포스터" />
                <div className={styles.movie__info}>
                    <h4>{title}</h4>
                    <span>{star}</span>
                </div>
            </div>
            <div className={styles.movie__overview}>
                <h2>Introduce</h2>
                <hr />
                <p>
                    {introduce}
                </p>
            </div>
        </div>
    );
}

export default Overview;