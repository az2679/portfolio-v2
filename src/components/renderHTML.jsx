import { Fragment } from 'react';

const RenderSpace = ({ text }) => {
  const lines = text.split('<br />').map((line, index) => (
      <Fragment key={index}>
        {line}
        {index <text.split('<br />').length-1 && <br />}
      </Fragment>
    ));

    return <>{lines}</>;
};

export default RenderSpace;

const RenderBold = ({ text }) => {
  const parts = text.split('<b>').map((part, index) => {
    if (index === 0) return part;
    const [boldText, remaining] = part.split('</b>');
    return (
      <Fragment key={index}>
        <b>{boldText}</b>
        {remaining}
      </Fragment>
    )
  });
  return parts;
};

export { RenderBold };