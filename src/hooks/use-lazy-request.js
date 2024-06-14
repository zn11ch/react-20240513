import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export const useLazyRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();

  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId),
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback(() => {
    setRequest(dispatch(thunk(...params)));
  }, [dispatch, thunk, ...params]);

  return [status, makeRequest];
};
