import { useEffect, useState } from 'react';
import { actions, formCard, input, primaryBtn, textarea } from './RegisterForm.styles';
import type { TaskType } from '../../types';

type Props = {
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const RegisterForm = ({ setTaskList }: Props) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');


  /**
   * TODO：新規登録の作成
   */
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに追加ボタン押下時の処理を書く
    const newTask = {
      id: Date.now(),
      title:title,
      detail:detail,
    };

    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };
  //ここまでが今回の「新規登録の作成」問題の内容//
    
  return (
    <form style={formCard} onSubmit={(e) => onSubmitForm(e)}>
      <input style={input} type='text' value={title} placeholder="タイトルを入力" onChange={(e) => setTitle(e.target.value)} />
      <br />
      <textarea style={textarea} value={detail} placeholder="TODOを入力" onChange={(e) => setDetail(e.target.value)} rows={7}></textarea>
      <div style={actions}>
        <button style={primaryBtn(true)} type='submit'>
          追加
        </button>
      </div>
    </form>
  );
};
