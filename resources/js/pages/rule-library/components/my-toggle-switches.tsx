import { useAppearance } from '@/hooks/use-appearance';
import React from 'react';
import styled from 'styled-components';

const MyToggleSwitches = () => {
    const { appearance, updateAppearance } = useAppearance();
    const isLight = appearance === 'light';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateAppearance(e.target.checked ? 'light' : 'dark');
    };

    return (
        <StyledWrapper>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isLight}
                    onChange={handleChange}
                    role="switch"
                    aria-checked={isLight}
                />
                <span className="slider">
                    <div className="moons-hole">
                        <div className="moon-hole" />
                        <div className="moon-hole" />
                        <div className="moon-hole" />
                    </div>
                    <div className="black-clouds">
                        <div className="black-cloud" />
                        <div className="black-cloud" />
                        <div className="black-cloud" />
                    </div>
                    <div className="clouds">
                        <div className="cloud" />
                        <div className="cloud" />
                        <div className="cloud" />
                        <div className="cloud" />
                        <div className="cloud" />
                        <div className="cloud" />
                        <div className="cloud" />
                    </div>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => (
                            <svg className="star" viewBox="0 0 20 20" key={i}>
                                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                            </svg>
                        ))}
                    </div>
                </span>
            </label>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    border: 1px solid rgb(58, 58, 58);
    border-radius: 22px;
  }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        border-radius: 20px;
        transition: 0.4s;
        overflow: hidden;
        z-index: 2;
        will-change: transform;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 22px;
        width: 22px;
        left: 2px;
        bottom: 3px;
        background-color: white;
        transition: 1s;
        border-radius: 50%;
    }

    .moons-hole {
        position: absolute;
        opacity: 1;
        transition: 1s;
    }

    .moon-hole {
        position: absolute;
        border-radius: 50%;
        background-color: rgb(85, 85, 85);
    }

    .moon-hole:nth-child(1) {
        height: 3px;
        width: 3px;
        top: 23px;
        left: 17px;
    }

    .moon-hole:nth-child(2) {
        height: 7px;
        width: 7px;
        top: 13px;
        left: 4px;
    }

    .moon-hole:nth-child(3) {
        height: 1px;
        width: 1px;
        top: 9px;
        left: 18px;
    }

    input:checked + .slider {
        background-color: #62cff0;
    }

    input:checked + .slider:before {
        transform: translateX(30px);
        background-color: orange;
    }

    input:checked + .slider .moons-hole {
        transform: translateX(52px);
        opacity: 0;
    }

    .stars {
        position: absolute;
        right: 3px;
        top: 0;
        bottom: 0;
        transition: 1s;
        transform: translateY(0px);
        will-change: transform;
    }

    .star {
        position: absolute;
        fill: white;
        animation: star-twinkle 2s infinite;
        opacity: 1;
    }

    .star:nth-child(1) {
        top: 2px;
        right: 26px;
        width: 17px;
        animation-delay: 0.3s;
    }

    .star:nth-child(2) {
        top: 15px;
        right: 6px;
        width: 12px;
    }

    .star:nth-child(3) {
        top: 2px;
        right: 12px;
        width: 7px;
        animation-delay: 0.6s;
    }

    .star:nth-child(4) {
        top: 23px;
        right: 25px;
        width: 9px;
        animation-delay: 0.9s;
    }

    .star:nth-child(5) {
        top: 2px;
        right: 50px;
        width: 8px;
        animation-delay: 1.2s;
    }

    input:checked + .slider .stars {
        transform: translateY(-32px);
        opacity: 0;
    }

    @keyframes star-twinkle {
        0% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.2);
        }
        80% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }

    .clouds,
    .black-clouds {
        position: absolute;
        left: 6px;
        top: 0;
        bottom: 0;
        width: 20px;
        transition: 1s;
        transform: translateX(-50px);
        will-change: transform;
    }

    .black-clouds {
        opacity: 0;
        z-index: 0;
    }

    .black-cloud {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #555;
        opacity: 60%;
        border-radius: 50%;
        animation: cloud-move 6s infinite;
        animation-delay: 1s;
    }

    .black-cloud:nth-child(1) {
        top: 1px;
        right: 3px;
    }

    .black-cloud:nth-child(2) {
        top: 15px;
        left: 9px;
    }

    .black-cloud:nth-child(3) {
        top: 20px;
        left: 27px;
    }

    input:checked + .slider .black-clouds {
        transform: translateX(32px);
        opacity: 1;
    }

    .cloud {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        z-index: 1;
        animation: cloud-move 6s infinite;
    }

    .cloud:nth-child(1) {
        top: 0;
        height: 21px;
        width: 21px;
        right: 14px;
    }

    .cloud:nth-child(2) {
        height: 25px;
        width: 25px;
        top: 14px;
        right: 6px;
    }

    .cloud:nth-child(3) {
        height: 23px;
        width: 23px;
        top: 28px;
        left: 4px;
    }

    .cloud:nth-child(4) {
        top: 26px;
        left: 20px;
    }

    .cloud:nth-child(5) {
        top: 30px;
        left: 30px;
    }

    .cloud:nth-child(6) {
        top: 27px;
        left: 46px;
    }

    .cloud:nth-child(7) {
        top: 31px;
        left: 58px;
    }

    input:checked + .slider .clouds {
        transform: translateX(32px);
        opacity: 1;
    }

    @keyframes cloud-move {
        0% {
            transform: translateX(-32px);
        }
        40% {
            transform: translateX(-36px);
        }
        80% {
            transform: translateX(-28px);
        }
        100% {
            transform: translateX(-32px);
        }
    }
`;

export default MyToggleSwitches;
