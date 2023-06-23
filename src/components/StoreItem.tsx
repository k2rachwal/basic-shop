import { Card } from "react-bootstrap"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name , price, imgUrl}: StoreItemProps) {
return (
    <Card>
        <Card.Img variant='top' src={imgUrl} height='200px' style={{objectFit: 'cover'}}/>
        <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
        </Card.Body>
    </Card>
)
}