import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';
import {Message} from 'element-react';


type Tag = {
  id: number;
  name: string
}
type Category = '-' | '+'
export type RecordItem = {
  tags: Tag[]
  note: string
  category: Category
  amount: string
  createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>
const useRecord = () => {
    const [records, setRecord] = useState<RecordItem[]>([]);
    const success = () => {
      Message({
        message: '保存成功',
        type: 'success',
        duration: 1000
      });
    };
    const warning = (fn: () => string) => {
      Message({
        message: fn(),
        type: 'warning',
        duration: 1000
      });
    };
    const addRecord = (newRecord: newRecordItem) => {
      const record = {...newRecord, createdAt: (new Date()).toISOString()};
      setRecord([...records, record]);
    };

    useEffect(() => {
      setRecord(JSON.parse(window.localStorage.getItem('records') || '[]'));

    }, []);
    useUpdate(() => {
      window.localStorage.setItem('records', JSON.stringify(records));
    }, records);
    return {records, setRecord, addRecord, success, warning};
  }


;
export default useRecord;