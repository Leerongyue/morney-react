import React, {ChangeEvent} from 'react';
import Input from '../components/Input';
import styled from 'styled-components';


type Props = {
  value: string,
  onChange: (note: string) => void
}
const Wrapper = styled.div`
padding:10px 0;
`;
const NoteSection: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Input
        label={'备注'}
        value={props.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
      >
      </Input>
    </Wrapper>
  );
};
export {NoteSection};