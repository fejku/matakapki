import Link from "next/link";
import Layout from "../../components/Layout";

interface Props {}

const AplikacjePage: React.FC<Props> = () => {
  return (
    <Layout>
      <Link href="/aplikacje/manga">
        <a>Manga</a>
      </Link>
      <Link href="/aplikacje/potrawy">
        <a>Potrawy</a>
      </Link>
      <Link href="/aplikacje/praca">
        <a>Praca</a>
      </Link>
    </Layout>
  );
};

export default AplikacjePage;
