import React from 'react'
import styled from 'styled-components';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Title from './SectionTitle';

const StyledWrapper = styled.section`
    min-height: 50vh;
  width:100%;
  background-color: #fff;
  padding:.3rem 0;
  .wrapper{
      width:100%;
      padding:0;
      max-height: 80vh;
      overflow: scroll;
      .lg-react-element{
       column-count: 4;
       column-gap: .14rem;
          .picture{
              cursor: pointer;
            max-width: 300px;
            display: grid;
            grid-template-rows: 1fr auto;
            margin: 0 auto 5px auto;
              img{
                  border:2px solid #ccc;
                  width:100%;
                  border:5px;
              }
          }
      }
      @media screen and (max-width: 360px) {
            padding:0 .02rem;
            .lg-react-element{
                column-count: 3;
                .picture img{
                    border:none;
                }
            }
        }
  }
`;
const nums = Array.from(Array(29).keys()).map((v, idx) => (idx + 1));
export default function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <StyledWrapper>
            <Title title="婚纱" />
            <div className="wrapper">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {nums.map(n => {

                        return <div key={n} className="picture" data-src={`https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w${n}.png?x-oss-process=image/resize,w_1200`}>
                            <img src={`https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w${n}.png?x-oss-process=image/resize,w_300`} />
                        </div>
                    })}
                </LightGallery>
            </div>
        </StyledWrapper>
    )
}
