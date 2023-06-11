import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const BatchesPage = () => {
  const { data: batches } = trpcApiBoilerplateClient.batch.list.useQuery();

  return (
    <div>
      <h3>💊 Batches</h3>
      <div className="italic my-2">Total No. of batches: {batches?.length}</div>
      {!batches ? (
        'Loading...'
      ) : (
        <ul className="list-disc list-inside">
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
