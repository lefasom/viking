import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../db/firebase";
import { current_data } from "./dataSlice";
import { cardData } from "../db/data";

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

export async function add_card({
    title,
    price,
    description,
    features,
    image }) {
    try {
        // Add a new document to the collection
        const docRef = await addDoc(collection(db, "card"), {
            title,
            price,
            description,
            features,
            image
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

// export function addMultipleCards() {
//     cardData.forEach(async (card) => {
//         try {
//             await addDoc(collection(db, "card"), card); // Llama a la función add_card por cada objeto
           
//         } catch (error) {
//             console.error(`Error adding card: ${card.title}`, error);
//         }
//     });
// }

export async function delete_card(id) {
    try {
        await deleteDoc(doc(db, "card", id));
        console.log("Documento eliminado con ID: ", id);
    } catch (error) {
        console.error("Error eliminando documento: ", error);
    }
}
export async function get_card_by_id(id) {
    try {
        const docRef = doc(db, "card", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };  // Retorna los datos del documento
        } else {
            console.log("No existe el documento con ese ID");
        }
    } catch (error) {
        console.error("Error obteniendo el documento:", error);
    }
}
export async function update_card(id, { title, price, description, features, image }) {
    try {
        const docRef = doc(db, "card", id);

        // Actualiza el documento con los nuevos datos
        await updateDoc(docRef, {
            title,
            price,
            description,
            features,
            image
        });

        console.log("Documento actualizado con ID: ", id);
    } catch (error) {
        console.error("Error actualizando documento: ", error);
    }
}