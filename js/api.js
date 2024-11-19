const API_URL = "http://localhost:3000/api/sneakers";

// Obtener todos los sneakers
export const getSneakers = async() => {
    const response = await fetch(API_URL);
    return response.json();
};

// Obtener sneaker por id
export const getSneakersByID = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

// Crear Sneakers
export const addSneakers = async (sneakers) => {
    const response = await fetch(API_URL, { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sneakers)
    }); 
    return response.json();
};

// Actualizr Sneakers
export const updateSneakers = async (id, sneakers) => {
    const response = await fetch( `${API_URL}/${id}`, { 
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sneakers)
    }); 
    return response.json();
};

// Borrar un Sneakers
export const deleteSneakers = async (id) => {
    return fetch( `${API_URL}/${id}`, { 
        method: "DELETE",
    }); 
};

