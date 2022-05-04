import react from 'react'
import { FootBook } from './Glossary'
import { NavNap } from './Navigation'
import { CodeProps } from './Colormaker'
import { ReaderProps } from '../pages/s/[statementID]'
import Stack from 'react-bootstrap/Stack'

const WorkFoot: React.FC<{from: ReaderProps, glossary: CodeProps[]}> = ({ from, glossary }) => {
 return (
  <Stack direction='horizontal' id='workbar'>
  </Stack>
 )
}

export default WorkFoot 