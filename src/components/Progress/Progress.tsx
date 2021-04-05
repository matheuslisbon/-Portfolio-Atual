import React from 'react'
import ProgressDiv from './styled'
interface ProgressProps {
  borderName: string
  skills: string
  imgLink: string
  colorBk: string
  text: string
}
export const Progress: React.FC<ProgressProps> = ({
  borderName,
  skills,
  imgLink,
  colorBk,
  text
}) => {
  return (
    <ProgressDiv>
      <div className="perfil">
        <p style={{ borderBottom: `3px solid ${borderName}` }}>{skills}</p>
        <img src={imgLink} alt="" />
      </div>

      <div className="containerProgress">
        <div
          style={{ width: '100%', background: `${colorBk}` }}
          className="progress-bar"
        >
          {skills} / {text}
        </div>
        <div className="ppp"></div>
      </div>
    </ProgressDiv>
  )
}
