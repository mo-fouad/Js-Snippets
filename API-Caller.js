import axios from 'axios'

const APICaller = {
    getAPI:
        async (url) => {
            let respond = await axios.get(url).then(res => {
                let resCode = res.data.status.code;
                if (resCode === 200) {
                    return res
                } else if (resCode === 400) {
                    alert("sorry we can't find what you are looking for") // Not found
                } else if (resCode === 401) {
                    window.location.href = "/login"; // redirect to login
                } else if (resCode === 403) {
                    alert("Sorry you dont have Access to this page")// redirect to request Access
                } else if (resCode === 404) {
                    alert("sorry we can't find what you are looking for"); // redirect to 404
                }
            });

            return respond.data.content
        },

    updateAPI:
        async (url) => {

        },
    postAPI:
        async (url) => {

        },

    deleteAPI:
        async (url) => {

        }

    // todo :
    //    1 - create full crud operations
    //    2 - Create a respond handling function


};

export default APICaller;
