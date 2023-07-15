export default function Table({ data }) {
  let no = 1;
  return (
    <table className="border w-full mx-auto text-left">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{no++}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Table.propTypes;
