import React from "react"

export const Checkbox = ({ label, value, onChange, id }) => {
  return (
    <div key={id} className="flex items-center mb-4">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
      />
      <label className="ml-2 text-sm text-gray-900">{label}</label>
    </div>
  )
}
