import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByQuery } from 'hooks';

export const CountrySearch = () => {

const { countries, error, loading, handleSubmit} = useFetchByQuery();

  return (
    <Section>
      <Container>
      <SearchForm handleSubmit={handleSubmit}/>
      {loading && <Loader />}
        {error && <Heading textAlign="center">Something went wrong</Heading>}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
