import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "../actions/user";
import Redirect from "../components/shared/Redirect";
import withAuth from "../hoc/secret";

const Secret = ({ title }) => {
  const { data, loading } = useGetUser();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <Redirect to="/api/v1/login" />;
  } else {
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am Secret Page - {title}</h1>
        </BasePage>
      </BaseLayout>
    );
  }
};

export default withAuth(Secret);