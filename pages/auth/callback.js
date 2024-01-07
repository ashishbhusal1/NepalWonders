// pages/auth/callback.js
import { getSession } from 'next-auth/react';

export default function Callback() {
  return <div>Callback Page</div>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    // Redirect authenticated users to the home page
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
