import Pagination from "./components/Pagination";

export default function Home({searchParams}: {searchParams: {page: string}}) {
  console.log(searchParams.page);
  return (
    <Pagination
      itemCount={100}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    />
  );
}
