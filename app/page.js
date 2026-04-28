'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div style={{ padding: 20 }}>
      <h2>我的AI聊天</h2>

      <div>
        {messages.map(m => (
          <div key={m.id}>
            <b>{m.role}：</b> {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="输入内容..."
        />
        <button type="submit">发送</button>
      </form>
    </div>
  );
}