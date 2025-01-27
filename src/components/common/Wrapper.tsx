import SVGIcon from '../common/SVGIcon';

interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="min-h-screen bg-black text-white relative w-full overflow-hidden ">
      <SVGIcon iconName="wrapperBg" useDiv className="absolute w-full " />
      <div className="container mx-auto  py-16 ">{children}</div>
    </div>
  );
}
