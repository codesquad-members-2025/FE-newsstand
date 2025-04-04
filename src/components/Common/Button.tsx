import styled from '@emotion/styled'

interface TextButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
  style?: {
    fontWeight?: string | number
    fontSize?: string
    color?: string
  }
}

function TextButton({ text, onClick, disabled = false }: TextButtonProps) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  )
}

interface ButtonStyleProps {
  fontWeight?: string | number
  fontSize?: string
  color?: string
}

const Button = styled.button<ButtonStyleProps>`
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color }) => color || 'inherit'};
`
