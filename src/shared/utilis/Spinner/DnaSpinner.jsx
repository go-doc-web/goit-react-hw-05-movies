import { ThreeDots, RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export const RotatingSpinner = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="26"
      visible={true}
    />
  );
};
