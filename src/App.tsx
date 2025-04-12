import { useState } from 'react';
import { Mic, Smile, Image, Heart, Phone, Video, Info, X, MessageCircle } from 'lucide-react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import * as S from './styles/components';
import { chats, messages } from './data/mockData.ts';

function App() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const toggleNewMessageModal = () => {
    setIsNewMessageModalOpen(!isNewMessageModalOpen);
  };

  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <>
      <S.Container>
        <S.Sidebar>
          <S.Header>
            <S.Username>사용자</S.Username>
            <S.NewMessageButton size={24} onClick={toggleNewMessageModal} />
          </S.Header>
          <S.SearchContainer>
            <S.SearchInput placeholder="검색" />
          </S.SearchContainer>
          <S.ChatList>
            {chats.map((chat) => (
              <S.ChatItem
                key={chat.id}
                active={selectedChat === chat.id}
                onClick={() => setSelectedChat(chat.id)}
              >
                <S.Avatar src={chat.avatar} alt={chat.name} />
                <S.ChatInfo>
                  <S.ChatName>{chat.name}</S.ChatName>
                  <S.LastMessage>{chat.lastMessage}</S.LastMessage>
                </S.ChatInfo>
              </S.ChatItem>
            ))}
          </S.ChatList>
        </S.Sidebar>

        <S.ChatWindow>
          {selectedChat !== null ? (
            <>
              <S.ChatHeader>
                <S.ChatItem>
                  <S.Avatar src={chats[selectedChat].avatar} alt={chats[selectedChat].name} />
                  <S.ChatInfo>
                    <S.ChatName>{chats[selectedChat].name}</S.ChatName>
                  </S.ChatInfo>
                </S.ChatItem>
                <S.ChatActions>
                  <Phone size={24} />
                  <Video size={24} />
                  <Info size={24} />
                </S.ChatActions>
              </S.ChatHeader>

              <S.MessageContainer>
                {messages.map((msg, index) => (
                  <S.Message key={index} sent={msg.sent}>
                    {msg.text}
                  </S.Message>
                ))}
              </S.MessageContainer>

              <S.InputContainer>
                <S.MessageWrapper>
                  <S.EmojiButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</S.EmojiButton>
                  <S.MessageInput
                    placeholder="메시지 입력..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  {message.trim().length > 0 ? (
                    <S.SendButton onClick={handleSend}>
                      <span>Send</span>
                    </S.SendButton>
                  ) : (
                    <S.IconGroup>
                      <Mic size={24} />
                      <Image size={24} />
                      <Smile size={24} />
                      <Heart size={24} />
                    </S.IconGroup>
                  )}
                  {showEmojiPicker && (
                    <S.EmojiPicker>
                      <Picker data={data} onEmojiSelect={handleEmojiSelect} theme="dark" />
                    </S.EmojiPicker>
                  )}
                </S.MessageWrapper>
              </S.InputContainer>
            </>
          ) : (
            <S.EmptyStateContainer>
              <S.EmptyStateIcon>
                <MessageCircle size={96} />
              </S.EmptyStateIcon>
              <S.EmptyStateTitle>내 메시지</S.EmptyStateTitle>
              <S.EmptyStateText>
                친구나 그룹에 비공개 사진과 메시지를 보내보세요.
              </S.EmptyStateText>
              <S.EmptyStateButton onClick={toggleNewMessageModal}>
                메시지 보내기
              </S.EmptyStateButton>
            </S.EmptyStateContainer>
          )}
        </S.ChatWindow>
      </S.Container>

      <S.Overlay isOpen={isNewMessageModalOpen} onClick={toggleNewMessageModal} />
      <S.NewMessageModal isOpen={isNewMessageModalOpen}>
        <S.ModalHeader>
          <S.ModalTitle>새로운 메시지</S.ModalTitle>
          <S.CloseButton onClick={toggleNewMessageModal}>
            <X size={20} />
          </S.CloseButton>
        </S.ModalHeader>
        <S.SearchInput placeholder="검색..." />
      </S.NewMessageModal>
    </>
  );
}

export default App;