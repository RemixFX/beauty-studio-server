import { RESTDataSource } from '@apollo/datasource-rest';

export interface IUserData {
  idInstance: string;
  apiTokenInstance: string;
}

interface IMessageWithUserData extends IUserData {
  chatId: string;
  message: string;
  quotedMessageId?: string;
  archiveChat?: boolean;
  linkPreview?: boolean;
}

interface ResponseMessage {
  idMessage: string
}

export class RESTGreenApi extends RESTDataSource {
  override baseURL = 'https://api.green-api.com/';

  async sendMessage({ ...props }: IMessageWithUserData): Promise<ResponseMessage> {
    const data = await this.post<ResponseMessage>(`waInstance${props.idInstance}/SendMessage/${props.apiTokenInstance}`,
      {
        body: JSON.stringify({
          chatId: props.chatId + '@c.us',
          message: props.message,
        })
      })
    return data
  }
}



