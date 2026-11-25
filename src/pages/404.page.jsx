import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CustomHead from '@src/components/dom/CustomHead';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <CustomHead title="Page not found | ECOD" description="The requested ECOD portfolio page could not be found." canonicalPath="/404" noIndex />;
}
