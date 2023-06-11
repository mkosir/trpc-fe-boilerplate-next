import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const BatchesPage = () => {
  const { data: batches } = trpcApiBoilerplateClient.batch.list.useQuery();

  return (
    <div>
      <h3>💊 Batches</h3>
      <div style={{ paddingBottom: '10px', fontStyle: 'italic' }}>Total No. of batches: {batches?.length}</div>
      {!batches ? (
        'Loading...'
      ) : (
        <ul>
          {batches.map((batch) => (
            <li key={batch.id}>
              {batch.title} - {batch.weight}kg - {batch.purity}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
