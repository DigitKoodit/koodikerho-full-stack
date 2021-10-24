import { useState } from 'react';
import ReactDOM from 'react-dom';

const CreateBlogModal = ({ createPost, closeModal }) => {

  const [state, setState] = useState({
    url: "",
    title: "",
    body: "",
  });

  return process.browser && ReactDOM.createPortal(
    <div className="create-blog-modal">
      <div className="create-blog-wrapper">
        <div className="close-button-wrapper"><button className="close-button" onClick={closeModal}><i>x</i></button></div>
        <form>
          <label htmlFor="url">Kuvan url</label>
          <input type="text" name="url" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} value={state.url} />
          <label htmlFor="title">Otsikko</label>
          <input type="text" name="title" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} value={state.title} />
          <label htmlFor="body">Teksti</label>
          <textarea name="body" id="body" onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })} value={state.body} />
          <button className="submit-button" onClick={() => createPost({ ...state, headerImg: state.url })}>Luo blogi</button>
        </form>
      </div>
    </div>, document.body
  )
}

export default CreateBlogModal;