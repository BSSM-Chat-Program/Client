import styled from '@emotion/styled';
import { MessageSquarePlus } from 'lucide-react';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  color: #fff;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 370px;
  min-width: 370px;
  border-right: 1px solid #262626;
  display: flex;
  flex-direction: column;
  background-color: #000;
`;

export const Header = styled.div`
  padding: 13.4px;
  border-bottom: 1px solid #262626;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Username = styled.h1`
  font-size: 18px;
  color: #fff;
`;

export const NewMessageButton = styled(MessageSquarePlus)`
  cursor: pointer;
  color: #fff;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchContainer = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #262626;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #262626;
  color: #fff;
  font-size: 14px;
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #262626;
    border-radius: 4px;
  }
`;

export const ChatItem = styled.div<{ active?: boolean }>`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.active ? '#262626' : 'transparent'};
  
  &:hover {
    background-color: #121212;
  }
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const ChatInfo = styled.div`
  flex: 1;
`;

export const ChatName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;

export const LastMessage = styled.div`
  color: #8e8e8e;
  font-size: 14px;
  margin-top: 4px;
`;

export const ChatWindow = styled.div`  
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #000;
`;

export const ChatHeader = styled.div`
  padding: 3px 10px;
  border-bottom: 1px solid #262626;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatActions = styled.div`
  display: flex;
  gap: 16px;
  color: #fff;
  
  & > svg {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MessageContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #000;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #262626;
    border-radius: 4px;
  }
`;

export const Message = styled.div<{ sent?: boolean }>`
  max-width: 60%;
  margin: 8px;
  padding: 12px 16px;
  border-radius: 22px;
  background-color: ${props => props.sent ? '#0095f6' : '#262626'};
  color: #fff;
  align-self: ${props => props.sent ? 'flex-end' : 'flex-start'};
  font-size: 14px;
`;

export const InputContainer = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #262626;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #000;
`;

export const MessageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #262626;
  border-radius: 9999px;
  padding: 8px 16px;
`;

export const EmojiButton = styled.button`
  background: none;
  border: none;
  color: #8e8e8e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  cursor: pointer;
  font-size: 24px;
`;

export const MessageInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16.5px;

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #0095f6;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & > svg {
    color: #fff;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const EmojiPicker = styled.div`
  position: absolute;
  bottom: 60px;
  z-index: 1000;
`;

export const EmptyStateContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 20px;
  width: 100%; // 전체 너비 사용
`;

export const EmptyStateIcon = styled.div`
  margin-bottom: 16px;
  color: #262626;
`;

export const EmptyStateTitle = styled.h2`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 8px;
`;

export const EmptyStateText = styled.p`
  font-size: 14px;
  color: #8e8e8e;
  text-align: center;
  margin-bottom: 24px;
  max-width: 300px;
`;

export const EmptyStateButton = styled.button`
  background-color: #0095f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #1877f2;
  }
`;

export const NewMessageModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #262626;
  border-radius: 12px;
  padding: 20px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 999;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #363636;
`;

export const ModalTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    opacity: 0.8;
  }
`;