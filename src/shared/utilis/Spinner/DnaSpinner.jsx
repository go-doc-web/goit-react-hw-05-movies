import { ThreeDots, RotatingLines } from 'react-loader-spinner';

// import css from './Spinner.module.css';

export const Spinner = () => {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export const RotatingSpinner = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="32"
      visible={true}
    />
  );
};
