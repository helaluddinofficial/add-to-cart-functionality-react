import {
  Badge,
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
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
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
            style={{ width: 500 }}
          />
        </NavbarText>
        <Nav>
          <Dropdown>
            <DropdownToggle>
              <BsCartCheckFill style={{ width: '20px' }} />
              <Badge>{cart.length}</Badge>
            </DropdownToggle>

            <DropdownMenu className="max-w-300">
              {cart.length > 0 ? (
                <>
                  {' '}
                  {cart.map((prod) => (
                    <span className='mainCart' key={prod.id}>
                      {' '}
                      <img height={30} width={30} className='cartImg' src={prod.image} alt={prod.name} />{' '}
                      <div className='cartDetails'>
                        {' '}
                        <span> Price:{prod.price.split('.')[0]}</span>
                        <span>{prod.name }</span>
                      </div>{' '}
                      <span><AiFillDelete className='cartDelete' onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}/></span>
                    </span>
                  ))}{' '}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
