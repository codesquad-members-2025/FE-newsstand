import styled from '@emotion/styled'

interface EditDateProps {
  editDate: string
}

function EditDate({ editDate }: EditDateProps) {
  return <Text>{editDate}</Text>
}

const Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: rgba(95, 110, 118, 1);
`

export default EditDate
