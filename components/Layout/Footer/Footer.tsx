import React from "react";
import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {

    return (
      <footer className={cn(className, styles.footer)} {...props}>
        <div>
          ScrumLaunch &copy; 2022 - {format(new Date(), 'yyyy')} All rights reserved
        </div>
        <a href="#" target="_blank">User agreement</a>
        <a href="#" target="_blank">Privacy Policy</a>
      </footer>
    )
}