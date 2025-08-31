export interface IUser extends Document {
    name:string;
    email:string;
    phone:string;
    password:string;
}
export interface UserInstanceMethods {
  hashPassword(plainPassword: string): string;
}