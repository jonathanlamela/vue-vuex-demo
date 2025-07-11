
export type CartState = {
    items: { [id: string]: ProductItem }
}

export type ProductItem = {
    productCode: string;
    name: string;
    price: number;
    quantity: number;
}

export type AddItemPayload = {
    item: ProductItem
}

export type RemoveItemPayload = {
    item: ProductItem
}

export type IncreaseQtyPayload = {
    item: ProductItem
}

export type DecreaseQtyPayload = {
    item: ProductItem
}
