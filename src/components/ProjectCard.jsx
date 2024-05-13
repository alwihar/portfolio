import React from 'react'

import { ExternalLink, SecondTitle } from './shared'

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0

  return (
    <div className={`${isReversed ? 'flex-row-reverse' : ''} flex justify-between my-8 w-full gap-10 flex-col lg:flex-row`}>
      <div className={`${isReversed ? 'items-end' : ''} flex flex-col`}>
        <SecondTitle title={project.name} customCss='text-secondary font-denver font-bold'/>
        <p className={`${isReversed ? 'text-end' : ''} text-main`}>{project.description}</p>
        <ExternalLink
          customCss={`${isReversed ? 'text-end' : ''} pt-2 text-secondary`}
          link={project.link}
          content='check it out'
        />
      </div>
      <div className="deck relative min-h-[200px] sm:min-h-[300px] min-w-[600px]">
        {project.images?.map((image, index, arr) => (
          <div
            key={index}
            className={`card sm:w-[470px] sm:h-[270px] w-[200px] h-[150px] absolute inset-0 bg-cover bg-center rounded-lg shadow-lg transition-all duration-300
                        transform cursor-pointer
                        ${'style-card-' + (arr.length - index)}`}
            style={{ backgroundImage: `url(${image})`, zIndex: index * 10 }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard