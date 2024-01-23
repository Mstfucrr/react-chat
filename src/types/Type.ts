export interface IChatUser {
  name: string
  uid: number
  photoURL: string
}

export interface IChatMessage {
  id: number
  message: string
  createdAt: Date
  from: IChatUser
  to: IChatUser
}
