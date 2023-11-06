import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './utils/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('api/auth/signin');
  }

  return (
    <div className="flex h-screen items-center justify-center">
      This is a protected page
    </div>
  );
}
