import ErrorCodeClient from '@/components/ErrorCodeClient';

export async function generateStaticParams() {
  return [{ code: 'F21' }];
}

export default function Page({ params }: { params: { code: string } }) {
  return <ErrorCodeClient brand="kitchenaid" category="washer" code={params.code} />;
}