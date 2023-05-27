import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Chat() {

    const [inputAuthorValue, setAuthorValue] = useState('');
    const [inputMessageTextValue, setMessageValue] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        setChatHistory([
          ...chatHistory,
          {
            id: uuidv4(),
            author: inputAuthorValue,
            text: inputMessageTextValue
          }
        ])
    
        setAuthorValue('');
        setMessageValue('');
    }

    const handleAuthorChange = (event) => {
        setAuthorValue(event.target.value);
    }

    const handleMessageValueChange = (event) => {
        setMessageValue(event.target.value);
    }
    
    return (
        <div className='chat'>
            <h1>Welcome to chatroom</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enetr your name:</label>
                    <input 
                        type='text'
                        value={inputAuthorValue}
                        onChange={handleAuthorChange}
                    />
                </div>            <div>
                    <label>Enetr message:</label>
                    <input 
                        type='text'
                        value={inputMessageTextValue}
                        onChange={handleMessageValueChange}
                        />
                </div>
                <button type="submit">Send</button>
            </form>
           

            <ul>
                {chatHistory.map(message => {
                    return (
                        <li key={message.id}>{message.author}: {message.text}</li>
                    )
                }) }
            </ul>
        </div>
        
    )
}

export default Chat;