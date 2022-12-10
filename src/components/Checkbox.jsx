import React from "react"

export const Checkbox = ({ label, value, onChange, id }) => {
  return (
    <div key={id}>
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    </div>
  )
}
