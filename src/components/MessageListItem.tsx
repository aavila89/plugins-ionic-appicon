import {
  IonAvatar,
  IonItem,
  IonLabel,
  useIonToast,
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';
import { AppIcon } from '@capacitor-community/app-icon';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  const [present] = useIonToast();
  
  const changeIcon = async (iconName: string) => {
    if (iconName === "AppIcon") {
      await AppIcon.reset({suppressNotification: true});
    } else {
      await AppIcon.change({name: iconName, suppressNotification: true});
    }

    present({
      message: 'Icon changed!',
      duration: 1500,
      position: "bottom",
      color: "light"
    });

  };

  return (
    <IonItem id="message-list-item" detail={false} button onClick={() => changeIcon(message.iconName)}>
      <IonLabel className="ion-text-wrap">
        <h2>
        <IonAvatar style={{ marginRight: 15 }}>
         <img src={message.source}/>
        </IonAvatar>
          {message.iconName}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
