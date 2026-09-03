'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { getChatGreeting, getChatResponse, parseChatLinks } from '@/lib/chatbot';
import { siteImages } from '@/lib/images';

function formatBotMessage(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    const parts = parseChatLinks(line);
    return (
      <React.Fragment key={i}>
        {parts.map((part, j) =>
          part.type === 'link' ? (
            <span key={j}>
              {part.prefix}
              <Link href={part.href} className="chatbot-inline-link">
                {part.href.replace(/^\//, '')}
              </Link>
            </span>
          ) : (
            <span key={j}>{part.value}</span>
          )
        )}
        {i < lines.length - 1 ? <br /> : null}
      </React.Fragment>
    );
  });
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [quickReplies, setQuickReplies] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = getChatGreeting();
      setMessages([{ id: 'welcome', role: 'bot', content: greeting.text }]);
      setQuickReplies(greeting.quickReplies);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendBotReply = (userText, quickReplyId) => {
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuickReplies([]);
    setIsTyping(true);

    setTimeout(() => {
      const reply = getChatResponse(userText, quickReplyId);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'bot',
          content: reply.text,
        },
      ]);
      setQuickReplies(reply.quickReplies);
      setIsTyping(false);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    setInput('');
    sendBotReply(trimmed);
  };

  const handleQuickReply = (reply) => {
    if (isTyping) return;
    sendBotReply(reply.label, reply.id);
  };

  return (
    <>
      {isOpen ? (
        <div className="chatbot-panel" role="dialog" aria-label="ES Energy chat assistant">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-header-logo">
                <img src={siteImages.logo} alt="" />
              </div>
              <div>
                <strong>{siteConfig.name} Assistant</strong>
                <span>Typically replies instantly</span>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message ${msg.role === 'bot' ? 'is-bot' : 'is-user'}`}>
                {msg.role === 'bot' ? (
                  <div className="chatbot-avatar" aria-hidden="true">
                    <img src={siteImages.logo} alt="" />
                  </div>
                ) : null}
                <div className="chatbot-bubble">
                  {msg.role === 'bot' ? formatBotMessage(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {isTyping ? (
              <div className="chatbot-message is-bot">
                <div className="chatbot-avatar" aria-hidden="true">
                  <img src={siteImages.logo} alt="" />
                </div>
                <div className="chatbot-bubble chatbot-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          {quickReplies.length > 0 ? (
            <div className="chatbot-quick-replies">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  type="button"
                  className="chatbot-quick-btn"
                  onClick={() => handleQuickReply(reply)}
                  disabled={isTyping}
                >
                  {reply.label}
                </button>
              ))}
            </div>
          ) : null}

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about solar, pricing, calculator..."
              aria-label="Type your message"
              disabled={isTyping}
            />
            <button type="submit" className="chatbot-send" disabled={!input.trim() || isTyping} aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className="support-fab support-fab-chat"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        <span className="support-fab-label">Chat</span>
      </button>
    </>
  );
}
