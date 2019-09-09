import React, { Component } from 'react'
import { addVideo } from '../api';
import PropTypes from 'prop-types';

const parseYoutubeUrl = (url) => {
  const match = url.match(/[?&]([^=#]+)=([^&#]*)/);
  return match && match[2];
};

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      showSending: false,
      title: '',
      url: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (field) => {
    return (event) => {
      this.setState({
        [field]: event.target.value
      })
    }
  }
  validation(app){
    if (app.title.length > 0 && app.url.length > 0 && app.description.length > 2) {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit(e){
    e.preventDefault();
    const { onClose } = this.props;
    const token = parseYoutubeUrl(this.state.url || '');
    if (this.validation(this.state) && token){
      this.setState({showSending:true})
      addVideo({
        title: this.state.title,
        description:this.state.description,
        url:this.state.url,
        thumbnail:`https://img.youtube.com/vi/${token}/maxresdefault.jpg`,
        embed:`https://img.youtube.com/embed/${token}`
      }).then(onClose(true));
    }else{
      this.setState({
        hasError:true
      });
    }
  }
  render() {
    const { hasError, showSending, title, url, description } = this.state;
    const minLength = 3;
    const maxLength = 200;
    const text = 'text';
    const sending = 'Generando tu nuevo video ...';
    const fielderrors = 'Algunos campos están vacíos o contienen valores incorrectos.';
    const {onClose} = this.props;
    return (<div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose(false)}>&times;</span>
          <h2>Crear nuevo video</h2>
          {showSending && (<span className="success"> {sending} </span>)}
          {hasError && (<div className="error">{fielderrors}</div>) }
          <form>
            <label>Titulo</label>
            <input
              type={text}
              minLength={minLength}
              maxLength={maxLength}
              value={title} 
              onChange={this.handleChange("title")}
              required
            />
            <label>URL</label>
            <input
              type={text}
              minLength={minLength}
              maxLength={maxLength}
              value={url}
              onChange={this.handleChange("url")}
              required
              />
            <label>Descipción</label>
            <textarea
              value={description}
              onChange={this.handleChange("description")}
              required
            />
            <input
              type="submit"
              onClick={this.handleSubmit}
              value="Submit"
              disabled={showSending}
            />
          </form>
        </div>
      </div>);
  }
}

Add.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Add;
