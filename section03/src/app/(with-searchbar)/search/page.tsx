import ClientComponent from "@/components/client-component";

export default async function Page(props: {
  searchParams: Promise<{ q?: string }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div>
      Search 페이지 : {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
