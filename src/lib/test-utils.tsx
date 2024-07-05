import { RecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";

export const RecoilObserver = ({
  node,
  onChange,
}: {
  //eslint-disable-next-line
  node: RecoilState<any>;
  onChange: jest.Mock;
}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
