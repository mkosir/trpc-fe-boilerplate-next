import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const HomePage = () => {
  const seedDbMutation = trpcApiBoilerplateClient.util.seedDb.useMutation({
    onSuccess: (data) => console.log(data),
  });

  const handleSeedDb = () => {
    seedDbMutation.mutate();
  };

  return (
    <div className="flex justify-center text-center mt-10">
      <div>
        <img src="./heisenberg.png" alt="heisenberg" className="mx-auto w-[110px] mb-1" />
        <div className="mb-1 text-lg font-medium">tRPC Frontend Boilerplate</div>
        <button onClick={handleSeedDb}>Seed DB</button>
      </div>
    </div>
  );
};
