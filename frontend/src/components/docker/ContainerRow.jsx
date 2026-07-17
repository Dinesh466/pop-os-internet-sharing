import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

function ContainerRow({ container, refresh }) {
  return (
    <tr>
      <td>{container.name}</td>
      <td>{container.image}</td>
      <td>
        <StatusBadge status={container.status} />
      </td>
      <td>
	<ActionButtons
		  container={container}
		  refresh={refresh}
		/>
      </td>
    </tr>
  );
}

export default ContainerRow;
