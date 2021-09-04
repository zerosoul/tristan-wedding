import React from 'react';
import Confetti from 'confetti-react';
import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md'
const AniBounceIn = keyframes`
 from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;
const StyledPopup = styled.section`
z-index: 99999;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:rgba(2,2,2,.8);
  .tip{
      box-sizing: border-box;
      width: 5rem;
      z-index: 9;
      position: absolute;
      top:1rem;
      left: 50%;
      margin-left: -2.5rem ;
      padding:.4rem .3rem;
      font-size: .3rem;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .2rem;
      animation: ${AniBounceIn} 1s both;
      .title{
          font-size: .3rem;
          font-weight: 800;
      }
      .content{
          color: #333;
          font-size: .2rem;
          padding:.3rem 0;
          word-break: break-all;
          p{
              margin-bottom: .14rem;
              line-height: 1.5;
          }
          strong{
              font-weight: 800;
              padding:0 .05rem;
              color: #000;
          }
      }
      .ps{
          font-size: .12rem;
          color: #ccc;
          align-self: flex-start;
      }
      .close{
          cursor: pointer;
          position: absolute;
          left:50%;
          bottom:-.8rem;
          transform: translate3d(-50%,0,0);
          width:.3rem;
          height: .3rem;
          border-radius: 50%;
          border:1px solid #eee;
          padding:.05rem;
      }
  }
`;
export default function Celebrate({ closeDan, dan = "超长回忆蛋" }) {
    return (
        <StyledPopup>
            <Confetti gravity={0.2} numberOfPieces={300} />
            <div className="tip">
                <h3 className="title">恭喜🎉🎉🎉</h3>
                <div className="content">
                    <p>太棒了！！！</p>
                    <p>找到了一个彩蛋：<strong>{dan}</strong>，截图保存本界面，集齐<strong>两个彩蛋</strong>，即可找新郎🤵🏻（微信:<strong>yanggc_2013</strong>）兑换小两口精心准备的小礼品一件！</p>
                    <p>免费&包邮，仅备10件，送完为止。</p>
                </div>
                <div className="ps">* 活动最终解释权归新郎所有</div>
                <div className="close" onClick={closeDan}>
                    <MdClose color="#fff" />
                </div>
            </div>
        </StyledPopup>
    )
}
