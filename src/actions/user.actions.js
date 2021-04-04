import axios from "axios";

import firebase from  'firebase';

export const GET_USER = "GET_USER";


export const getUser = (email) => {
    return (dispatch) => {
      return axios
        .get("http://localhost:5000/etudiant-e96f9/us-central1/api/user")

        .then((res) => {
          console.log(res)
          dispatch({
               type: GET_USER, 
               payload:  res.data 
            });
        })
        .catch((err) => console.log(err));
    };
  };
 