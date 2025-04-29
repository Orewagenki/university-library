'use server';
import { db} from "@/database/drizzle";

const createBook = async (BookParams){
try{
  const newBook = await db
  .insert(books)
  .values({
    ...params,
    availableCopies: params.totalCopies,
  })
  .returning();

  return{
    success: true,
    data: JSON.parse(JSON.stringify([0])),
  }
}catch(error){
  console.log(error);
  return {
    success: false,
    message: "An error occurred while creating the book"
};
}
};
