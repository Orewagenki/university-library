import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const session = await auth();
  
  const latestBooks = await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt)) as Book[];
  
  return (
    <>
    <BookOverview {...latestBooks[0]} userId={session?.user?.id as string} />

    <BookList
      title="Latest Books"
      books={latestBooks.slice(1)}
      containerClassName="mt-28"
    />
  </>
  )
};

export default Home;
