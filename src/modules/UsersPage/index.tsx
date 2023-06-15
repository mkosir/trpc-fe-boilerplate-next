import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

import { UserCard } from './UserCard';

export const UsersPage = () => {
  const { data: users } = trpcApiBoilerplateClient.user.list.useQuery();

  return (
    <div>
      <h3>👤 Users</h3>
      <div className="mt-4 flex flex-wrap">
        {!users ? 'Loading...' : users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};
