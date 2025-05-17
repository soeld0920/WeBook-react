import { Link } from "react-router-dom";
import styled from "styled-components";

const fontLevel = ['0px','25px','20px','18px','16px','14px']

const TitleText = styled.h3`
  color: ${({$color}) => $color || '#333'};
  font-size: ${({$fontSize}) => fontLevel[$fontSize] || '16px'};
  font-weight: ${({$fontWeight}) => $fontWeight || '700'};
  ${({$overflow = false}) => 
  $overflow && 
  `width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`}
`
const Text = styled.span`
  color: ${({$color}) => $color || '#333'};
  font-size: ${({$fontSize}) => fontLevel[$fontSize] || '16px'};
  font-weight: ${({$fontWeight}) => $fontWeight || '400'};
  ${({$overflow = false}) => 
  $overflow && 
  `width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`}
`
const LinkText = styled(Link)`
  color: ${({$color}) => $color || '#333'};
  font-size: ${({$fontSize}) => fontLevel[$fontSize] || '16px'};
  font-weight: ${({$fontWeight}) => $fontWeight || '400'};
  ${({$overflow = false}) => 
  $overflow && 
  `width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`}
  &:hover{
    text-decoration: underline;
  }
`

export  {TitleText,Text,LinkText}