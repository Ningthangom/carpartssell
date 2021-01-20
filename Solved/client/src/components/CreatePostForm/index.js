import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePostForm() {
  const makeRef = useRef();
  const yearRef = useRef();
  const modelRef = useRef();
  const partRef = useRef();
  const detailRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      make: makeRef.current.value,
      year: yearRef.current.value,
      model: modelRef.current.value,
      part: partRef.current.value,
      detail: detailRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value

    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    makeRef.current.value = "";
    yearRef.current.value = "";
    modelRef.current.value="";
    partRef.current.value="";
    detailRef.current.value="";
    priceRef.current.value="";
    imageRef.current.value="";
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Post car part</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={makeRef} placeholder="Make" />
        <textarea className="form-control mb-5" required ref={yearRef} placeholder="year" />
        <input className="form-control mb-5" ref={modelRef} placeholder="Model" />
        <input className="form-control mb-5" ref={partRef} placeholder="Part name" />
        <textarea className="form-control mb-5" required ref={detailRef} placeholder="detail" />
        <input className="form-control mb-5" ref={priceRef} placeholder="price" />
          <p>click choose file to upload image</p>
        <input type="file" id="myFile"  ref={imageRef} name="filename" placeholder="upload image"/>
        <br></br>  
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
