import React from 'react';
import {useTags} from '../../Money/useTags';
import {useParams} from 'react-router-dom';
import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
import styled from 'styled-components';
import {Button, ButtonWrapper} from '../../components/Button';

type Params = {
  id: string;
}
const Header = styled.header`
display: flex;
font-size: 16px;
align-items: center;
background:#fff;
padding-left: 16px;
>svg{
width:20px;
height:40px;
margin-right: 146px;
padding:8px 0;
}
>span{
line-height: 20px;
padding:14px 0;
}
`;

const EditTag = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();//从url中找id
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Header>
        <Icon name={'left'}/>
        <span>编辑标签</span>
      </Header>
      <label>
        <span>标签名</span>
        <input
          type="text"
          defaultValue={tag.name}
        />
      </label>
      <ButtonWrapper>
        <Button>删除标签</Button>
      </ButtonWrapper>
    </Layout>
  );
};
export {EditTag};