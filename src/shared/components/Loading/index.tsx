interface Props {
  isError?: boolean;
}

export const Loading = ({ isError }: Props) => {
  if (isError) {
    throw Error;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2.5">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );
};
