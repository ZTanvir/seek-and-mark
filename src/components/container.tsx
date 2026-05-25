type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1440px] mx-auto my-0 h-full">{children}</div>;
}
