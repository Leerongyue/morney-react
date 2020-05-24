import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../Money/useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
font-size: 16px;
background: #FFFFFF;
>li{
  padding:12px 16px 12px 0px;
  border-bottom: 1px solid #dbdbdd;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  >svg{
  width:16px;
  height:16px;
 
  }
}

`;
const ButtonWrapper = styled.div`
text-align: center;
`;
const Button = styled.button`
font-size: 16px;
padding:10px 16px;
border-radius: 4px;
border: none;
background:#f60;
margin: 44px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className={'onLine'}>{tag}</span>
            <Icon name={'right'}/>
          </li>)}
      </TagList>
      <ButtonWrapper>
      <Button>新建标签</Button>
      </ButtonWrapper>
    </Layout>
  );
}

export default Tags;