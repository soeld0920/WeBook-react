import React from "react";
import styled from "styled-components";
import { useAuthorContext } from "../../../../../context/author";
import { Text, TitleText } from "../../../../source/text";

const ListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const LiveDiv = styled.div`
  width: 200px;
  height: 150px;
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }
`

function List(){
  const {lives} = useAuthorContext()
  return(
    <ListUl>
      {lives.map((live) => <Live live={live} key={live.id}/>)}
    </ListUl>
  )
}

function Live({live}){
  return(
    <LiveDiv>
      <VideoWrapper>
        <iframe src={live.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
      </VideoWrapper>
      <TitleText as={'h4'} $fontSize={4} $overflow={true} style={{marginTop:'10px'}}>{live.title}</TitleText>
      <Text $fontSize={5} $color={'#666'}>{live.subtitle}</Text><br/>
    </LiveDiv>
  )
}

export default List