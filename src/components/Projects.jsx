import React from 'react'

import { MainTitle, MainWrapper } from './shared'
import { ProjectCard } from './index'
import { projects } from '../constants'

const Projects = () => {
  return (
      <MainWrapper id='projects'>
        <div className='flex flex-col w-full items-center'>
          <MainTitle
            title="from concept to code — here's a showcase of solutions I've engineered that are as effective as they are engaging:"
            customCss="text-main text-center mb-16 max-w-[700px]"
          />
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </MainWrapper>
  )
}

export default Projects