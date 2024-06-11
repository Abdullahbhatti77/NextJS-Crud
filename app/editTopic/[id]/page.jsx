import EditTopicForm from "../../../components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `https://next-js-crud-kappa.vercel.app/api/topics/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error in fetching data");
    }
    return res.json();
  } catch (err) {
    console.log(err);
    return []; // Return an empty array to avoid potential errors during rendering
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return (
    <>
      <EditTopicForm id={id} title={title} description={description} />
    </>
  );
}
