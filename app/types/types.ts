export interface ButtonProps {
  title: string;
  isLogin?: boolean;
}

export interface FormProps {
  heading: string;
  content?: string;
  children: React.ReactNode;
}

export interface InputProps {
  type: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface Props {
  title: string;
}

export interface LinkProps {
  linkHref: string;
  title: string;
  description: string;
}
