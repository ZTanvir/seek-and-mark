type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto h-full max-w-7xl">{children}</div>;
}
