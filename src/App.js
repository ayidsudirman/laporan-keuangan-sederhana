// import logo from "./logo.svg";
import "./App.css";

function App() {
  const dataKeuangan = [
    {
      tanggal: "1 Januari 2021",
      uraian: "Saldo Awal",
      debit: 21000000,
      kredit: 0,
    },
    {
      tanggal: "1 Januari 2021",
      uraian: "Gaji Karyawan",
      debit: 0,
      kredit: 3000000,
    },
    {
      tanggal: "1 Januari 2021",
      uraian: "Service AC",
      debit: 0,
      kredit: 500000,
    },
    {
      tanggal: "1 Januari 2021",
      uraian: "Pembelian ATK",
      debit: 0,
      kredit: 200000,
    },
    {
      tanggal: "2 Januari 2021",
      uraian: "Pembayaran Order #3D20210001",
      debit: 500000,
      kredit: 0,
    },
    {
      tanggal: "2 Januari 2021",
      uraian: "Pembayaran Order #3D20210002",
      debit: 500000,
      kredit: 0,
    },
    {
      tanggal: "5 Januari 2021",
      uraian: "Pembayaran Order #3D20210005",
      debit: 200000,
      kredit: 0,
    },
    {
      tanggal: "9 Januari 2021",
      uraian: "Pembayaran Order #3D20210021",
      debit: 100000,
      kredit: 0,
    },
    {
      tanggal: "14 Januari 2021",
      uraian: "Pembelian Unit PC",
      debit: 0,
      kredit: 5970000,
    },
    {
      tanggal: "14 Januari 2021",
      uraian: "Pembayaran Order #3D20210007",
      debit: 350000,
      kredit: 0,
    },
    {
      tanggal: "18 Januari 2021",
      uraian: "Pembayaran Order #3D2021011",
      debit: 275000,
      kredit: 0,
    },
    {
      tanggal: "18 Januari 2021",
      uraian: "Pembayaran Order #3D2021012",
      debit: 275000,
      kredit: 0,
    },
    {
      tanggal: "18 Januari 2021",
      uraian: "Pembayaran Order #3D2021016",
      debit: 500000,
      kredit: 0,
    },
  ];

  let totalDebit = dataKeuangan.reduce(function (value, element) {
    return value + element.debit;
  }, 0);

  let totalKredit = dataKeuangan.reduce(function (value, element) {
    return value + element.kredit;
  }, 0);

  let saldo = 0;

  return (
    <div>
      <div className="header">
        <h3>Laporan Keuangan CV. Berkah Maju</h3>
        <h4>Januari 2021</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th rowSpan="2">No.</th>
            <th rowSpan="2">Tanggal</th>
            <th rowSpan="2">Ket/Uraian</th>
            <th colSpan="2">Jumlah</th>
            <th rowspan="2">Saldo</th>
          </tr>
          <tr>
            <th>Debit</th>
            <th>Kredit</th>
          </tr>
        </thead>
        <tbody>
          {dataKeuangan.map((data, index) => (
            <tr>
              <td className="center">{index + 1}</td>
              <td>{data.tanggal}</td>
              <td>{data.uraian}</td>
              <td className="right">
                <span>Rp. </span> {data.debit.toLocaleString("id-ID")}
              </td>
              <td className="right">
                <span>Rp. </span> {data.kredit.toLocaleString("id-ID")}
              </td>
              <td className="right">
                <span>Rp. </span>{" "}
                {(saldo = saldo + (data.debit - data.kredit)).toLocaleString(
                  "id-ID"
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">TOTAL</td>
            <td className="right">
              <span>Rp. </span> {totalDebit.toLocaleString("id-ID")}
            </td>
            <td className="right">
              <span>Rp. </span> {totalKredit.toLocaleString("id-ID")}
            </td>
            <td className="right">
              <span>Rp. </span>{" "}
              {(totalDebit - totalKredit).toLocaleString("id-ID")}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
