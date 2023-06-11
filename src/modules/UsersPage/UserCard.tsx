import { User } from 'common/trpc-api-boilerplate';

export type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div>
      <div>{user.name}</div>
    </div>
  );
};
