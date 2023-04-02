import React, { useContext } from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/Context'
export default function Header() {
    const { state: { cart }, dispatch } = useContext(CartContext)
    const {
        productDispatch,
        productState: {searchQuery},
      }  = useContext(CartContext)
console.log(searchQuery);
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}> Shoppong cart</Link>

                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="search a product"
                        className='m-auto' 
                        onChange={(e)=>productDispatch({
                            type: 'FILTER_BY_SEARCH',
                            payload: e.target.value
                           
                        })}
                        >
                         

                    </FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart>

                            </FaShoppingCart>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cart.length > 0 ?
                                (
                                    <>
                                        {cart.map((item) => (
                                            <span className="cartitem" key={item.id}>
                                                <img
                                                    src={item.image}
                                                    className="cartItemImg"
                                                    alt={item.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{item.name}</span>
                                                    <span>₹ {item.price}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: item,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                        <Link to={'/cart'}>
                                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                                Go To Cart
                                            </Button>
                                        </Link>
                                    </>
                                ) :
                                (
                                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                                )}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>


            </Container>

        </Navbar>
    )
}
