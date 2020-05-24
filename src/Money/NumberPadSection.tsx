import React from 'react';
import Wrapper from './NumberPadSection/NumberPadSection';
import generateOutput from './NumberPadSection/generateOutput';

type Props = {
  value: string,
  onChange: (output: string) => void,
  onOk: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value;
  const setOutput = (str: string) => {
    if (str.length > 16) {
      str = str.slice(0, 16);
    }
    props.onChange(str);
  };
  const onclickButtonWrapper = (e: React.MouseEvent) => {
    //事件委托
    const text = (e.target as HTMLButtonElement).textContent;
    if (text) {
      setOutput(generateOutput(text, output));
    }
    if (text === 'ok') {}
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className={'pad clearFix'} onClick={onclickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className={'ok'}>ok</button>
        <button>0</button>
        <button>.</button>
        <button>00</button>
      </div>
    </Wrapper>

  );
};
export {NumberPadSection};