import { Loader } from 'common/components';
import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const BatchesPage = () => {
  const { data: batches } = trpcApiBoilerplateClient.batch.list.useQuery();

  return (
    <div>
      <h3>💊 Batches</h3>
      <div className="my-2 italic">Total No. of batches: {batches?.length}</div>
      {!batches ? (
        <Loader />
      ) : (
        <ul className="list-inside list-disc">
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
