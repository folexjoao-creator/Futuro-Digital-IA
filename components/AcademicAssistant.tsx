
import React, { useState, useRef, useEffect } from 'react';
import { getAcademicAdvice } from '../services/geminiService';
import { Message } from '../types';

const AcademicAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Olá! Sou seu assistente académico do SIGA-MZ. Como posso ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAcademicAdvice(messages, input);
    setMessages(prev => [...prev, { role: 'model', content: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-gray-200 overflow-hidden">
          <div className="bg-green-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot text-xl"></i>
              <span className="font-semibold">Assistente SIGA-MZ</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-green-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-400 p-3 rounded-2xl text-sm italic shadow-sm">
                  Pensando...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida académica..."
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
            />
            <button 
              onClick={handleSend}
              className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-green-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <i className="fas fa-comment-dots text-2xl"></i>
        </button>
      )}
    </div>
  );
};

export default AcademicAssistant;
