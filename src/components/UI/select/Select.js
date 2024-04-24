/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import styled from 'styled-components'

function Select({
  value,
  variant,
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
}) {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <BoxStyled variant={variant}>
      <Form fullWidth>
        <SelectMui onChange={handleChange} value={value}>
          {options?.map((item) => {
            return (
              <MenuItem value={getOptionValue(item)} key={item.id}>
                {getOptionLabel(item)}
              </MenuItem>
            )
          })}
        </SelectMui>
      </Form>
    </BoxStyled>
  )
}
export default Select

const Form = styled(FormControl)`
  & > div {
    width: fit-content;
    height: 39px;
  }
`

const BoxStyled = styled(Box)`
  height: 120px;
  background: #ffffff;
  border-radius: 2px;
  & fieldset {
    border: none !important;
  }
  @media (max-width: 375px) {
    width: 343px;
    height: 262px;
    background: #ffffff;
    border-radius: 2px;
    margin: 20px;
  }
`
