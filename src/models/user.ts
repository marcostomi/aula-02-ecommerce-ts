export type UserRole = "ADMIN" | "CUSTOMER";

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}