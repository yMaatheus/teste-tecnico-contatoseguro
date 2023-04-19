interface Props<T> {
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  columns: React.ReactNode;
  data: T[];
}

export const GenericTable = <T extends unknown>({
  renderItem,
  keyExtractor,
  columns,
  data,
}: Props<T>) => (
  <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>{columns}</thead>
      <tbody>
        {data?.map((row) => (
          <tr className="hover" key={keyExtractor(row)}>
            {renderItem(row)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
