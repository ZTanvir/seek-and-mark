type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto my-0 h-full max-w-7xl">{children}</div>;
}
