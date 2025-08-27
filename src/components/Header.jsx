import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
} from 'react-bootstrap';

import { BsCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { AiFillDelete } from 'react-icons/ai';
import { useCart } from '../context/useCart';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = useCart();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <NavbarBrand>
          <Link to="/" className="brandLink">
            {' '}
            Shopping Cart
          </Link>
        </NavbarBrand>
        <NavbarText className="search">
          <FormControl
            placeholder="Search Product"
            className="m-auto "
            onChange={(e) => {
              productDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value,
              });
            }}
            style={{ width: 500 }}
          />
        </NavbarText>
        <Nav>
          <Dropdown>
            <DropdownToggle>
              <BsCartCheckFill style={{ width: '20px' }} />
              <Badge>{cart.length}</Badge>
            </DropdownToggle>

            <DropdownMenu
              align="end"
              title="Dropdown end"
              id="dropdown-menu-align-end"
              className="Menu"
            >
              {cart.length > 0 ? (
                <>
                  {' '}
                  {cart.map((prod) => (
                    <span className="mainCart" key={prod.id}>
                      {' '}
                      <img
                        height={30}
                        width={30}
                        className="cartImg"
                        src={prod.image}
                        alt={prod.name}
                      />{' '}
                      <div className="cartDetails">
                        {' '}
                        <span> Price:${prod.price.split('.')[0]}</span>
                        <span>{prod.name}</span>
                        <span>Qty: {prod.length}</span>
                      </div>{' '}
                      <span>
                        <AiFillDelete
                          className="cartDelete"
                          onClick={() => {
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod,
                            });
                          }}
                        />
                      </span>
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button className="GoCart">Go to Cart</Button>
                  </Link>
                </>
              ) : (
                <span className="emptyCart">Cart is Empty</span>
              )}
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
