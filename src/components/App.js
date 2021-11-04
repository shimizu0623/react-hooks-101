import React, { useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event'
import reducer from '../reducers'

function App() {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e =>{
    e.preventDefault()  //ページがリロードされず、必要なところだけ書き換えてくれる処理

    dispatch({
        type: 'CREATE_EVENT',
        title,
        body
    })
    // dispatch(action)
    // action = {
    //   type: 'CREATE_EVENT',
    //   title,
    //   body
    // }

    setTitle('')
    setBody('')
  
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' 
          value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディ</label>
          <textarea className='form-control' id='formEventBody' 
          value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' onClick={addEvent}>イベント作成</button>
        <button className="btn btn-danger">全イベントの削除</button>
      </form>

      <h4>イベント一覧</h4>

    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディ</th>
        </tr>
      </thead>
      <tbody>
        { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
