import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../contex/ShoppingCartContex";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name , price, imgUrl}: StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity = getItemQuantity(id);


    return (
    <Card>
        <Card.Img variant='top' src={imgUrl} height='200px' style={{objectFit: 'cover'}}/>
        <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
            {quantity === 0 
            ? 
            (<Button className="w-100" onClick={() => increaseCartQuantity(id)}>Add to cart</Button>) 
            : 
            (<div className="d-flex align-items-center flex-column " style={{gap: ".5rem"}}>
                <div className="d-flex align-items-center">
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <div className="d-flex align-items-center">
                        <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm">
                Remove
                </Button>
            </div>)}
        </div>
        </Card.Body>
    </Card>
)
}