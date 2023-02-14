import React from "react";
import { DivTagProps } from "./DivTag.props";
import styles from './DivTag.module.css';
import cn from 'classnames';

export const DivTag = ({ size = 'm', children, className, ...props }: DivTagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.p, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
            })}
            {...props}
        >
            {children}
        </div>
    )
}