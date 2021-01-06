window.mockApiUrl =
"https://5ff1a6a4db1158001748b2bd.mockapi.io/pets/";

window.removePet = (id) => {
    fetch(`${window.mockApiUrl}${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(()=> {
        window.location.reload();
    })
};

window.openPetDetail = (id) => {
    console.log(id); // show details of the pet with given id
};
