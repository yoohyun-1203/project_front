import React from 'react';
import New01 from './images/newProduct01.svg'
import New02 from './images/newProduct02.svg'
import New03 from './images/newProduct03.svg'
import New04 from './images/newProduct04.svg'
import Star from './images/star.svg'
import S from './style';
import { useNavigate } from 'react-router-dom';
const VegeNew = () => {
    const navigate = useNavigate();
    return (
        <S.TagItemWrapper>
        <S.ItemContainer onClick={()=>{navigate("/details")}}>
            <img src={New01} alt='체리'></img>
            <S.ItemTitle>체리</S.ItemTitle>
            <S.ItemExplain>미국산 체리 500g</S.ItemExplain>
            <S.ItemPrice>9,700원</S.ItemPrice>
            <S.ItemStar><img src={Star} alt='star'></img>4.9<S.Review>(450)</S.Review></S.ItemStar>
        </S.ItemContainer>
        <S.ItemContainer onClick={()=>{navigate("/details")}}>
            <img src={New02} alt='오렌지'></img>
            <S.ItemTitle>오렌지</S.ItemTitle>
            <S.ItemExplain>유기농 오렌지 4개입</S.ItemExplain>
            <S.ItemPrice>10,900원</S.ItemPrice>
            <S.ItemStar><img src={Star} alt='star'></img>4.9<S.Review>(467)</S.Review></S.ItemStar>
        </S.ItemContainer>
        <S.ItemContainer onClick={()=>{navigate("/details")}}>
            <img src={New03} alt='레몬'></img>
            <S.ItemTitle>레몬</S.ItemTitle>
            <S.ItemExplain>레몬 4개입</S.ItemExplain>
            <S.ItemPrice>5,000원</S.ItemPrice>
            <S.ItemStar><img src={Star} alt='star'></img>4.8<S.Review>(500)</S.Review></S.ItemStar>
        </S.ItemContainer>
        <S.ItemContainer onClick={()=>{navigate("/details")}}>
            <img src={New04} alt='당근'></img>
            <S.ItemTitle>당근</S.ItemTitle>
            <S.ItemExplain>유기농 당근 4개입</S.ItemExplain>
            <S.ItemPrice>5,990원</S.ItemPrice>
            <S.ItemStar><img src={Star} alt='star'></img>4.9<S.Review>(788)</S.Review></S.ItemStar>
        </S.ItemContainer>
    
        
    </S.TagItemWrapper>
    );
};

export default VegeNew;
