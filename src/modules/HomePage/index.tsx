import { useState } from 'react';
import { SharedSquare, USER_ROLES } from 'trpc-api-boilerplate';

import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const HomePage = () => {
  const [dbSeedMessage, setDbSeedMessage] = useState<null | string>(null);

  const seedDbMutation = trpcApiBoilerplateClient.util.seedDb.useMutation({
    onSuccess: setDbSeedMessage,
  });

  const handleSeedDb = () => {
    seedDbMutation.mutate();
  };

  console.log('Exported - SharedSquare: ', SharedSquare);
  console.log('Exported - USER_ROLES: ', USER_ROLES);

  return (
    <div className="flex justify-center text-center mt-10">
      <div>
        <img
          src="https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate/main/misc/heisenberg.png"
          alt="heisenberg"
          className="mx-auto w-[110px] mb-1"
        />
        <div className="mb-1 text-lg font-medium">tRPC Frontend Boilerplate</div>
        <button
          className="mb-5 bg-blueSky-400 hover:bg-blueSky-500 active:bg-blueSky-600 text-sm text-white p-1 px-3 rounded"
          onClick={handleSeedDb}
        >
          Seed DB
        </button>
        {dbSeedMessage && (
          <div
            className="opacity-0 animate-text-appear text-sm text-blueSky-300"
            onAnimationEnd={() => setDbSeedMessage(null)}
          >
            {dbSeedMessage}
          </div>
        )}
      </div>
    </div>
  );
};
