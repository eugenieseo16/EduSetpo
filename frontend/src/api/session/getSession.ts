import Api from "../../lib/customApi";

export async function getSession(sessionId: number) {
  try {
    const response = await Api.get(`/session/detail/${sessionId}`, {
      headers: {
        // Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
