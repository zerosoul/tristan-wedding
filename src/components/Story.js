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
            @media screen and (max-width: 360px) {
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
    title: "初次见面",
    datetime: "2020.05.06",
    desc: "相识于豆瓣，第一次聊天即线下见面，所以算不上网恋。平日拖鞋大裤衩习惯了，那天特意穿了件衬衫，往文质彬彬方向靠拢，有些“气质”是掩盖不住的，时间久了，还是暴露出又直又土的本色。好在第一印象双方都觉得不错，才有了后续。😂",
    picture: `${prefix}meet.png?x-oss-process=image/resize,w_300`,
}, {
    title: "一起户外",
    datetime: "2020.05.23",
    desc: "都喜欢户外，但是正值疫情，所以只能在住所附近的小山玩一玩。一起去的最多的，当属北京百望山。后来，还去挑战了狗牙山10km穿越，有点冒险，但很刺激。再后来去了：香山，十渡露营，永定河旁边的乡间小路探险，遇见了一段废弃的铁路，学起了网红拍照，结果腿被咬了好几个包，这就是臭美的代价吧😄",
    picture: `${prefix}bws.png?x-oss-process=image/resize,w_300`,
}, {
    title: "一起逛街",
    datetime: "2020.06.06",
    desc: "作为一名直男，逛街约等于被牵着遛，好在彼此有一个共同点：买衣服基本都去优衣库。所以，优衣库成为了每次逛街必打卡地点",
    picture: `${prefix}youyiku.png?x-oss-process=image/resize,w_300`,
}, {
    title: "一起变胖",
    datetime: "2020.07.06",
    desc: "两人在一起久了，日常无非就是一日三餐，好好吃饭，是彼此共同的追求。有段时间买了个小米电烤锅，隔三差五的就火锅烤肉走起，以前粗茶淡饭的我哪经得起这般诱惑，没多久就肉眼可见地胖了起来。后来我又拾起来做饭技能，天天做便当，你一份，我一份，天天上班在办公室带饭吃。先胖带动后胖，最终实现了“共同致胖”。",
    picture: `${prefix}eating.png?x-oss-process=image/resize,w_300`,
}, {
    title: "一起过节",
    datetime: "2020.11.11",
    desc: "新找的一份工作还是电商行业，双十一那天，特别忙，但也没忘了给我这个程序员过一个节。老感动了，给洗了一个月的袜子。",
    picture: `${prefix}1111.png?x-oss-process=image/resize,w_300`,
}, {
    title: "一起离京",
    datetime: "2021.06.29",
    desc: "心有所属，在哪里都可以随时建立一个家，不管是租来的，还是买来的。但是问题是已经有一个买来的住所，为何不离京呢？一拍即合，锅碗瓢盆打包一车搞定，吃完最后一顿火锅唱着歌，一路小跑就离京了。",
    picture: `${prefix}leave.png?x-oss-process=image/resize,w_300`,
}, {
    title: "一起装修房子",
    datetime: "2021.07.01",
    desc: "从家徒四壁，到封阳台，打柜橱，刷墙漆，第一件家具入场，第一件家电入场，第一次睡新床，第一次去超市，第一次开火做饭...我们又经历了很多第一次",
    picture: `${prefix}fang.png?x-oss-process=image/resize,w_300`,
}, {
    title: "领证啦~",
    datetime: "2021.08.23",
    desc: "在一个没有任何寓意的日子，简单准备了一下，就去民政局扯证了。也就五分钟的紧张与兴奋，很快回归正常。",
    picture: `https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/6C4haT.jpg?x-oss-process=image/resize,w_300`,
},]

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
                                <p className="desc">{desc}</p>
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
