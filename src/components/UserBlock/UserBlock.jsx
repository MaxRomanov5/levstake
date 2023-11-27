import React from 'react';
import styled from './UserBlock.module.css'
import images from '../../assets/images';
const UserBlock = () => {
    return (
        <div className={styled.block}>
            <img width='30px' height='28px' src={images.metaLogo} alt="metamask Logo" />
            <div>
                <p className={styled.name}>Guest</p>
                <p className={styled.wallet}>BTC 1.468...</p>
            </div>
            <img src={images.tableArrowClose} alt="arrow" />
        </div>
    );
}

export default UserBlock;
