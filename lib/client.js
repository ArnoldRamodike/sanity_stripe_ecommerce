import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: 'h8ts2pp6',
  dataset: 'production',
  apiVersion: '2022-03-09',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);