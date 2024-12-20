import { collection, getDocs } from "firebase/firestore";
import { db } from "../db/firebase";
import { current_data } from "./dataSlice";

export function get_card() {
    return async (dispatch) => {
        try {
            // Ejecuta la consulta a la colección
            const querySnapshot = await getDocs(collection(db, 'card'));
            const docs = [];

            // Itera sobre los documentos obtenidos
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            console.log(docs)
            dispatch(current_data(docs))

        } catch (error) {
            // Captura cualquier error y lo muestra en la consola
            console.error("Error al obtener los documentos:", error);
        }
    };
}
