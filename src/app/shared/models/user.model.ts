export interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  password?: string;
  createdAt?: Date;
}
