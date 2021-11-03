import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <h4>イベント作成</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディ</label>
          <textarea className='form-control' id='formEventBody' />
        </div>

        <button className='btn btn-primary'>イベント作成</button>
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
        
      </tbody>
    </table>
    </div>
  );
}

export default App;
