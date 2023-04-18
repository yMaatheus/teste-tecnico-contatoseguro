export interface IAuthUserJWT {
  id: number,
  name: string,
  email: string,
  phone?: string,
  dateOfBirth?: Date,
  cityOfBirth?: string,
  createdAt?: Date,
  updatedAt?: Date,
}