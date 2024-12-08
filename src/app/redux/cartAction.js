import { add_cart, delete_cart } from "./cartSlice";

export function set_cart(data) {
    return async (dispatch) => {
        try {
            dispatch(add_cart(data))
        } catch (error) {
            // Manejar cualquier error que ocurra durante la eliminación del documento
            console.error("Error al eliminar el documento:", error);
        }
    };
}


export function discard(data) {
    return async (dispatch) => {
        try {
            console.log(data)
            dispatch(delete_cart(data))
        } catch (error) {
            // Manejar cualquier error que ocurra durante la eliminación del documento
            console.error("Error al eliminar el documento:", error);
        }
    };
}


