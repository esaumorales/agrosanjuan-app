import { Icon } from "@iconify/react";
import Button from "./Button";

export default function Card({ image, title, description, buttonText, onClick }) {
    return (
        <div className="flex flex-col bg-white shadow-md rounded-2xl h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Image Container - Full Width */}
            <div className="h-56 w-96 overflow-hidden relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col p-6 grow">
                <div className="mb-6 grow space-y-3">
                    <h2 className="text-2xl font-bold text-primary font-headline tracking-tight">{title}</h2>
                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3">{description}</p>
                </div>

                <div className="mt-auto">
                    <Button
                        text={buttonText}
                        onClick={onClick}
                        variant="submit"
                        icon={<Icon icon="formkit:arrowright" width="16" height="16" />}
                        iconPosition="right"
                    />
                </div>
            </div>
        </div>
    );
}