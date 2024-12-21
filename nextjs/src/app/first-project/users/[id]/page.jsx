import UserInfo from "@/pages/first-project/UserInfo";

export default async function page({ params }) {
  const { id } = await params;
  return (
    <UserInfo paramsId={id} />
  );
}