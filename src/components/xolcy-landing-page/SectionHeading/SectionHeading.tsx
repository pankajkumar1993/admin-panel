import React from 'react'
import "./SectionHeading.scss"
interface SectionHeadingProps {
  subTitle?: string,
  title: string,
  description: string,
  align?: 'left' | 'center' | 'right' | 'justify',
  marginBottom?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subTitle, title, description, align = 'left', marginBottom='mb-5' }) => {
  return (
    <div className={`text-${align}`}>
      <p className='subtitle-text text-uppercase fw-medium mb-1'>{subTitle}</p>
      <h2 className="mb-2">{title}</h2>
      <p className={`${marginBottom} text-muted`}>{description}</p>
    </div>
  )
}

export default SectionHeading