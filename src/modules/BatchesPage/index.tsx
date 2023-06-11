import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const BatchesPage = () => {
  const { data: batches } = trpcApiBoilerplateClient.batch.list.useQuery();

  return (
    <div>
      <h3>💊 Batches</h3>
      <div style={{ paddingBottom: '10px', fontStyle: 'italic' }}>Total No. of batches: {batches?.length}</div>
      {!batches
        ? 'Loading...'
        : batches.map((batch) => (
            <div key={batch.id}>
              <div>{batch.title}</div>
              <div>{batch.weight}kg</div>
              <div>{batch.purity}%</div>
            </div>
          ))}
    </div>
  );
};
