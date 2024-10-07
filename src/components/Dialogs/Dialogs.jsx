import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from '../../redux/message-reducer';
import { sendMessageCreator } from '../../redux/message-reducer';
// let dialogData = [
//     { id: 1, name: 'Nastya' },
//     { id: 2, name: 'Poly' },
//     { id: 3, name: 'Tanya' },
//     { id: 4, name: 'Olya' },
//     { id: 5, name: 'Sveta' },
//     { id: 6, name: 'Elena' }
// ];
// let messagesData = [
//     { id: 1, message: "Hi" },
//     { id: 2, message: "How are you" },
//     { id: 3, message: "N;wdw;kd "}
// ];

const Dialogs = (props) => {
    let state = props.store.getState().profilePage;
    let dialogData = state.dialogData;
    let messagesData = state.messagesData;
    let newMessageBody = state.newMessageBody;
    let dialogsElements = dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesData.map(message => <Message message={message.message} />);
    let onSendMessageClick = () => {
        debugger;
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div> {messagesElements} </div>
               <div>
                <div> <textarea value={newMessageBody} 
                                onChange={onNewMessageChange}
                                placeholder='Enter your message'>  </textarea>  </div>
                <div> <button onClick={onSendMessageClick}> Send  </button>  </div>
               </div>
            </div>
        </div>
    )
}

export default Dialogs;