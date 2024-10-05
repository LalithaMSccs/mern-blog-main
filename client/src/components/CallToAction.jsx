import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
          Expand Your Tech Knowledge
        </h2>
        <p className='text-gray-500 my-2'>
          Dive deeper into web development, data science, and more with our curated resources
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://roadmap.sh/" target='_blank' rel='noopener noreferrer'>
            Explore Tech Roadmaps
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img 
          src="https://businesstoys.in/assets/blog/full-stack-datascience-learning-path.png" 
          alt="Tech Learning Concept"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}