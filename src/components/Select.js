import React from 'react';

const Select = ({ loading, value, setValue, results }) => {
  return (
    <select
      disabled={loading}
      value={value}
      onChange={e => {
        setValue(e.currentTarget.value);
      }}
    >
      {results.features.map(({ attributes }) => (
        <option key={attributes.OBJECTID} value={attributes.Title}>
          {attributes.Title}
        </option>
      ))}
    </select>
  );
};

export default Select;
