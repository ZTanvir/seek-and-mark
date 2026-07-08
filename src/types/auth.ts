export type SignInState = {
  success: boolean;
  message: string;
  inputs?: {
    email: string;
    password: string;
  };
};
