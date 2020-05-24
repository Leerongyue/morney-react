import {useState} from 'react';

const useTags = () => {
  //自定义hook
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {tags: tags, setTags: setTags};
};
export {useTags};
