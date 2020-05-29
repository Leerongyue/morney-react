import styled from 'styled-components';
import React, {useState} from 'react';

const CategoryWrapper = styled.div`
background:#c4c4c4;
`;
const Wrapper = styled.section`
>ul{
 display: flex;
 flex-direction: row;
 text-align: center;
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
type Props = {
  value: string,
  onChange: (category: '+' | '-') => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const category = props.value;
  return (
    <CategoryWrapper>
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li
            key={c}
            className={category === c ? 'selected' : ''}
            onClick={() => props.onChange(c)}
          >
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
    </CategoryWrapper>
  );
};
export {CategorySection};