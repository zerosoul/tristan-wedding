import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Timer from 'react-compound-timer'
import Confetti from 'confetti-react';
import Title from './SectionTitle'

const AniBreath = keyframes`
  from{
    opacity:0.4;
    box-shadow: none;
  }
  to{
    opacity:1;
    box-shadow:  20px 20px 60px #079155,
               -20px -20px 60px #079e5d;
  }
`;
const StyledWrapper = styled.section`
  width:100%;
  background-color: #eee;
  padding:.3rem 0 1rem 0;
  .wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .countdown{
      width: 100%;
      max-width: 1200px;
      /* border: 2px solid #ccc; */
      background-color: rgba(2,2,2,.5);
      /* border-radius: 10px; */
      padding:.3rem 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: .24rem;
      .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.35rem;
        width: 1.2rem;
        height: 1.2rem;
        border: 1px solid #999;
        border-radius: 50%;
        .num{
          color: #fff;
          font-weight: 800;
          font-size: 1rem;
          margin-bottom: .1rem;
        }
        .txt{
          color: #eee;
          font-size: .2rem;
        }
      }
      @media screen and (max-width: 768px) {
          /* flex-direction: column; */
          .box {
            width: .6rem;
            height: .6rem;
            .num{
            font-size: .4rem;
            .txt{
              font-size: .1rem ;
            }
          }
        }
      }
    }
  
    .signup{
      opacity: .6;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate3d(-50%,-50%,0);
      font-size: .3rem;
      padding:.1rem .3rem;
      /* background-color: rgba(0, 202, 114, 1); */
      background: linear-gradient(145deg, #09b66b, #07995a);
      animation: ${AniBreath} 1s infinite alternate;
      color:#fff;
      border-radius: 25px;
      border:none;
      text-decoration: none;
    }
    .cele{
      color: #fff;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top:0;
        left: 0;
      width: 100%;
      height: 100%;
      .flowers{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        overflow: hidden;
      }
      .txt{
        white-space: nowrap;
        font-family: "SP-F";
        position: absolute;
        top:50%;
        left:50%;
        transform: translate3d(-50%,-50%,0);
        font-size: .8rem;
        padding:.1rem .3rem;
      }
      /* background-color: rgba(0, 202, 114, 1); */
      background: linear-gradient(145deg, #09b66b, #07995a);
    }
    
  }
`;
const now = new Date().getTime();
const deadline = new Date(2021, 8, 15, 0, 0, 0).getTime()
const initCountNum = deadline - now;
// const initCountNum = 5 * 1000;
export default function Welcome() {
  const [stop, setStop] = useState(false)
  return (
    <StyledWrapper>
      <Title title="欢迎参加" />
      <div className="wrapper">
        <div className="countdown">
          <Timer
            checkpoints={[
              {
                time: 0,
                callback: () => {
                  setStop(true)
                },
              }]}
            initialTime={initCountNum}
            direction="backward"
            formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
          >
            <div className="box">
              <span className="num day"><Timer.Days /></span>
              <span className="txt">天</span>
            </div>
            <div className="box">
              <span className="num hour"><Timer.Hours /></span>
              <span className="txt">时</span>
            </div>
            <div className="box">
              <span className="num min"><Timer.Minutes /></span>
              <span className="txt">分</span>
            </div>
            <div className="box">
              <span className="num second"><Timer.Seconds /></span>
              <span className="txt">秒</span>
            </div>
          </Timer>
        </div>
        {stop ? <div className="cele">
          <div className="flowers">
            <Confetti gravity={0.2} numberOfPieces={150} />
          </div>
          <div className="txt">
            我们结婚啦
          </div>
        </div> : <a href="https://www.wjx.top/vj/QbEknqo.aspx" target="_blank" className="signup">报名</a>}

      </div>
    </StyledWrapper>
  )
}
