import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface DivTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'blue' | 'grey' | 'green' | 'primary';
    href?: string;
}