import { useState } from 'react';
import PropTypes from 'prop-types';
import { VscSearch, VscSearchStop } from 'react-icons/vsc';

import { RotatingSpinner } from '../../shared/utilis/Spinner/DnaSpinner';

import css from './MovieSearchForm.module.css';

const MovieSearchForm = ({ loading, isBtnActive, onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  const { search } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        onChange={handleChange}
        className={css.input_search}
        placeholder="type here"
        type="text"
        name="search"
        value={search}
        required
      />
      <button className={css.submit_btn} type="submit" disabled={!isBtnActive}>
        {isBtnActive ? <VscSearch /> : <VscSearchStop />}
      </button>
      <div className={css.loading}>{loading && <RotatingSpinner />}</div>
    </form>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  isBtnActive: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
