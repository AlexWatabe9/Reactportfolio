import React from 'react';
import { Container, Card } from 'react-bootstrap';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the first project',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is the second project',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is the third project',
  },
];

const Projects = () => {
  return (
    <Container>
      <h1 className="mt-4">Projects</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <Card key={project.id} className="m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
