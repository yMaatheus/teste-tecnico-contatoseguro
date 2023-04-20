import { QueryObserverResult } from "@tanstack/react-query";

export type CreateModalProps<T> = {
  refetch: () => Promise<QueryObserverResult<T[], unknown>>;
};
