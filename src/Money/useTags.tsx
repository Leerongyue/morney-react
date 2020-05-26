import {useState} from 'react';

const useTags = () => {
  //自定义hook
  const [tags, setTags] = useState(
    [
      {id: 1, name: '衣'},
      {id: 2, name: '食'},
      {id: 3, name: '住'},
      {id: 4, name: '行'}

    ]
  );
  return {tags, setTags};
};
export {useTags};
