import type { CartState, AddItemPayload, RemoveItemPayload, IncreaseQtyPayload, DecreaseQtyPayload } from '../types'
import { createStore } from 'vuex'


const cartStore = createStore<CartState>({
    actions: {
        addItem(context: any, payload: AddItemPayload) {
            context.commit('addItem', payload)
        },
        removeItem(context: any, payload: RemoveItemPayload) {
            context.commit('removeItem', payload)
        },
        increaseQty(context: any, payload: IncreaseQtyPayload) {
            context.commit('increaseQty', payload)
        },
        decreaseQty(context: any, payload: DecreaseQtyPayload) {
            context.commit('decreaseQty', payload)
        }
    },
    mutations: {
        addItem(state: CartState, payload: AddItemPayload) {
            if (Object.keys(state.items).indexOf(payload.item.productCode) == -1) {
                state.items[payload.item.productCode] = payload.item;
                state.items[payload.item.productCode].quantity += 1;
            }
        },
        removeItem(state: CartState, payload: RemoveItemPayload) {
            delete state.items[payload.item.productCode]
        },
        increaseQty(state: CartState, payload: IncreaseQtyPayload) {
            state.items[payload.item.productCode].quantity! += 1;
        },
        decreaseQty(state: CartState, payload: DecreaseQtyPayload) {
            state.items[payload.item.productCode].quantity! -= 1;

            if (state.items[payload.item.productCode].quantity == 0) {
                delete state.items[payload.item.productCode]
            }

        }
    },
    getters: {
        getCartItems(state: CartState) {
            return state.items;
        },
        getTotal(state: CartState) {
            var total = 0;
            Object.keys(state.items).forEach(key => {
                var productRow = state.items[key];
                total += productRow.price * productRow.quantity!;
            });
            return total;
        }
    },
    state: {
        items: {}
    }
})

export default cartStore;




