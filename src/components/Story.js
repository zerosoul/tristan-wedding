import React from 'react'
import styled, { keyframes } from 'styled-components';
import Title from './SectionTitle'
const AniBeating = keyframes`
    from{
        opacity:.1;
    }
    to{
        opacity:1;
    }
`
const StyledWrapper = styled.section`
  width:100%;
  background-color: #eee;
  padding:.3rem 0;
  .tl{
    max-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .items{
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        gap: .1rem;
        .item{
            display: flex;
            align-items: center;
            gap: .4rem;
            .content{
                position: relative;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap:.1rem;
                border:1px solid #eef;
                padding:.2rem;
                border-radius: .12rem;
                width: 3rem;
                
                &:after{
                    content: "💓";
                    position: absolute;
                    top:50%;
                    right: -.5rem;
                    transform: translateY(-50%);
                    font-size: .3rem;
                    animation: ${AniBeating} 1s ease-in-out infinite;
                    animation-direction:alternate;
                    animation-delay: inherit;
                }
                .title{
                    font-size: .3rem;
                }
                .date{
                    font-style:oblique;
                    font-size: .12rem;
                    color:#666;
                }
                .desc{
                    height: 1rem;
                    overflow: scroll;
                    line-height: 1.5;
                    margin-top: .12rem;
                    font-size: .15rem;
                    display: flex;
                    flex-direction: column;
                    gap: .1rem;
                }
            }
            &:nth-child(even){
                flex-direction: row-reverse;
                .content:after{
                    left: -.5rem;
                }
            }
            .pic{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: .4rem;
                img{
                    z-index: 8;
                    border-radius: 50%;
                    border:3px solid #999;
                    width:2rem;
                    height: 2rem;
                    object-fit: cover;
                }
            }
            @media screen and (max-width: 375px) {
                flex-direction:column-reverse;
                &:nth-child(even){
                    flex-direction: column-reverse;
                    .content:after{
                        left: calc(50% - .15rem);
                    }
                }
                .content:after{
                    top: -0.4rem;
                    left: calc(50% - .15rem);
                }
            }
        }
    }
  }
`;
const prefix = 'https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/story.';
const items = [{
    title: "相遇：幸运施了魔法~",
    datetime: "2020.05.06",
    desc: `<span>2020年4月底，我在豆瓣发现了她，第一次聊天即线下见面，所以称不上网恋。</span><span>那天我们聊了许久，感觉有说不完的话，不知不觉喝掉好几壶水呢~</span><span>虽然是首次接触，但就像认识了许久，这种熟悉又惊喜的感觉，使我们一点点向彼此靠近。</span>`,
    picture: `${prefix}meet.png?x-oss-process=image/resize,w_300`,
}, {
    title: "相知：爱情中的模样~",
    datetime: "2020.05.23",
    desc: `<span>丘比特之箭射中了我们，空气都是甜甜的玉米味儿。</span>
    <span>我们都爱大自然、且喜欢户外。</span>
    <span>我们去永定河旁边的乡间小路探险，漫无目的地边走边玩，落日余晖下的她，真的好美。</span>
    <span>我们一起爬好汉坡，蹭免费的植物园门票，欢呼雀跃的我们，像极了小孩子。</span>
    <span>我们还挑战狗牙山10km穿越，有点冒险，很刺激，但她吓得不行，并严令禁止我再次挑战，她说：不想拿自己的生命冒险，当然也不想失去我。</span>
    <span>我们喜欢看小说，喜欢从别人的故事中汲取人生智慧，甚至发表过一模一样的小说解读。</span>
    <span>我们喜欢听歌疗愈，她听的歌大多痞痞的有点酷，我听得歌就是温柔偏大众了。</span>
    <span>我们穿衣风格、消费习惯均高度相似，甚至脖子右侧有个一模一样的痣，上辈子的我们，可能是兄妹。</span>
    <span>我们一起生活后，当然也免不了生活的摩擦。</span>
    <span>我偏理性，她偏感性。</span>
    <span>我是个慢性子，她是个急脾气。</span>
    <span>我生气起来不爱说话，她生气起来爱飙狠话。</span>
    <span>好在每次吵架我们都能冷静下来及时复盘，并学着去表达自己的感受，然后互相调整。</span>
    <span>好的亲密关系是相处磨合出来的，我们愿意为了彼此去付出爱与精力，并时刻感恩。</span>`,
    picture: `${prefix}bws.png?x-oss-process=image/resize,w_300`,
}, {
    title: "相守：心安即是归处",
    datetime: "2020.06.06",
    desc: `<span>不管是租房，还是买房，只要心有所属，哪里就是家。</span>
    <span>我们一起生活后，迫切的需要有自己的小家，自己的厨房</span>
    <span>但问题是老家已有一个买来的住所，何不离京呢？</span>
    <span>北京适合生存，而不是适合生活。</span>
    <span>两人一拍即合，锅碗瓢盆打包一车搞定，吃完最后一顿火锅唱着歌，一路小跑就离京了。</span>`,
    picture: `${prefix}leave.png?x-oss-process=image/resize,w_300`,
}]
function createMarkup(html) {
    return { __html: html };
}

export default function Couple() {
    return (
        <StyledWrapper>
            <Title title="相遇 · 相知" />
            <div className="tl">
                <ul className="items">
                    {items.map(({ title, datetime, desc, picture }, idx) =>
                        <li key={title} className="item">
                            <div className="content" style={{ animationDelay: `0.${idx * 5}s` }}>
                                <h4 className="title">{title}</h4>
                                <time className="date">{datetime}</time>
                                <p className="desc" dangerouslySetInnerHTML={createMarkup(desc)}></p>
                            </div>
                            <div className="pic">
                                <img src={picture} alt="picture" />
                            </div>
                            <div className="placeholder"></div>
                        </li>
                    )}
                </ul>
            </div>
        </StyledWrapper>
    )
}
