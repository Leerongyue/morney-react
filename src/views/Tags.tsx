import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../components/useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {ButtonWrapper, Button} from '../components/Button';

const TagList = styled.ol`
font-size: 16px;
background: #FFFFFF;
>li{
  border-bottom: 1px solid #dbdbdd;
  margin-left: 16px;
  >a{
  display: flex;
  justify-content: space-between;
  padding:12px 16px 12px 0px;
  >svg{
  width:16px;
  height:16px;
  }
  }
}

`;


function Tags() {
  const {tags, addTag} = useTags();
  return (

    <Layout scrollTop={9999}>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={`/tags/${tag.id}`}>
              <span className={'onLine'}>{tag.name}</span>
              <Icon name={'right'}/>
            </Link>
          </li>)}
      </TagList>
      <ButtonWrapper>
        <Button onClick={() => {addTag();}}>新建标签</Button>
      </ButtonWrapper>
    </Layout>
  );
}

export default Tags;