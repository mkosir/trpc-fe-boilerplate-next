import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const HomePage = () => {
  const seedDbMutation = trpcApiBoilerplateClient.util.seedDb.useMutation({
    onSuccess: (data) => console.log(data),
  });

  const handleSeedDb = () => {
    seedDbMutation.mutate();
  };

  return (
    <div>
      <img src="./heisenberg.png" alt="heisenberg" width={110} />
      <div>tRPC Frontend Boilerplate</div>
      <button onClick={handleSeedDb}>Seed DB</button>
    </div>
  );
};
