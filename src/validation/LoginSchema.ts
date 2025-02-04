import { create } from "zustand";

type LoginFormState = {
  email: string;
  password: string;
  errors: {
    email?: string;
    password?: string;
  };
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  validateFields: () => boolean;
};

export const useLoginFormStore = create<LoginFormState>((set, get) => ({
  email: "",
  password: "",
  errors: {},
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  validateFields: () => {
    const { email, password } = get();
    let errors: LoginFormState["errors"] = {};

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.email = "Email inválido";
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial";
    }

    set({ errors });
    return Object.keys(errors).length === 0;
  },
}));
