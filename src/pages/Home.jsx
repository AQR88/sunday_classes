import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCoutries } from 'hooks';



export const Home = () => {

const { counries,error, loading} = useFetchCoutries();

  return (
    <Section>
      <Container>
        <h2>Home</h2>
      </Container>
    </Section>
  );
};
