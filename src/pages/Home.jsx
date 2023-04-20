import Container from 'react-bootstrap/Container';
import MultiStepForm from '../components/MultiStepForm';

const Home = () => (
  <main>
    <div className="bg-light p-5 mb-5">
      <h1>CodeBuddy Assignment</h1>
    </div>
    <Container>
      <MultiStepForm />
    </Container>
  </main>
);

export default Home;
