import React from 'react';

export const handleMixedFonts = (content: string, numberFontClass = "font-instrumentSans"): (string | JSX.Element)[] => {
    // Split content into text and number segments
    const segments = content.split(/(\d+)/g);

    return segments.map((segment, index) => {
        if (/^\d+$/.test(segment)) {
            return (
                <span key={index} className={`${numberFontClass} tracking-normal font-bold`}>
                    {segment}
                </span>
            );
        }
        return segment;
    });
};
