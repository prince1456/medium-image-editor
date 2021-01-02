// const DynamicComponentWithNoSSR = dynamic(
//   () => import("../components/image-editor"),
//   { ssr: false }
// );
// export default function Home(props) {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <DynamicComponentWithNoSSR />
//       </main>
//     </div>
//   );
// }

import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/image-editor"),
  { ssr: false }
);
const Home = () => <DynamicComponentWithNoSSR />;
export default Home;