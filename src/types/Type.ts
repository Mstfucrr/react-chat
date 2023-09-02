export interface IChatUser {
  name: string;
  uid: number;
  photoURL: string;
}

export interface IChatMessage {
  id: string;
  message: string;
  createdAt: Date;
  from: IChatUser;
  to: IChatUser;
}