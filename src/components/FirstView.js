import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { HiChevronDoubleDown } from 'react-icons/hi'
import Confetti from 'confetti-react'
import Timer from 'react-compound-timer'

import FrameImage from '../assets/imgs/frame.png'
const AniDown = keyframes`
    from{
        transform:translateY(-10px);
        opacity:.1;
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
`
const StyledWrapper = styled.section`
  position: relative;
  width:100vw;
  height:100vh;
  background-image: url('https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w12.png?x-oss-process=image/resize,w_2500');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .box{
      margin-top: 1.2rem;
      color: #000;
      padding:.5rem;
      background-color: #fff;
      border-radius: .4rem;
      box-shadow: 0 2px 8px #ccc;
      background-image: url(${FrameImage});
      background-repeat: no-repeat;
      background-size: 90%;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .2rem;
      filter: opacity(0.8);
      width: 3.8rem;
      height: 3.8rem;
      /* .married{
          font-size:.22rem ;
          color:#666;
      } */
      .title{
          font-family: 'SP-F';
          font-weight: bold;
          display: flex;
          gap:.1rem;
          font-size: .48rem;
          padding:.2rem 0;
      }
      .date{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .12rem;
          .time{
              font-size: .16rem;
              color:#999;
          }
          .countdown{
              font-weight: 800;
            font-size: .2rem;
              color:#666;
          }
      }
  }
 .down{
    position: absolute;
    width:.44rem;
    left:50%;
    bottom:.1rem;
    margin-left: -0.22rem;
    animation-direction: alternate-reverse;
    animation:${AniDown} 1s infinite;
 }
`;
const now = new Date().getTime();
const deadline = new Date(2021, 8, 15, 0, 0, 0).getTime()
const initCountNum = deadline - now;
// const initCountNum = 3000;
export default function FirstView() {
    const [direction, setDirection] = useState(initCountNum > 0 ? "backward" : "forward")
    return (
        <StyledWrapper>
            <Confetti className="mask" recycle={true} numberOfPieces={99} wind={0.01} gravity={0.1} opacity={.8} tweenDuration={8000} />
            <div className="box">
                {/* <div className="married">我们结婚啦</div> */}
                <div className="title">
                    💕我们结婚啦💕
                </div>
                <div className="date">
                    <div className="countdown">
                        <Timer
                            checkpoints={[
                                {
                                    time: 0,
                                    callback: () => {
                                        setDirection('forward')
                                    },
                                }]}
                            initialTime={Math.abs(initCountNum)}
                            direction={direction}
                            formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
                        >
                            <span className="num day"><Timer.Days />天<Timer.Hours />时<Timer.Minutes />分<Timer.Seconds />秒</span>
                        </Timer>
                    </div>
                    <div className="time">2021.09.15</div>
                </div>

            </div>
            <HiChevronDoubleDown className="down" />
            {/* <img src={WelcomeImage} /> */}
        </StyledWrapper>
    )
}
