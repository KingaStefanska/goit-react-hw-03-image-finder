import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.overlay}>
      <Grid
        height="80"
        width="80"
        color="rgb(102, 34, 240)"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        className={css.loader}
        visible={true}
        text="Loading..."
      />
    </div>
  );
};

export default Loader;
