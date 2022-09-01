import { ChangeEventHandler } from 'react';
import Styles from './index.module.css';

const ToggleSwitch = ({
  name,
  isOn,
  handleToggle,
}: {
  name: string;
  isOn: boolean;
  handleToggle: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className={Styles['switch-container']}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={Styles['switch-checkbox']}
        id={`${name}`}
        type="checkbox"
      />
      <label className={Styles['switch-label']} htmlFor={`${name}`}>
        <span className={Styles['switch-button']} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
