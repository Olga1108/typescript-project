import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Htag, Ptag, DivTag, Rating } from '../components';
import styles from '../styles/Home.module.css';
import { withLayout } from '../components/Layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Htag tag='h1'>Title</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <Ptag size='l'>Big</Ptag>
      <Ptag size='m'>Middle</Ptag>
      <Ptag size='s'>Little</Ptag>
      <DivTag size='s' color='primary'>Small</DivTag>
      <Rating isEditable={true} rating={rating} setRating={setRating}/>
    </>
  )
};

export default withLayout(Home)