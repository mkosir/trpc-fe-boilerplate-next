import { useState } from 'react';
import { SharedSquareObject, USER_ROLES } from 'trpc-api-boilerplate';

import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export const HomePage = () => {
  const [dbSeedMessage, setDbSeedMessage] = useState<null | string>(null);

  const { mutate: mutateSeedDb } = trpcApiBoilerplateClient.util.seedDb.useMutation({
    onSuccess: setDbSeedMessage,
  });

  console.info('Exported from tRPC backend repo - SharedSquareObject: ', SharedSquareObject);
  console.info('Exported from tRPC backend repo - USER_ROLES: ', USER_ROLES);

  return (
    <div className="mt-10 flex justify-center text-center">
      <div>
        <img
          src="https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate/main/misc/heisenberg.png"
          alt="heisenberg"
          className="mx-auto mb-1 w-[110px]"
        />
        <div className="mb-1 text-lg font-medium">tRPC Frontend Boilerplate</div>
        <button
          className="mb-5 rounded bg-blueSky-400 p-1 px-3 text-sm text-white hover:bg-blueSky-500 active:bg-blueSky-600"
          onClick={() => mutateSeedDb()}
        >
          Seed DB
        </button>
        {dbSeedMessage && (
          <div
            className="animate-text-appear text-sm text-blueSky-300 opacity-0"
            onAnimationEnd={() => setDbSeedMessage(null)}
          >
            {dbSeedMessage}
          </div>
        )}
      </div>
    </div>
  );
};
