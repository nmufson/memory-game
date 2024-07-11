import React, { useEffect, useState } from 'react';
import './Header.module.css';
import styles from './Header.module.css';

export const HeaderComponent = ({ score, bestScore }) => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <div>
            <h1>Pokemon Memory Game</h1>
          </div>
          <div>
            <p>
              Earn points by clicking on an image. Points reset if you click on
              the same image twice!
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>Score: {score || 0}</p>
          </div>
          <div>
            <p>Best Score: {bestScore || 0}</p>
          </div>
        </div>
      </header>
    </>
  );
};
