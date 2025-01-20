import React from 'react';
import { Maincomponents } from '@/components/Maincomponents';
import { Question } from '@/components/Question';

const Page = () => {
  return (
    <div className='bg-red'>
      <Maincomponents/>
      <Question/>

    </div>

  );
};

export default Page;