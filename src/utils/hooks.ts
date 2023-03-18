import { useCallback, useState, useEffect } from "react";

const useFetch = ({ path, method }: any) => {
  const [result, setResult] = useState<object>()
  const [loading, setLoading] = useState(false);
  const [statusCode, setCode] = useState(-1);

  const fetchData = useCallback(async () => {
    const response = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      method: method
    });
    setCode(response.status);
    try {
      const text = await response.text();
      const data = JSON.parse(text);
      setResult(data);
    } catch (err) {
      setResult({});
    }
    setLoading(false);
  }, [method, path]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return ([result, loading, statusCode]);
}

export function useGet(path: string): any {
  return useFetch({ path, method: "GET" });
}