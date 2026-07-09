export type SignInState = {
  success: boolean;
  message: string;
  inputs?: {
    email: string;
    password: string;
  };
};

export type SignUpState = Omit<SignInState, "input"> & {
  inputs?: {
    username: string;
    email: string;
    password: string;
  };
};
