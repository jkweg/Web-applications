
function Studenci(){

    const studenci = [{imie: "Andrzej" , nazwisko: "Kononowicz" , rocznik: "1997"} , 
        {imie: "Michal" , nazwisko: "Pazdan" , rocznik: "1987"},
        {imie: "Andrzej" , nazwisko: "Golota" , rocznik: "1977"} ];
    
    return(
        <table >
            <thead>
                <th> Imie: </th>
                <th> Nazwisko: </th>
                <th> Rocznik: </th>
            </thead>
            <tbody>
                {studenci.map((student,indeks) => 
                <tr key={indeks}>
                    <td> {student.imie} </td>
                    <td> {student.nazwisko} </td>
                    <td> {student.rocznik} </td>
                </tr>)}
            </tbody>
        </table>
    );

}

export default Studenci