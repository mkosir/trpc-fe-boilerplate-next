import { SharedSquare, USER_ROLES, trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const HomePage = () => {
  const seedDbMutation = trpcApiBoilerplateClient.util.seedDb.useMutation({
    onSuccess: (data) => console.log(data),
  });

  const handleSeedDb = () => {
    seedDbMutation.mutate();
  };

  console.log('Exported - SharedSquare: ', SharedSquare);
  console.log('Exported - USER_ROLES: ', USER_ROLES);

  return (
    <div className="flex justify-center text-center mt-10">
      <div>
        <img src="./heisenberg.png" alt="heisenberg" className="mx-auto w-[110px] mb-1" />
        <div className="mb-1 text-lg font-medium">tRPC Frontend Boilerplate</div>
        <button
          className="bg-blueSky-400 hover:bg-blueSky-500 active:bg-blueSky-600 text-sm text-white p-1 px-3 rounded"
          onClick={handleSeedDb}
        >
          Seed DB
        </button>
      </div>
    </div>
  );
};
