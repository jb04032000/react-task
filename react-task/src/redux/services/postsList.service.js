import API_URLS from "../../basic/constants/apiUrls";
import myAxios from "../../config/my-axios";

// get posts list
export function getPostsList() {
  const url = `/${API_URLS.posts_list}`;
  return myAxios.get(url).then((response) => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        data: "",
        error: "",
      };
    }
  });
}
