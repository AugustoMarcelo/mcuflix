import React, {
  useState, ChangeEvent, FormEvent,
} from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';

import DefaultLayout from '../DefaultLayout';
import { Input, Button } from '../../components/Form';

import {
  Content, Form, Title, InputGroup,
} from './styles';

interface ICreateMovie {
  title: string;
  phase?: number | undefined;
  trailer_url?: string;
  cover_url: string;
}

const CreateMovie: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState<ICreateMovie>({
    title: '',
    phase: undefined,
    trailer_url: '',
    cover_url: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const registeredMovies = localStorage.getItem('@mcuflix:movies');
      let parsedRegisteredMovies = [];

      if (registeredMovies) {
        parsedRegisteredMovies = JSON.parse(registeredMovies);
      }

      const newMovie = { id: uuid(), ...formData };
      const newRegisteredMovies = [...parsedRegisteredMovies, newMovie];

      localStorage.setItem('@mcuflix:movies', JSON.stringify(newRegisteredMovies));

      setFormData({
        title: '',
        phase: undefined,
        trailer_url: '',
        cover_url: '',
      });
      setShowMessage(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <Content>
        <Title>Movies Registration</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              label="Title"
              name="title"
              onChange={handleInputChange}
              value={formData.title}
            />
            <Input
              label="Phase"
              name="phase"
              type="number"
              onChange={handleInputChange}
              value={formData.phase}
            />
          </InputGroup>
          <Input
            label="Trailer URL"
            name="trailer_url"
            type="url"
            onChange={handleInputChange}
            value={formData.trailer_url}
          />
          <Input
            label="Cover URL"
            name="cover_url"
            type="url"
            onChange={handleInputChange}
            value={formData.cover_url}
          />

          <Button title="Save" type="submit" />
        </Form>
        {showMessage && (
          <Link to="/" className="box-message">
            <strong>Movie successfully registered! Click to return to home page.</strong>
          </Link>
        )}
      </Content>
    </DefaultLayout>
  );
};

export default CreateMovie;
