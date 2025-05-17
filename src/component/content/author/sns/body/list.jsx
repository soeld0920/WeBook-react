import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Text, TitleText} from "../../../../source/text"
import { FaRegThumbsUp, FaRegHeart, FaShareAlt } from "react-icons/fa"
import { useAuthorContext } from "../../../../../context/author";

const ListUl = styled.ul`
  display: flex;
  transition: ${({$transition}) => $transition ? 'all 0.5s ease' : 'none'};
  transform: ${({$selectedSnsNum}) => `translateX(${-($selectedSnsNum + 1) * 406 + 59.5}px)`};
`

const CommentDiv = styled.li`
  width: 400px;
  height: 120px;
  border: 3px solid #32cd32;
  display: flex;
  flex: 0 0 ${({$center}) => $center ? '60%' : '20%'};
  opacity: ${({$center}) => $center ? 1 : 0.5};
  transform: scale(${({$center}) => $center ? 1 : 0.8});
  transition: ${({$transition}) => $transition ? 'all 0.3s ease' : 'none'};
`

const CommentLine = styled.div`
  height: 120px;
  border-right: 3px solid #32cd32;
`

const CommentText = styled.div`
  width: 300px;
  height: 120px;
  position: relative;
  padding: 3px;
  box-sizing: border-box;
`

const CommentBtn = styled.button`
  all : unset;
  cursor: pointer;
`

function List(){
  const {snss, selectedSnsNum,setSelectedSnsNum, setIsSliding} = useAuthorContext()
  const [transition, setTransition] = useState(true)
  const newSns = [{...snss[snss.length -2], id: -1},{...snss[snss.length -1], id: 0}, ...snss, {...snss[0], id : snss.length +1}, {...snss[1], id : snss.length +2}]

  useEffect(() => {
      let t1;
      if(selectedSnsNum === 0 | selectedSnsNum === snss.length + 1){
        t1 = setTimeout(() => {
          setTransition(false);setSelectedSnsNum(selectedSnsNum === 0 ? snss.length : 1)
          setTimeout(() => {setTransition(true);setIsSliding(false)},100)
        },500)
      }else{
        t1 = setTimeout(() => setIsSliding(false),600)
      }
  
      return () => {
        clearTimeout(t1);
      };
      
      },[selectedSnsNum, snss, setSelectedSnsNum, setIsSliding])

  return(
    <ListUl $selectedSnsNum={selectedSnsNum} $transition={transition}>
      {newSns.map(sns => <Comment key={sns.id} sns={sns} $center={selectedSnsNum === sns.id} $transition={transition}/>)}
    </ListUl>
  )
}

function Comment({sns ,$center, $transition}){
  return(
    <CommentDiv $center={$center} $transition={$transition}>
      <img src={sns.authorUrl} alt="작가사진" style={{width:"100px"}}/>
      <CommentLine/>
      <CommentText>
        <TitleText as={'h4'}>{sns.title}</TitleText>
        <Text as={"p"} style={{marginTop:'10px'}}>{sns.content}</Text>
        <TitleText as={'h5'} style={{position:'absolute', bottom:'5px', left:'0'}}>{sns.author}</TitleText>
        <div style={{display:'flex',position:'absolute', bottom:'0', right:'0'}}>
          <CommentBtn><Text $fontSize={2}><FaRegThumbsUp/></Text></CommentBtn>
          <CommentBtn><Text $fontSize={2}><FaRegHeart/></Text></CommentBtn>
          <CommentBtn><Text $fontSize={2}><FaShareAlt/></Text></CommentBtn>
        </div>
      </CommentText>
    </CommentDiv>
  )
}

export default List