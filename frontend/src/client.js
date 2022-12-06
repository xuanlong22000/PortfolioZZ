import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 't2prlkif',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skWr1eKAI7F7LkljwEfFnzkM46f1WU92BoPHh5OPi9t0WJNIdyhX4Fdlpf5ap1xIKwkkw1ftZbTXEBEhqSYIiO8CTDrRabv0YjekRF4IkmQwKrjfamv8YawBavVGGIu3wwwSddJodAjjFqb2acFP6FwfHYhjgHOcCZH5MUydidcLQZw8Ubiz',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
