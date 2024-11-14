export interface Message {
  iconName: string;
  source: string;
  id: number;
}

import icononly from "../../assets/icon.png";
import icononly2 from "../../assets/icon2.png";

const messages: Message[] = [
  {
    iconName: 'AppIconDark',
    source: icononly,
    id: 0
  },
  {
    iconName: 'AppIcon',
    source: icononly2,
    id: 1
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
