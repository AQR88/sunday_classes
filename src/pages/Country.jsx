import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useFetchCountry } from 'hooks';

export const Country = () => {
  const { country, error, loading } = useFetchCountry();

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading textAlign="center">Something went wrong</Heading>}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
