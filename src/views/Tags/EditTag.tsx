import React, {ChangeEvent} from 'react';
import {useTags} from '../../Money/useTags';
import {useParams} from 'react-router-dom';
import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
import styled from 'styled-components';
import {Button, ButtonWrapper} from '../../components/Button';
import Input from '../../components/Input';

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
const InputWrapper = styled.div`
margin-top: 8px;
font-size: 16px;
background:#ffffff;

`;

const EditTag = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id} = useParams<Params>();//从url中找id(string)
  const tag = findTag(parseInt(id));

  if (tag) {
    return (
      <Layout>
        <Header>
          <Icon name={'left'}/>
          <span>编辑标签</span>
        </Header>
        <InputWrapper>
          <Input
            label={'fuck'}
            defaultValue={tag.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateTag(parseInt(id), {name: e.target.value})}
          >
          </Input>
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
        </ButtonWrapper>
      </Layout>
    );
  } else {
    return (
      <div>删除成功</div>
    );
  }

};
export {EditTag};