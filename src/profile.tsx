export function Profile({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) {
  return <img src={imageUrl} alt={name} width={200} height={300}/>;
}
