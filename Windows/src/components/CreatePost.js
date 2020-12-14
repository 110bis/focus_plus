import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const CreatePost = (props) => {
    
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleOnSubmit = async (event) => {
      event.preventDefault();
  
      try {
          if (username.trim() !== '' && message.trim() !== '') {
            setErrorMsg('');
            await axios.post(`${API_URL}/postMsg`, {
              username: username,
              message: message,
              password: password
            });
            props.history.push('/forum');
          } else {
            setErrorMsg("S'il vous plaît entrez un nom d'utilisateur et un mot de passe.");
          }
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      };
  
    return (
      <React.Fragment>
         <Row>
             <Col> 
             <Button href="/forum">Revenir au forum</Button>
             </Col>
         </Row> 
        <Form className="search-form" onSubmit={handleOnSubmit}>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <Row>
            <Col>
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  name="username"
                  value={username || ''}
                  placeholder="Entrez votre nom d'utilisateur"
                  onChange={handleUsernameChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="password">
                <Form.Control
                  type="text"
                  name="message"
                  value={message || ''}
                  placeholder="Entrez votre message"
                  onChange={handleMessageChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="password">
                <Form.Control
                  type="text"
                  name="password"
                  value={password || ''}
                  placeholder="Entrez votre mot de passe pour valider votre post"
                  onChange={handlePasswordChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Poster mon message
          </Button>
        </Form>
      </React.Fragment>
    );
  };
  
  export default CreatePost;