import { User, Users, trpcApiBoilerplateClient } from 'common/trpc-api-boilerplate';

export type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const utils = trpcApiBoilerplateClient.useContext();

  const handleUserDeleteSuccess = async (users: Users) => {
    console.info('Deleted user: ', users);
    await utils.user.list.invalidate();
  };

  const { mutate: mutateDeleteUser, isLoading: isDeletingUser } = trpcApiBoilerplateClient.user.destroy.useMutation({
    onSuccess: handleUserDeleteSuccess,
  });

  const handleUserDelete = () => {
    mutateDeleteUser({ id: user.id });
  };

  return (
    <div className="mb-4 mr-4 flex w-72 justify-between rounded-md bg-blueSky-50/5 p-3 shadow shadow-blueSky-500/60">
      <div>
        <div>{user.name}</div>
        <div className="italic text-gray-400">{user.username}</div>
        <div className="capitalize">{user.role}</div>
        <button
          className="rounded bg-blueSky-400 p-0.5 px-2 text-xs text-white hover:bg-blueSky-500 active:bg-blueSky-600"
          disabled={isDeletingUser}
          onClick={handleUserDelete}
        >
          {isDeletingUser ? <span className="animate-pulse">Deleting...</span> : 'Delete'}
        </button>
      </div>
      <img src={user.imageUrl ?? 'no-user.jpg'} alt={user.username} className="ml-4 h-24 rounded" />
    </div>
  );
};
