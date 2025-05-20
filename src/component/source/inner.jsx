import styled from "styled-components";

const Inner = styled.div`
  width:1200px;
  height: 100%;
  margin: 0 auto;
  display: ${({$flex = true}) => $flex ? 'flex' : 'block'};
  justify-content: ${({$isJustify}) => $isJustify || 'space-between'};
  align-items: ${({$align = true}) => $align ? 'center' : 'unset'};;
  flex-wrap: ${({$flexWrap = false}) => $flexWrap ? 'wrap' : 'nowrap'};;
`

export default Inner