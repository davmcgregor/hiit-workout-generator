import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-blue-200 text-blue-900 h-screen w-full'>
      <div class='mt-2 mr-3 text-lg font-bold underline absolute top-0 right-0'>
        <Link to='/'>Back</Link>
      </div>
      <div class='flex flex-col h-full items-center'>
        <Link to='/' class='text-center font-extrabold text-3xl italic mt-6'>
          {' '}
          Hiit Workout Generator
        </Link>
        <article class='prose lg:prose-xl'>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
