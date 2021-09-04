import React from 'react'
import styled from 'styled-components';
import Title from './SectionTitle'
import WeddingImage from '../assets/imgs/wedding.png'
import Map1Image from '../assets/imgs/map.xiaoqu.png'
import Map2Image from '../assets/imgs/map.hotel.png'

const StyledWrapper = styled.section`
z-index: 1;
position: relative;
  width:100%;
  background-color: #fff;
  padding:.3rem 0;
  background: url(${WeddingImage});
  background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    &:after{
        /* content: ""; */
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        background-color: rgba(2,2,2,.3);
    }
  .wrapper{
      margin: .2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:.4rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
      .box{
          min-height: 4.4rem;
          min-width: 4rem;
        background-color: rgba(2,2,2,.5);
        z-index: 9;
          color: #fff;
          padding:.25rem .5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: .2rem;
          font-size: .2rem;
          border-radius: 5px;
          /* border: 2px solid rgba(2,2,2,.5); */
          .title{
              font-size: .3rem;
              width:100%;
              text-align: center;
            border-bottom: 1px solid rgba(222,222,222,.4);
            padding-bottom: .2rem;
          }
          .items{
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap:.2rem;
              .item{
                font-size: .22rem;
                  display: flex;
                  align-items: flex-start;
                  gap: .04rem;
                  @media screen and (max-width: 375px) {
                        flex-direction: column;
                        gap: .1rem;
                    }
                  .label{
                      color:#ccc;
                      white-space: nowrap;
                      &:after{
                          content:"：";
                      }
                  }
                  .txt{
                      
                    white-space: nowrap;
                    font-weight: 800;
                      &.loc{
                          display: flex;
                          flex-direction: column;
                          gap: .12rem;
                          .map{
                              width:2.4rem;
                              height:2.4rem;
                              img{
                                  width:100%;
                                  height: 100%;
                                  border: 1px solid #ccc;
                                    border-radius: 10px;
                              }
                              &:hover img{
                                box-shadow: 0px 1px 20px black;
                              }
                          }
                      }
                  }
              }
          }
      }

  }
`;
export default function Wedding() {
    return (
        <StyledWrapper>
            <Title title="婚礼" />
            <div className="wrapper">
                <div className="box">
                    <h3 className="title">住宿</h3>
                    <ul className="items">
                        <li className="item"><span className="label">时间</span><span className="txt">2021.09.14 12:00（一晚）</span></li>
                        <li className="item">
                            <span className="label">地点</span>
                            <div className="txt loc">
                                <span>
                                    山东省聊城开发区格林东方酒店
                                </span>
                                <a className="map" href={'https://j.map.baidu.com/ab/FGQJ'}>
                                    <img src={Map2Image} alt="map" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h3 className="title">典礼</h3>
                    <ul className="items">
                        <li className="item"><span className="label">时间</span><span className="txt">2021.09.15 11:00 - 14:00</span></li>
                        <li className="item">
                            <span className="label">地点</span>
                            <div className="txt loc">
                                <span>
                                    山东省聊城冠县柳林镇 武风文韵小区
                                </span>
                                <a className="map" href={'https://j.map.baidu.com/19/OhRJ'}>
                                    <img src={Map1Image} alt="map" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </StyledWrapper>
    )
}
