import Link from "next/link";
import Layout from "../../../components/Layout";

interface Props {}

const PracaPage: React.FC<Props> = () => {
  return (
    <Layout>
      <Link href="/aplikacje/praca/ile_czasu_zostalo">
        <a>Ile czasu zostało</a>
      </Link>
      <Link href="/aplikacje/praca/nadgodziny">
        <a>Nadgodziny</a>
      </Link>
    </Layout>
  );
};

export default PracaPage;
