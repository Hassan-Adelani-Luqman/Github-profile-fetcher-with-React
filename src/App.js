import React, {useState, useEffect} from 'react';
import { Form, Card, Icon, Image } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


function App() {
  const [data, setData] = useState({});
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData("https://api.github.com/users/Hassanadelani1").then(setData);
  }, []);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(`https://api.github.com/users/${userInput}`)
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <div>
      <div className="navbar">Github Search</div>
      <div className='search'>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder="Github user" name="github user" onChange={handleSearch}/>
            <Form.Button content="Search"/>
          </Form.Group>
        </Form>
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className='card'>
          <Card>
            <Image src={data.avatar_url} width="250px" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{data.name}</Card.Header>
              <Card.Header>{data.login}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a href={`https://github.com/${data.login}?tab=followers`}>
                <Icon name='user'/>
                {data.followers} followers
              </a>
            </Card.Content>
            <Card.Content extra>
              <a href={`https://github.com/${data.login}?tab=repositories`}>
                <Icon name='user'/>
                {data.public_repos} Repos
              </a>
            </Card.Content>
            <Card.Content extra>
              <a href={`https://github.com/${data.login}?tab=following`}>
                <Icon name='user'/>
                {data.following} following
              </a>
            </Card.Content>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
