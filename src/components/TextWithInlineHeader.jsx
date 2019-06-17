import React from 'react';

export default function TextWithInlineHeader (props) {
  const {heading, innerText} = props;
  const Type = props.headingType;

  return (
    <div className="c-text-with-inline-header--root">
      <Type>{`${heading}:`}&nbsp;<p>{innerText}</p></Type>
    </div>
  );
}