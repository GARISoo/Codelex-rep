import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { resetCart, resetItemCounter, resetSubTotal } from '../../redux/productsReducer';
import { AppDispatch, RootState } from '../../store';
import './Header.scss';

const Header = () => {
  const itemCount = useSelector((state: RootState) => state.products.itemCounter);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink
          className="header__nav-link"
          to="/catalog"
          onClick={() => {
            dispatch(resetCart());
            dispatch(resetItemCounter());
            dispatch(resetSubTotal());
          }}
        >
          Catalog
        </NavLink>

        {itemCount !== 0 && (
        <div className="header__nav-right">
          <NavLink className="header__nav-link" to="/cart">
            <div>
              <span className="header__count">{itemCount}</span>
              <span className="nav__icon" />
            </div>
          </NavLink>
        </div>
        )}

      </nav>
    </header>
  );
};

export default Header;
