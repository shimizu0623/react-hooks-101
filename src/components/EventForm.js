import React, {useState} from 'react';

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
}from '../actions'

// import reducer from '../reducers'

const EventForm =({state, dispatch})=>{
    // const [state, dispatch] = useReducer(reducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
  
    const addEvent = e =>{
      e.preventDefault()  //ページがリロードされず、必要なところだけ書き換えてくれる処理
  
      dispatch({
          type: CREATE_EVENT,
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
  
    const deleteAllEvents = e =>{
      e.preventDefault()
      const result = window.confirm("すべて削除しますか？")
      if (result) dispatch({type: DELETE_ALL_EVENTS})
  
    }
  
    const unCreatable = title ==='' || body ===''
  
  
    return(
    <>
    
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
    
      <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベント作成</button>
      <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全イベントの削除</button>
    </form>
    </>

    )
}

export default EventForm



