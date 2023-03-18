import axios from "axios";
import React from "react";

const baseURL = "https://dev.mentorclan.com/api/mentors";

export default function TestFetch() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
        {console.log(post)}
    </div>
  );
}