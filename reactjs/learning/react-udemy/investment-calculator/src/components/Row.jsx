export default function Row({rowData}){
    return <tr>
        {rowData.map(data=> <td key={data} >{data}</td>)}
    </tr>
}