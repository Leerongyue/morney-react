import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
>ul{
 display: flex;
 flex-direction: row;
 text-align: center;
 background: #C4C4C4;  
  >li{
  position: relative;
  width:50%;
  font-size: 24px;
  font-family: Source Han Sans;
  padding:18px 0;
  &.selected::after{
  content: '';
  display: block;
  background:#000;
  height:4px;
  position: absolute;
  bottom:0;
  width:100%;
  left:0;
 }
 }
}
`;
const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li
            className={category === c ? 'selected' : ''}
            onClick={() => setCategory(c)}
          >
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};