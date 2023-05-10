export function useCheckListMake(type: string, data: any): JSX.Element[] {
  const arr = [];

  if (type === "homework") {
    data.isCompleted
      ? arr.push(<input type="checkbox" checked />)
      : arr.push(<input type="checkbox" />);
    arr.push(<span>{data.content}</span>);
    arr.push(<select>{data.session}</select>);
  }

  // if (type === "etc") {
  //   arr.push(
  //     <span
  //       style={
  //         data.alertIsRead
  //           ? { color: "var(--fade-font-color)" }
  //           : { color: "var(--font-color)" }
  //       }
  //     >
  //       {data.alertSeq}
  //     </span>
  //   );
  //   arr.push(
  //     <span
  //       style={
  //         data.alertIsRead
  //           ? { color: "var(--fade-font-color)" }
  //           : { color: "var(--font-color)" }
  //       }
  //     >
  //       {data.alertTitle}
  //     </span>
  //   );
  //   arr.push(
  //     <span
  //       style={
  //         data.alertIsRead
  //           ? { color: "var(--fade-font-color)" }
  //           : { color: "var(--font-color)" }
  //       }
  //     >
  //       {data.alertCreatedAt}
  //     </span>
  //   );
  // }

  return arr;
}
