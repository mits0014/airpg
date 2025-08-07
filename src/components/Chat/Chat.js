'use client'
import { useState } from 'react';
import styles from './Chat.module.css';

export default function Chat() {
  const [messages, setMessages] = useState([
    // Exemplo de mensagem inicial opcional
    { id: 1, sender: 'bot', text: 'Olá! Como posso te ajudar hoje?' }
  ]);

  const [input, setInput] = useState('');

  // Simula uma chamada à API que responde após 1s
  const fakeApiResponse = async (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Você disse: "${userMessage}"? Legal!`);
      }, 1000);
    });
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Adiciona a mensagem do usuário na tela imediatamente
    const userMessage = { id: Date.now(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Limpa o campo de input
    setInput('');

    // Chama a API (ou simulação dela) e adiciona a resposta
    const responseText = await fakeApiResponse(input);
    const botMessage = { id: Date.now() + 1, sender: 'bot', text: responseText };

    setMessages((prev) => [...prev, botMessage]);
  };

  // Enviar com Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Chat</p>
      <div className={styles.chatWindow}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender === 'user'
                ? styles.chatUserMensage
                : styles.chatMessage
            }
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Digite uma mensagem..."
        className={styles.chatInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
