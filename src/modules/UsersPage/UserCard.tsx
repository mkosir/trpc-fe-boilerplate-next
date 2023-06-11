import { User } from 'common/trpc-api-boilerplate';

export type UserCardProps = {
  user: User;
  onUserDelete: (userId: string) => void;
};

export const UserCard = ({ user, onUserDelete }: UserCardProps) => {
  return (
    <div className="flex justify-between w-72 mr-4 mb-4 p-3 rounded-md bg-blueSky-50/5 shadow shadow-blueSky-500/60">
      <div>
        <div>{user.name}</div>
        <div className="italic text-gray-400">{user.username}</div>
        <div className="capitalize">{user.role}</div>
        {/* {isDeletingUser && <Progress />} */}
        <button onClick={() => onUserDelete(user.id)}>Delete</button>
      </div>
      <img src={user.imageUrl ?? '/no-user.jpg'} alt={user.username} className="rounded ml-4 h-24" />
    </div>
  );
};
