import SVGIcon from '../common/SVGIcon';

interface WrapperProps {
    children: React.ReactNode
}



export function Wrapper({ children }: WrapperProps) {
    return (
        <div
            className="min-h-screen bg-black text-white relative overflow-hidden pb-44"
        >
             <SVGIcon
                iconName="wrapperBg"
                useDiv
                 className="absolute -top-24 right-5  "
                  />
            <div className="container mx-auto px-4 py-16 ">
                {children}
            </div>
        </div>
    )
}
