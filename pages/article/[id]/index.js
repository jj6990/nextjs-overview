import { server } from '../../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';
import Image from 'next/image';

const article = ({ article }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  const localImage = '/industry.png';
  const localImageBlurred = '/industry-blurred.jpg';

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Image
        src={article.imageUrl}
        placeholder='empty'
        alt='Picture of the author'
        width={500}
        height={500}
      />
      <Image
        src={localImage}
        blurDataURL={localImageBlurred}
        placeholder='blur'
        alt='Picture of the author'
        width={500}
        height={500}
      />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article;
