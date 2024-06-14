import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();

  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));

    setRequest(request);

    return () => request.abort();
  }, [dispatch, thunk, ...params]);

  console.log("status", status);

  return status;
};
