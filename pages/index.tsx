import React from 'react';
import Image from 'next/image';
import { Button, Htag, Ptag } from '../components';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
  
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <Ptag size='l'>Big</Ptag>
      <Ptag size='m'>Middle</Ptag>
      <Ptag size='s'>Little</Ptag>
    </>
  )
};
