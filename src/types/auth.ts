export type SignInState = {
  success: boolean;
  message: string;
  inputs: {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
  };
};
