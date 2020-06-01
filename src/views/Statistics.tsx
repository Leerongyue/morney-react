import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../Money/CategorySection';
import styled from 'styled-components';
import useRecord, {RecordItem} from '../hooks/useRecord';
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
    display: flex;
    justify-content: space-between;
   }
   >.item{
   background:white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 20px;
    padding:0px 16px;
      >.x{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding:10px 0;
          >.tag{
          }
          >.note{
          color:#999;
          margin-right: auto;
          margin-left: 14px;
          }
          >.amount{
          
          }
      }
  }
}
 


`;

function Statistics() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {records} = useRecord();
  const selectedRecords = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedRecords.forEach(r => {
    const key = dayjs(r.createdAt).format('YYYY-MM-DD');//{'2020-01-01':[item,item]}
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const arr = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] < b[0]) {
      return 1;
    }
    return 0;
  });
  // const sum = () => {
  //   const arrAmount = arr.map(a => a[1].map(r => parseFloat(r.amount)))[0];
  //   let arrSum = 0;
  //   for (let i = 0; i < arrAmount.length; i++) {
  //     arrSum += arrAmount[i];
  //   }
  //   return arrSum;
  // };
  return (
    <Layout scrollTop={9999}>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <Item>
        {arr.map(r =>
          <div key={r[0]} className={'xxx'}>

            {/*/////////////////////////////////////*/}
            <div className={'day'}>
              <span>{r[0]}</span>
              {/*<span>￥{sum()}</span>*/}
            </div>
            <div className={'item'}>
              {r[1].map(a =>
                <div key={a.tags[0].id} className={'x'}>
                  <span className={'tag'}>{a.tags[0].name}</span>
                  <span className={'note'}>{a.note}</span>
                  <span className={'amount'}>￥{a.amount}</span>
                </div>
              )}

            </div>

            {/*/////////////////////////////////////*/}

          </div>)}
      </Item>
    </Layout>
  );
}

export default Statistics;