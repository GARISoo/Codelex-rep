import './buttons.scss';
import Button from './buttonEl';

const Buttons = () => (
  <div className="buttons">
    <div className="buttons__row1">
      <Button text="Button" />
      <Button text="Button" />
      <Button text="Button" />
    </div>

    <div className="buttons__row2">
      <Button text="Button1" />
      <Button text="Button2" />
      <Button text="Button3" />
    </div>
  </div>
);

export default Buttons;
