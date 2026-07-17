import ContainerRow from "./ContainerRow";

function ContainerTable({ containers, refresh }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {containers.map((container) => (
	<ContainerRow
	  key={container.id}
	  container={container}
	  refresh={refresh}
	/>        ))}
      </tbody>
    </table>
  );
}

export default ContainerTable;
