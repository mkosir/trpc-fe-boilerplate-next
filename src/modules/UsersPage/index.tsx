import { Users, trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

import { UserCard } from './UserCard';

export const UsersPage = () => {
  const utils = trpcApiBoilerplateClient.useContext();

  const handleUserDeleteSuccess = async (user: Users) => {
    console.log('🔎 Log ~ handleUserDeleteSuccess ~ user:', user);

    await utils.user.list.invalidate();
  };

  const { data: users } = trpcApiBoilerplateClient.user.list.useQuery();
  const userDeleteMutation = trpcApiBoilerplateClient.user.destroy.useMutation({ onSuccess: handleUserDeleteSuccess });

  const handleUserDelete = (userId: string) => {
    userDeleteMutation.mutate({ id: userId });
  };

  return (
    <div>
      <h3>👤 Users</h3>
      <div className="flex flex-wrap mt-4">
        {!users
          ? 'Loading...'
          : users.map((user) => <UserCard key={user.id} user={user} onUserDelete={handleUserDelete} />)}
      </div>
    </div>
  );
};
