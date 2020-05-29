import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../Money/CategorySection';
import styled from 'styled-components';
import useRecord from '../hooks/useRecord';
import dayjs from 'dayjs';

const CategoryWrapper = styled.div`
background:white;
`;
const Item = styled.div`
font-size: 16px;
 >.xxx{
   >.day{
   background: #E5E5E5;
    line-height: 20px;
    padding:10px 16px;
   }
   >.item{
   background:white;
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding:10px 16px;
      >.note{
      margin-right: auto;
      margin-left: 12px;
      color:#999
      }
  }
}
 


`;

function Statistics() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {records} = useRecord();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <Item>
        {records.map(r =>
          <div key={r.tags[0].id} className={'xxx'}>
            <div className={'day'}>
              {dayjs(r.createdAt).format('YYYY年MM月DD日')}
            </div>
            <div className={'item'}>

              <span>{r.tags[0].name}</span>
              <span className={'note'}>{r.note}</span>
              ￥<span>{r.amount}</span>
            </div>
          </div>)}
      </Item>
    </Layout>
  );
}

export default Statistics;