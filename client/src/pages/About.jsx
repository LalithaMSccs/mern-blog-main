import React from 'react';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font-semibold text-center my-7'>
            About Our Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to our blog! This platform is dedicated to sharing insights, 
              knowledge, and experiences across a wide range of topics. Our goal 
              is to create a space where ideas flourish and conversations thrive.
            </p>
            
            <p>
              Here, you'll find a diverse collection of articles covering everything 
              from technology and science to arts and culture. Our team of passionate 
              writers and guest contributors work hard to bring you fresh, engaging 
              content on a regular basis.
            </p>
            
            <p>
              We believe in the power of community and encourage our readers to 
              actively participate. Feel free to leave comments, share your thoughts, 
              and engage in discussions with fellow readers. Your perspectives enrich 
              our content and help create a vibrant, interactive environment.
            </p>

            <p>
              Whether you're here to learn, be inspired, or simply enjoy good writing, 
              we hope you'll find something that resonates with you. Thank you for 
              being part of our growing community. Happy reading!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}