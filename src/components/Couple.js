import React from 'react'
import styled from 'styled-components';
import Title from './SectionTitle'
import FrameImage from '../assets/imgs/frame.png'

const StyledWrapper = styled.section`
  width:100%;
  background-color: #fff;
  padding:.3rem 0;
  .cp{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:.4rem;
    @media screen and (max-width: 360px) {
        gap: 0;
        flex-direction: column;
    }
      .profile{
          color: #222;
          padding:.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: .2rem;
          .pic{
              width: 2.8rem;
              height: 2.8rem;
              background-repeat: no-repeat;
              background-size:80%,100%;
              background-position: center;
              overflow: hidden;
              &.boy{
                background-image: url('https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w4.png?x-oss-process=image/resize,w_400'),url(${FrameImage});
                background-size:75%,100%;
                background-position-y: 5px;
              }
              &.girl{
                background-image: url('https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w1.png?x-oss-process=image/resize,w_400'),url(${FrameImage});
              }
              img{
                  width: 100%;
                  height: 100%;
              }
          }
          .name{
              font-size: .4rem;
              padding:.2rem 0;
          }
          .intro{
            font-size: .12rem;
          }
      }

  }
`;
export default function Couple() {
    return (
        <StyledWrapper>
            <Title title="新郎 & 新娘" />
            <div className="cp">
                <div className="profile">
                    <div className="pic boy">
                        <img src={FrameImage} alt="man" />
                    </div>
                    <div className="name">杨国春🤵🏻</div>
                    <div className="intro">我有三样东西不可或缺：水，空气，以及右边那个女人</div>

                </div>
                <div className="profile">
                    <div className="pic girl">
                        <img src={FrameImage} alt="man" />
                    </div>
                    <div className="name">朱聪👰🏻</div>
                    <div className="intro">我有三样东西不可或缺：水，空气，以及左边那个男人</div>

                </div>
            </div>
        </StyledWrapper>
    )
}
