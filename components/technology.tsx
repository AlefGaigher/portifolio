import { ReactNode } from "react";

interface CardContainerProps {
    icon: ReactNode; 
    title: string;
    description: string;
}

export function Technology({ icon, title, description }: CardContainerProps) {
    return (
        <div className="flex items-center">
            <div className="bg-blue-primary text-white flex items-center justify-center p-3 rounded text-5xl">
                {icon}
            </div>
            <div className="ml-3 text-start">
                <h3 className="text-base font-semibold text-title-card">{title}</h3>
                <p className="text-xs text-subtitle-card ">{description}</p>
            </div>
        </div>
    );
}
