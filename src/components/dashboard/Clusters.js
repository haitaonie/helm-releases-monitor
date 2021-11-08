import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import Cluster from "./Cluster";
import Loading from "../common/Loading";

export default function Clusters({ getReleases }) {
  const [clusters, setClusters] = useState([]);
  const [page, setPage] = useState({ loading: true, error: `` });
  const [selection, setSelection] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/clusters")
        .then((res) => {
          if (!res.ok) throw Error("error coming back from server when fetching info");
          return res.json();
        })
        .then((data) => {
          setClusters(data);
          setPage({ loading: false, error: `` });
        })
        .catch((err) => {
          setPage({ loading: false, error: err.message });
        });
    }, 10000);
  }, []);

  if (page.loading) {
    return (
      <div className={css(styles.flex_environments)}>
        <Loading />
      </div>
    );
  } else if (page.error.length > 0) {
    return (
      <div className={css(styles.flex_environments)}>
        <h1>{page.error}</h1>
      </div>
    );
  }
  return (
    <div className={css(styles.flex_environments)}>
      {clusters.map((cluster) => (
        <div className={css(styles.flex_environment)}>
          <Cluster
            cluster={cluster}
            selected={cluster === selection}
            selectCluster={() => select(cluster)}
            getReleases={getReleases}
          />
        </div>
      ))}
    </div>
  );

  function select(cluster) {
    setSelection(cluster);
  }
}

export const styles = StyleSheet.create({
  flex_environments: {
    display: "flex",
    flexWrap: "wrap"
  },
  flex_environment: {
    margin: 5,
  },
});


