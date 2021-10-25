import { useState } from 'react';
import ReactDOM from 'react-dom';

const CreateBlogModal = ({ createPost, closeModal }) => {

  const [state, setState] = useState({
    headerImg: "",
    title: "",
    body: "",
  });

  return process.browser && ReactDOM.createPortal(
    <div className="create-blog-modal">
      <div className="create-blog-wrapper">
        <div className="close-button-wrapper"><button className="close-button" onClick={closeModal}><i>x</i></button></div>
        <form>
          <label htmlFor="headerImg">Kuvan url</label>
          <input type="text" name="headerImg" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} value={state.headerImg} />
          <label htmlFor="title">Otsikko</label>
          <input type="text" name="title" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} value={state.title} />
          <label htmlFor="body">Teksti</label>
          <textarea name="body" id="body" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} value={state.body} />
          <button className="submit-button" onClick={(e) => {e.preventDefault();createPost({ ...state });closeModal();}}>Luo blogi</button>
        </form>
      </div>
    </div>, document.body
  )
}

export default CreateBlogModal;
