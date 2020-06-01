import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {MessageBox} from 'element-react';
import useUpdate from '../hooks/useUpdate';

const useTags = () => {
  //自定义hook
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
    // const index = findTagIndex(id);
    // const tagsClone = JSON.parse(JSON.stringify(tags));//深拷贝，react数据不可变必须要拷贝
    // tagsClone.splice(index, 1, {id: id, name: obj.name});
    // setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    // const index = findTagIndex(id);
    // const tagsClone = JSON.parse(JSON.stringify(tags));//深拷贝，react数据不可变必须要拷贝
    // tagsClone.splice(index, 1);
    // setTags(tagsClone);
  };
  const addTag = () => {
    MessageBox.prompt('请输入标签名', '提示', {
      inputPattern: /^[a-zA-Z\u4e00-\u9fa5]+$/,
      inputErrorMessage: '请输入中文或英文',
    },).then((input: any) => {
      setTags([...tags, {id: createId(), name: input.value}]);
      document.body.scroll(0, 10000);
    }).catch(() => {
    });
  };
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag};
};
export {useTags};
