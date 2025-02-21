import React from "react";

import Carousel from "./Carousel";
import useFetch from "../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return data ? (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endPoint={mediaType}
    />
  ) : (
    <div className="title">No Recommendations</div>
  );
};

export default Recommendation;
