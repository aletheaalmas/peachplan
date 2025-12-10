import logoImage from "./assets/logo.svg"
export function Logo({
  name,
}: {
  name: string;
}) {
  return <img src={logoImage} alt={name} width={80} height={75}/>;
}
