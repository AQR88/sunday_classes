import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCoutries } from 'hooks';

export const Home = () => {
  const { counries, error, loading } = useFetchCoutries();

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading textAlign="center">Something went wrong</Heading>}
        {counries.length > 0 && <CountryList countries={counries} />}
      </Container>
    </Section>
  );
};
