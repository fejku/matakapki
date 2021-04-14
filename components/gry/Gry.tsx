import Link from "next/link";

interface Props {}

const Gry = (props: Props) => {
  return (
    <div>
      <Link href="/gry/kolory">
        <a>Kolory</a>
      </Link>
      <Link href="/gry/refleks">
        <a>Refleks</a>
      </Link>
    </div>
  );
};

export default Gry;
