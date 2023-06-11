import { trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

import { UserCard } from './UserCard';

export const UsersPage = () => {
  const { data: users } = trpcApiBoilerplateClient.user.list.useQuery();
  const userDeleteMutation = trpcApiBoilerplateClient.user.destroy.useMutation();

  const handleUserDelete = (userId: string) => {
    userDeleteMutation.mutate({ id: userId });
  };

  return (
    <div>
      <h3>👤 Users</h3>
      <div className="flex flex-wrap">
        {!users
          ? 'Loading...'
          : users.map((user) => <UserCard key={user.id} user={user} onUserDelete={handleUserDelete} />)}
      </div>
    </div>
  );
};
